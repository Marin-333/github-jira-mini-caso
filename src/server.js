const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/config", (req, res) => {
  res.json({
    jiraConfigured: Boolean(
      process.env.JIRA_BASE_URL &&
      process.env.JIRA_EMAIL &&
      process.env.JIRA_API_TOKEN &&
      process.env.JIRA_PROJECT_KEY
    ),
    jiraProjectKey: process.env.JIRA_PROJECT_KEY || null
  });
});

app.post("/api/jira/issues", async (req, res) => {
  const { summary, description } = req.body;

  if (!summary || !summary.trim()) {
    return res.status(400).json({ error: "El resumen es obligatorio." });
  }

  const required = [
    "JIRA_BASE_URL",
    "JIRA_EMAIL",
    "JIRA_API_TOKEN",
    "JIRA_PROJECT_KEY"
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length) {
    return res.status(500).json({
      error: "Jira no está configurado.",
      missing
    });
  }

  const auth = Buffer.from(
    `${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`
  ).toString("base64");

  const payload = {
    fields: {
      project: {
        key: process.env.JIRA_PROJECT_KEY
      },
      summary: summary.trim(),
      description: {
        type: "doc",
        version: 1,
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: (description || "Creada desde la mini aplicación GitHub + Jira.").trim()
              }
            ]
          }
        ]
      },
      issuetype: {
        name: process.env.JIRA_ISSUE_TYPE || "Task"
      }
    }
  };

  try {
    const response = await fetch(
      `${process.env.JIRA_BASE_URL.replace(/\/$/, "")}/rest/api/3/issue`,
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Jira rechazó la solicitud.",
        details: data
      });
    }

    const issueUrl =
      `${process.env.JIRA_BASE_URL.replace(/\/$/, "")}/browse/${data.key}`;

    res.status(201).json({
      message: "Issue creado correctamente en Jira.",
      key: data.key,
      id: data.id,
      url: issueUrl
    });
  } catch (error) {
    res.status(500).json({
      error: "No fue posible comunicarse con Jira.",
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
