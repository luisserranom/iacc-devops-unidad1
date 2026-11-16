# Decisiones técnicas del proyecto

1. **Servicio estático de salud ficticia.** Se implementa solamente una interfaz de simulación, sin citas reales ni datos de pacientes. Cumple el requerimiento de no utilizar API o base de datos.
2. **Nginx Alpine.** El Dockerfile utiliza expresamente `nginx:alpine`, según lo solicitado en la actividad. El resultado es una imagen con archivos estáticos accesibles desde Nginx.
3. **Docker Compose.** Permite ejecutar el servicio de manera reproducible con `docker compose up -d --build` y verificarlo en `http://localhost:8080`.
4. **Puerto local.** La configuración publica `127.0.0.1:8080:80`, reduciendo exposición accidental a otras máquinas. No hay despliegue a Internet.
5. **Seguridad de datos.** Los datos de la interfaz son ficticios. No hay campos de identificación personal ni llamadas a servicios externos. `.gitignore` excluye `.env` y archivos de secretos; `.env.example` contiene únicamente una variable no sensible.
6. **Control de versiones.** Se recomienda `main` estable, una rama feature, commits descriptivos y Pull Request antes del merge, para mantener trazabilidad.
7. **Automatización opcional.** GitHub Actions valida los archivos, construye la imagen y ejecuta una prueba local en el runner. No sustituye el monitoreo local pedido por la tarea.
8. **Mejora continua propuesta.** (a) Fijar y actualizar una etiqueta/digest de imagen base; (b) incorporar escaneo de vulnerabilidades en CI; (c) automatizar más pruebas de accesibilidad y funcionalidad; (d) implementar monitoreo y alertas centralizadas en un entorno futuro autorizado; (e) documentar estrategia de rollback; (f) agregar revisión obligatoria del Pull Request y políticas de ramas protegidas.

**Criterio de evidencia:** no informar métricas, logs, capturas o estados de GitHub Actions sin observarlos realmente.
