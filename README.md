# Desarrollo de una Plataforma de Gestión de Proyectos Ágiles

La empresa necesita una plataforma robusta para la gestión de proyectos ágiles que integre múltiples funcionalidades avanzadas. El sistema debe manejar la autenticación de usuarios, gestionar roles y permisos, coordinar el flujo de trabajo de las tareas, y proporcionar reportes en tiempo real, entre otras características. Los actores involucrados son el 'Gerente de Proyecto', el 'Desarrollador', y el 'Cliente'. Las operaciones clave incluyen la creación y transición de tareas entre estados (backlog, in progress, review, done, archived), la notificación a través de webhooks, y la visualización de reportes en dashboards. El sistema debe manejar un throughput de 1 500 solicitudes por segundo en hora pico y mantener una latencia menor a 500ms para el 95% de las operaciones. En caso de falla, el sistema debe garantizar la consistencia de los datos y proporcionar mecanismos de recuperación automática.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Node.js Enterprise Platform |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 40 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Autenticación y Autorización

**Objetivo:** Implementar un sistema de autenticación OAuth2 y un sistema de roles basado en RBAC con permisos granulares.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseñar el flujo de autenticación OAuth2 para usuarios.
- Implementar un sistema de roles y permisos que permita asignar accesos granulares a diferentes recursos.
- Establecer mecanismos de rate limiting por usuario y por endpoint para prevenir abusos.

**Entregable:** Sistema de autenticación y autorización funcional con rate limiting.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los posibles puntos de falla en el proceso de autenticación y cómo mitigarlos.
- Evalúa diferentes estrategias para la gestión de roles y permisos.

</details>

### Fase 2: Motor de Workflow y Notificaciones

**Objetivo:** Desarrollar un motor de workflow para manejar transiciones de estado de las tareas y un sistema de notificaciones a través de webhooks.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Implementar un motor de workflow que permita transiciones de estado de las tareas.
- Integrar servicios externos para notificaciones en Slack y Microsoft Teams a través de webhooks.
- Garantizar la idempotencia de las operaciones de transición de estado.

**Entregable:** Motor de workflow funcional con integraciones de notificación y garantía de idempotencia.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los posibles estados y transiciones de las tareas.
- Evalúa diferentes servicios de notificación y cómo integrarlos de manera efectiva.

</details>

### Fase 3: Reportes en Tiempo Real y Persistencia

**Objetivo:** Implementar un sistema de reportes en tiempo real usando WebSockets y persistencia en PostgreSQL con migraciones automatizadas.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Desarrollar un sistema de reportes en tiempo real que actualice dashboards de progreso utilizando WebSockets.
- Implementar persistencia en PostgreSQL con migraciones automatizadas usando una herramienta de gestión de migraciones.
- Integrar un sistema de caché con Redis para las consultas más frecuentes del dashboard.

**Entregable:** Sistema de reportes en tiempo real funcional con persistencia en PostgreSQL y caché en Redis.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la latencia y el throughput requeridos para el sistema de reportes.
- Evalúa diferentes herramientas de gestión de migraciones y su integración con PostgreSQL.

</details>

### Fase 4: Búsqueda Full-Text y Monitoreo

**Objetivo:** Integrar un sistema de búsqueda full-text sobre las tareas y comentarios usando ElasticSearch y configurar monitoreo y logging.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Implementar un sistema de búsqueda full-text sobre las tareas y comentarios utilizando ElasticSearch.
- Configurar logging estructurado con Pino y monitoreo de performance con Prometheus.
- Implementar health checks para Kubernetes con readiness y liveness probes.

**Entregable:** Sistema de búsqueda full-text funcional con logging, monitoreo y health checks configurados.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la eficiencia y la escalabilidad del sistema de búsqueda.
- Evalúa diferentes herramientas de logging y monitoreo y su integración con el sistema.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un sistema de autenticación OAuth2 y cómo se integra con un sistema de roles basado en RBAC?
- **paraQueSirve**: ¿Para qué sirve un motor de workflow en una plataforma de gestión de proyectos ágiles?
- **comoSeUsa**: ¿Cómo se usa un sistema de reportes en tiempo real para actualizar dashboards de progreso?
- **erroresComunes**: ¿Cuáles son los errores comunes en la implementación de un sistema de búsqueda full-text y cómo se mitigan?
- **queDecisionesImplica**: ¿Qué decisiones implica la configuración de logging y monitoreo en una plataforma de gestión de proyectos ágiles?

## Criterios de Evaluacion

- Implementar un sistema de autenticación OAuth2 y un sistema de roles basado en RBAC con permisos granulares.
- Desarrollar un motor de workflow para manejar transiciones de estado de las tareas y un sistema de notificaciones a través de webhooks.
- Implementar un sistema de reportes en tiempo real usando WebSockets y persistencia en PostgreSQL con migraciones automatizadas.
- Integrar un sistema de búsqueda full-text sobre las tareas y comentarios usando ElasticSearch y configurar logging y monitoreo.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
