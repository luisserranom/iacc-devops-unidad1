# Guía de evidencias para el informe IACC

**Nota:** todas las capturas deben ser tomadas en el equipo del estudiante; este documento es una guía, no evidencia de ejecución.

## 1. Evidencia de control de versiones (Actividad 3)

- Captura de GitHub del repositorio **público** y su URL visible.
- Captura de la rama `feature/interfaz-reservas`.
- Captura del historial con varios commits descriptivos.
- Captura del Pull Request `feature/interfaz-reservas` → `main`, con su revisión y estado (o comentario de autoevaluación cuando se trabaja de forma autónoma).
- Captura del Pull Request integrado (si se realiza merge).

## 2. Evidencia Docker obligatoria (Actividades 4 y 5)

- Terminal con `docker --version`, `docker info` y `docker run hello-world`.
- Docker Desktop abierto y motor activo.
- Terminal con `docker compose up -d --build` (muestra construcción de la imagen).
- Terminal con `docker compose ps` y/o `docker ps` (contenedor levantado y estado/puertos).
- Navegador en `http://localhost:8080` mostrando el formulario, horarios referenciales y el estado.
- Terminal con `docker logs iacc-reservas-medicas`.
- Terminal con `docker stats --no-stream iacc-reservas-medicas`.
- Terminal con `docker compose down` y el estado posterior sin el contenedor del proyecto.

## 3. Evidencia de seguridad (Actividades 4 y 6)

- Vista del `.gitignore`, `.env.example` y Dockerfile.
- Comprobar que **no** existe `.env` real, contraseñas, tokens, datos personales ni información médica en los commits o capturas.
- Captura de GitHub Actions si se utiliza el flujo opcional (no inventar resultado).

## 4. Explicación en el informe

Para cada captura agregar: **Figura número — nombre**, qué comando se utilizó, resultado observado y cómo cumple el requisito IACC.
Incluir análisis de al menos cuatro limitaciones del modelo tradicional; las ocho fases DevOps con evidencia por fase; comparación Scrum/Kanban; flujo Git; monitoreo; problemas y soluciones *realmente observados*; y cuatro mejoras futuras.

## 5. Entrega

- Enlace al repositorio GitHub **público**.
- ZIP del proyecto.
- Informe en la **plantilla oficial IACC**, exportado a PDF con nombre `Nombre_Apellido_Tarea1.pdf`.
- Capturas integradas en el informe, no únicamente sueltas.
