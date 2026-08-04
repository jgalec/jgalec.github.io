---
title: Asistente comercial para inmobiliaria residencial
description: Agente multimodal para consultas comerciales, clasificación de interés y gestión de visitas.
role: automation
sector: Inmobiliaria
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Google Calendar
  - Kommo
---

## Problema

La inmobiliaria necesitaba un asistente comercial que respondiera preguntas iniciales sobre inventario e información comercial. El objetivo principal era identificar el interés de una persona en adquirir una vivienda y gestionar la reserva de una visita con la inmobiliaria.

## Rol y responsabilidad

- Diseñé e implementé los flujos conversacionales, la consulta de conocimiento e inventario, la clasificación comercial y la automatización de agenda.
- Trabajé individualmente bajo dirección de un responsable; un compañero realizaba pruebas de QA y los hallazgos se resolvían en desarrollo.

## Usuarios

- Equipo comercial de la inmobiliaria.
- Leads que consultan viviendas y desean coordinar una visita.

## Solución construida

Asistente comercial inmobiliario capaz de:

- Procesar mensajes de texto, audio e imagen.
- Responder consultas iniciales sobre el proyecto, propiedades disponibles e información comercial.
- Conservar el contexto de la conversación.
- Clasificar el nivel de interés y actualizar el pipeline comercial.
- Agendar, reprogramar o cancelar visitas según disponibilidad.
- Proponer alternativas cuando un horario no se encuentra disponible.

La solución separa tres responsabilidades: un agente conversacional para atender al lead, un componente de agenda que normaliza y valida la solicitud, y un clasificador que actualiza el pipeline solo cuando hay evidencia suficiente de interés o una visita confirmada.

## Flujo principal

1. Un lead envía una consulta al CRM.
2. El agente procesa el mensaje y conserva el contexto relevante.
3. Consulta las fuentes de conocimiento e inventario para responder información comercial.
4. Cuando detecta interés en una visita, extrae de forma estructurada los datos necesarios.
5. El flujo de agendamiento consulta disponibilidad y aplica las reglas definidas para la operación.
6. El sistema agenda, reprograma o cancela la visita y actualiza el estado comercial en el CRM.
7. El agente comunica al lead la confirmación, una alternativa o la información necesaria para continuar.

## Arquitectura e integraciones

- Orquestación: n8n.
- Datos y contexto: Supabase.
- Modelos de IA: API de OpenRouter.
- Fuentes de conocimiento e inventario: API de Google Docs.
- Agenda: API de Google Calendar.
- CRM: API de Kommo.

## Decisiones técnicas

- Separar la interpretación de IA de las reglas de negocio y agenda.
- Evitar reservas simultáneas mediante validaciones y bloqueos temporales de disponibilidad.
- Mantener el contexto necesario sin convertir el historial completo en dependencia del modelo.
- Procesar distintos formatos de entrada sin perder el flujo comercial.
- Permitir que el flujo actualice solo las etapas comerciales autorizadas.

## Límites y guardrails verificados

- La información general, el inventario y la agenda se consultan en fuentes distintas; el agente debe usar la fuente correspondiente antes de afirmar datos factuales.
- El agente comercial no confirma una visita sin consultar el componente de agenda.
- El componente de agenda no conversa con el lead ni ejecuta directamente en el calendario: normaliza fecha y hora, valida restricciones y devuelve una salida estructurada para que el flujo externo ejecute la acción.
- Las reprogramaciones se tratan como una operación controlada: primero se valida y resuelve la cita anterior, y solo después se intenta crear la nueva.
- La actualización del pipeline toma en cuenta el historial conversacional y el resultado operativo de la agenda; no se mueve un lead a una etapa de visita confirmada ante una respuesta ambigua o un fallo de agenda.
- Las consultas fuera de las fuentes de conocimiento o el alcance comercial se escalan a un asesor humano.

## Principio de control de IA

La IA interpreta consultas, extrae datos y propone una salida estructurada. Las decisiones que afectan la agenda, disponibilidad y pipeline se validan y ejecutan de forma determinista mediante reglas del flujo e integraciones.

## Resultado

Se entregó una automatización funcional de atención comercial y gestión de visitas, conectada al CRM y al calendario. Las métricas concretas permanecen confidenciales.
