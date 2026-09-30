# Guía rápida para la exposición

## Caso

Una empresa necesita implementar una pantalla de inicio de sesión.

### Jira

Se crea:

DEMO-1 — Implementar pantalla de inicio de sesión

Explica:

"Jira lo utilizamos para planificar y hacer seguimiento del trabajo."

### GitHub

El desarrollador crea:

```bash
git checkout -b DEMO-1-login
```

Explica:

"Creo una rama específica para trabajar en la tarea DEMO-1 sin modificar directamente la rama principal."

Después:

```bash
git add .
git commit -m "DEMO-1 Implementar pantalla de inicio de sesión"
git push -u origin DEMO-1-login
```

Explica:

"Uso la clave DEMO-1 en el commit para que Jira pueda relacionar este cambio con la tarea."

### Pull Request

En GitHub se crea un Pull Request con:

```text
DEMO-1 Implementar pantalla de inicio de sesión
```

Explica:

"El Pull Request permite revisar el código antes de integrarlo en la rama principal."

### Resultado

Jira puede mostrar la actividad de desarrollo asociada a la tarea:

- Branch
- Commit
- Pull Request

## Diferencia sencilla

GitHub:
"¿Dónde está y cómo se controla el código?"

Jira:
"¿Qué trabajo hay que hacer y en qué estado está?"

GitHub + Jira:
"Relacionamos el trabajo planificado con los cambios reales realizados en el código."

## Orden recomendado para mostrarlo

1. Abrir Jira.
2. Mostrar la tarea DEMO-1.
3. Mostrar el repositorio en GitHub.
4. Abrir la terminal.
5. Crear la rama DEMO-1-login.
6. Hacer un pequeño cambio.
7. Ejecutar add, commit y push.
8. Crear el Pull Request.
9. Regresar a Jira y mostrar la información de desarrollo.

## Frase final

"El beneficio de integrar ambas herramientas es tener trazabilidad: podemos pasar desde una tarea de Jira hasta el código y los cambios realizados en GitHub."
