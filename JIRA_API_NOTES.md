# Nota sobre la API de Jira

La aplicación usa:

POST /rest/api/3/issue

para crear una tarea en Jira Cloud.

La API v3 utiliza Atlassian Document Format (ADF) para campos como `description`.

La aplicación mantiene las credenciales en variables de entorno para evitar escribirlas directamente en el código.

Para una exposición académica, también puedes omitir esta parte y crear las tareas directamente desde la interfaz de Jira.
