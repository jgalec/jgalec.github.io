---
title: Agente comercial para marca de confitería
description: Atención conversacional basada en catálogo, preguntas frecuentes y promociones actualizadas.
role: automation
sector: Confitería
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Google Docs
  - Google Sheets
  - Kommo
---

## Problema

La marca necesitaba automatizar la atención de preguntas frecuentes sobre sus productos, entre ellos obleas de amaranto y churros. La respuesta debía mantenerse actualizada con el catálogo, la información de la empresa y la promoción del día.

## Rol y responsabilidad

- Implementé la atención conversacional y la conexión con las fuentes de conocimiento comerciales.
- Trabajé individualmente bajo dirección de un responsable; un compañero realizaba pruebas de QA y los hallazgos se resolvían en desarrollo.

## Usuarios

- Equipo comercial o de atención de la marca.
- Clientes que consultan productos, promociones o información general.

## Solución construida

Agente comercial de IA para:

- Responder consultas sobre los productos del catálogo.
- Consultar una base de conocimiento con información de la empresa.
- Resolver preguntas frecuentes.
- Consultar un documento actualizado con la promoción del día.
- Mantener el contexto de la conversación para continuar la atención de un cliente.
- Guiar cotizaciones de productos y calcular subtotales cuando se confirma producto, presentación y cantidad.
- Escalar al equipo humano los pedidos, quejas o solicitudes que requieren una validación comercial u operativa.

## Flujo principal

1. Un cliente envía una consulta al canal conectado al CRM.
2. El flujo recupera el contexto disponible e identifica el tipo de pregunta: producto, información general, pregunta frecuente o promoción.
3. El agente consulta la fuente de conocimiento correspondiente.
4. El flujo valida la respuesta obtenida y la presenta en un formato comercial claro.
5. La conversación se registra para dar continuidad a la siguiente consulta.

## Arquitectura e integraciones

- Orquestación: n8n.
- Datos y contexto: Supabase.
- Modelos de IA: API de OpenRouter.
- Fuentes de conocimiento: API de Google Docs y Google Sheets.
- CRM y mensajería: API de Kommo.

## Decisiones técnicas

- Mantener una promoción diaria actualizada sin tener que modificar el flujo.
- Seleccionar la fuente de conocimiento correcta para cada tipo de consulta.
- Evitar que el agente invente disponibilidad, precios o promociones que no existan en la fuente consultada.
- Conservar el contexto comercial sin mezclar datos de clientes diferentes.

## Límites y guardrails verificados

- El agente diferencia catálogo, calculadora, base operativa, preguntas frecuentes y promociones para consultar la fuente adecuada en cada caso.
- No cotiza un producto con varias presentaciones sin confirmar primero cuál necesita el cliente.
- Los totales se calculan con una herramienta y el costo final de envío se deja sujeto a validación operativa cuando aplique.
- Las promociones solo se comunican desde la fuente vigente, evitando promociones desactualizadas o inventadas.
- Reclamaciones, pedidos de alto volumen, solicitudes especiales, envíos no estándar y datos no disponibles se escalan de forma controlada a una persona del equipo.

## Principio de control de IA

La IA interpreta la pregunta y redacta la respuesta. Los datos de catálogo, preguntas frecuentes y promociones deben provenir de fuentes controladas; las validaciones y acciones comerciales se mantienen fuera de decisiones libres del modelo.

## Resultado

Se entregó una automatización funcional de atención comercial basada en catálogo, preguntas frecuentes, información de marca y promociones diarias. Las métricas concretas permanecen confidenciales.
