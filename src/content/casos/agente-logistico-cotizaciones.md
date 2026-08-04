---
title: Agente de IA para atención y cotización logística
description: Automatización conversacional para atención inicial, recomendación y cotización de envíos internacionales.
role: automation
sector: Logística
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Kommo
  - Google Sheets
---

## Problema

El cliente necesitaba automatizar una parte de la atención por WhatsApp, especialmente consultas iniciales sobre envíos, recomendaciones y cotizaciones, sin sustituir las reglas operativas por decisiones no controladas de un modelo de IA.

## Rol y responsabilidad

- Implementé el flujo conversacional, la integración de fuentes de conocimiento y las herramientas de recomendación y cotización.

## Usuarios

- Equipo comercial o de atención del cliente.
- Personas que consultan servicios de envío por WhatsApp.

## Capacidades

- Atención conversacional con contexto por conversación.
- Clasificación de la intención de cada consulta.
- Recopilación progresiva y estructuración de datos necesarios para un envío.
- Recomendación del tipo de envío según origen, destino, contenido, peso, dimensiones, urgencia y restricciones.
- Cotización estimada mediante tarifas y cálculo de peso real o volumétrico.
- Respuestas a preguntas frecuentes sobre servicios, precios, plazos, recogidas, pagos, restricciones y aranceles.
- Consulta del estado de un envío cuando el cliente aporta un número de seguimiento.
- Envío de un formulario personalizado tras la aceptación de una cotización.
- Derivación a una persona del equipo ante incertidumbre, reclamaciones, solicitudes fuera de alcance o contenidos restringidos.

## Flujo principal

1. Un cliente escribe por WhatsApp.
2. El flujo recupera el contexto disponible y clasifica la intención de la consulta.
3. Si faltan datos para recomendar o cotizar, el agente los solicita progresivamente.
4. El agente consulta la fuente de conocimiento o la herramienta adecuada: preguntas frecuentes, tarifas o reglas de envío.
5. Las reglas deterministas validan los datos, calculan peso volumétrico y generan la recomendación o cotización.
6. El agente convierte el resultado validado en una respuesta clara para el cliente y conserva el contexto necesario para el siguiente turno.

## Arquitectura e integraciones

- Orquestación: n8n.
- Datos y contexto: Supabase.
- Modelos de IA: API de OpenRouter.
- Conocimiento operativo: API de Google Docs y Google Sheets.
- CRM y mensajería: API de Kommo.

## Decisiones técnicas

- La IA interpreta lenguaje, clasifica y estructura datos; las reglas, validaciones y cálculos permanecen deterministas.
- La cotización solo puede solicitarse cuando origen, destino, peso y dimensiones están completos; el modelo no calcula tarifas por su cuenta.
- Los tiempos de tránsito, precios y regulaciones solo se comunican a partir de fuentes o herramientas autorizadas.
- Si una herramienta no devuelve una respuesta válida, el flujo escala a atención humana en vez de inventar información.
- La conversación limita la cantidad de preguntas por turno para mantener una experiencia de mensajería natural.

## Resultado

Se entregó una automatización funcional para atención inicial, recomendación y cotización, con la lógica crítica controlada por validaciones y reglas deterministas. Las métricas concretas permanecen confidenciales.
