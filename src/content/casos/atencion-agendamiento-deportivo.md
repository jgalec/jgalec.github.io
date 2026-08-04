---
title: Atención y agendamiento para centro deportivo
description: Sistema de atención comercial y agenda especializada para cuatro disciplinas deportivas.
role: automation
sector: Centro deportivo
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Google Calendar
  - Kommo
---

## Problema

El centro deportivo necesitaba responder preguntas básicas sobre sus servicios y permitir que los interesados coordinaran clases. A diferencia de un único servicio de agenda, el negocio opera cuatro disciplinas con reglas de horarios y disponibilidad propias: triatlón, running, natación e indoor.

## Rol y responsabilidad

- Implementé la atención comercial, la consulta de conocimiento y cuatro agentes de agenda especializados por disciplina.
- Trabajé individualmente bajo dirección de un responsable; un compañero realizaba pruebas de QA y los hallazgos se resolvían en desarrollo.

## Usuarios

- Equipo comercial y coordinadores de disciplinas.
- Personas interesadas en clases de triatlón, running, natación o entrenamiento indoor.

## Solución construida

Sistema de atención comercial y agendamiento que:

- Responde consultas básicas sobre el centro deportivo y sus disciplinas.
- Mantiene contexto conversacional para cada interesado.
- Identifica la disciplina de interés.
- Enruta el caso a uno de cuatro agentes especializados de agendamiento.
- Aplica las reglas de horario y disponibilidad propias de cada disciplina.
- Confirma, reprograma o rechaza una solicitud según las condiciones definidas por el negocio.
- Recopila de forma progresiva los datos necesarios para clasificar el lead y coordinar una clase de prueba o reserva.
- Diferencia la información comercial general de la recomendación deportiva personalizada, que se deriva a un entrenador humano.

## Flujo principal

1. Una persona escribe una consulta al CRM.
2. El agente principal interpreta la consulta, conserva el contexto y responde información básica desde las fuentes de conocimiento.
3. Si la persona desea coordinar una clase, el flujo identifica la disciplina correspondiente.
4. La solicitud se deriva al agente especializado de triatlón, running, natación o indoor.
5. El agente de agenda consulta y valida las reglas de disponibilidad de su disciplina.
6. El flujo confirma la reserva, solicita otra opción o indica una alternativa según el resultado de las validaciones.
7. La conversación y la información operativa se actualizan en el CRM.

## Arquitectura e integraciones

- Orquestación: n8n.
- Datos y contexto: Supabase.
- Modelos de IA: API de OpenRouter.
- Fuentes de conocimiento: API de Google Docs.
- Agenda: API de Google Calendar.
- CRM: API de Kommo.

## Decisiones técnicas

- Modelar cada servicio de agenda sin mezclar sus reglas operativas.
- Mantener un agente principal simple y delegar la disponibilidad a agentes especializados.
- Evitar que la IA confirme horarios sin una validación determinista contra las reglas de cada disciplina.
- Mantener continuidad entre las preguntas iniciales y la reserva final.

## Límites y guardrails verificados

- El agente puede comunicar precios, horarios, sedes, metodología general y requisitos desde fuentes controladas, pero no realiza recomendaciones deportivas personalizadas ni evaluaciones de rendimiento.
- La disciplina se identifica antes de iniciar la recopilación de datos o invocar un gestor de agenda; si la intención es ambigua, el agente solicita aclaración.
- Cada gestor especializado normaliza fechas expresadas en lenguaje natural, valida el día, la franja, la zona horaria y la disponibilidad antes de confirmar una reserva.
- Indoor incorpora validaciones adicionales de capacidad y límites de reserva asociados al plan del usuario.
- Las respuestas de error devuelven estados estructurados y alternativas válidas dentro de la misma disciplina, en lugar de aceptar horarios inexistentes.
- La información sensible de salud usada en la captación de leads requiere tratamiento especial y no se utilizará en ningún material público.

## Principio de control de IA

La IA detecta la intención, identifica la disciplina y estructura los datos de la solicitud. La disponibilidad, las reglas de agenda y la confirmación de una clase se validan y ejecutan de forma determinista.

## Resultado

Se entregó una automatización funcional de atención y agendamiento para cuatro disciplinas, con una separación explícita de las reglas de cada servicio. Las métricas concretas permanecen confidenciales.
