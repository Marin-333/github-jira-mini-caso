# Mini caso práctico: GitHub + Jira

## Objetivo

Demostrar un flujo sencillo de trabajo:

1. Jira registra una tarea.
2. GitHub almacena el código.
3. La rama de Git usa la clave de Jira.
4. El commit usa la misma clave.
5. El Pull Request usa la clave.
6. Jira puede asociar la actividad de desarrollo con la tarea.

## Tecnologías

- Node.js
- Express
- HTML, CSS y JavaScript
- Git / GitHub
- Jira Cloud

## 1. Requisitos

Instala Node.js y Git.

Comprueba las instalaciones:

```bash
node --version
npm --version
git --version
```

## 2. Instalar dependencias

Abre una terminal dentro de esta carpeta:

```bash
npm install
```

## 3. Ejecutar la aplicación

```bash
npm start
```

Abre:

http://localhost:3000

La aplicación funciona como demostración visual incluso sin configurar Jira.

## 4. Configurar Jira API

Copia:

```text
.env.example
```

como:

```text
.env
```

Completa:

```text
JIRA_BASE_URL=https://TU-SITIO.atlassian.net
JIRA_EMAIL=tu-correo@example.com
JIRA_API_TOKEN=TU_API_TOKEN
JIRA_PROJECT_KEY=DEMO
JIRA_ISSUE_TYPE=Task
PORT=3000
```

No publiques `.env` en GitHub.

## 5. Flujo principal para la exposición

Supongamos que Jira creó la tarea:

```text
DEMO-1 - Implementar pantalla de inicio de sesión
```

En el proyecto:

```bash
git checkout -b DEMO-1-login
```

Haz un cambio en el código y después:

```bash
git add .
git commit -m "DEMO-1 Implementar pantalla de inicio de sesión"
git push -u origin DEMO-1-login
```

En GitHub crea un Pull Request cuyo título incluya:

```text
DEMO-1 Implementar pantalla de inicio de sesión
```

Con GitHub for Atlassian configurado, Jira puede mostrar ramas, commits y Pull Requests relacionados con la tarea.

## 6. Idea para explicar el caso

"Jira se utiliza para gestionar el trabajo. Por ejemplo, aquí tenemos una tarea DEMO-1.
A partir de esa tarea creamos una rama en GitHub llamada DEMO-1-login.
Después hacemos un commit utilizando la misma clave DEMO-1.
Finalmente creamos un Pull Request con esa clave.
De esta forma, Jira y GitHub pueden relacionar la gestión de la tarea con el desarrollo del código."

## 7. Si no quieres usar la API de Jira

Puedes crear la tarea manualmente en Jira y utilizar solamente la integración GitHub + Jira.

La parte más importante de la demostración es que la clave de Jira aparezca en:

- Nombre de la rama
- Mensaje del commit
- Título del Pull Request

## 8. Seguridad

Nunca subas `.env`, contraseñas o tokens al repositorio.

El archivo `.gitignore` ya incluye:

```text
.env
```

## Estructura

```text
github-jira-mini-caso/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── src/
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```
