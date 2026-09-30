const form = document.getElementById("jiraForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  result.classList.remove("hidden");
  result.textContent = "Creando tarea en Jira...";

  const payload = {
    summary: document.getElementById("summary").value,
    description: document.getElementById("description").value
  };

  try {
    const response = await fetch("/api/jira/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      result.textContent =
        `${data.error || "Error"}${data.missing ? " Falta: " + data.missing.join(", ") : ""}`;
      return;
    }

    result.innerHTML =
      `Tarea creada: <strong>${data.key}</strong><br>` +
      `<a href="${data.url}" target="_blank">Abrir tarea en Jira</a>`;
  } catch (error) {
    result.textContent = "Error de conexión con el servidor.";
  }
});
