---
title: Atención comercial segmentada para soluciones de agua y café
description: Sistema de agentes para atención comercial, memoria conversacional y contenido multimedia controlado.
role: automation
sector: Servicios para hogares y empresas
technologies:
  - n8n
  - Redis
  - Supabase
  - OpenAI
  - Kommo
---

## Problema

El objetivo principal era que los prospectos pudieran avanzar hacia una demostración de productos de dispensadores de agua o café. La atención debía responder consultas comerciales, reconocer el perfil de cada lead y ofrecer información adecuada sin depender de una única conversación genérica.

## Rol y responsabilidad

- Implementé el enrutamiento comercial, agentes por segmento, memoria conversacional, consultas de conocimiento y envío controlado de multimedia.
- Trabajé individualmente bajo dirección de un responsable; un compañero realizaba pruebas de QA y los hallazgos se resolvían en desarrollo.

## Usuarios

- Equipo comercial.
- Prospectos interesados en dispensadores de agua o soluciones de café.

## Solución construida

Sistema de atención comercial con IA que:

- Procesa texto, audio e imagen recibidos desde el CRM.
- Conserva contexto por lead para dar continuidad a la conversación.
- Clasifica y enruta consultas a agentes especializados para hogar en RM, empresas en RM o clientes fuera de la Región Metropolitana.
- Consulta preguntas frecuentes, catálogos, condiciones comerciales y comparativas de competencia.
- Determina qué contenido multimedia es pertinente enviar según el contexto.
- Registra los envíos multimedia para evitar repeticiones y conservar trazabilidad.
- Distingue entre arriendo con demostración para clientes con cobertura y venta directa para clientes fuera de cobertura.
- Deriva los casos HORECA/SODA y otros escenarios fuera de alcance a un asesor humano.

## Flujo principal

1. Un mensaje llega desde el CRM.
2. El centinela valida si la automatización debe atender el lead, procesa el tipo de contenido y agrupa mensajes cercanos para evitar respuestas fragmentadas.
3. El selector valida la solicitud, recupera la segmentación comercial y deriva la consulta al agente adecuado.
4. El agente consulta la memoria y las fuentes de conocimiento para generar una respuesta relevante.
5. Si conviene apoyar la respuesta con contenido, el subagente multimedia selecciona audio, imagen o video mediante una salida estructurada y verifica que no se haya enviado repetidamente.
6. El CRM recibe la respuesta y los registros operativos necesarios para mantener el seguimiento comercial.
7. Cuando el prospecto solicita explícitamente una demostración, el flujo recopila y valida los datos necesarios, registra una pre-solicitud y deriva la coordinación a un responsable humano.
8. Para clientes fuera de RM, el flujo informa y conduce exclusivamente la venta directa, sin ofrecer arriendo ni demostración.

## Arquitectura e integraciones

- Orquestación: n8n.
- Autorización entre componentes: JWT.
- Estado temporal y control de concurrencia: Redis.
- Datos y memoria: Supabase.
- CRM: API de Kommo.
- Fuentes de conocimiento: API de Google Docs y Google Sheets.
- Modelos de IA: API de OpenAI.

## Decisiones técnicas

- Enrutar leads por segmento sin perder contexto de conversación.
- Procesar texto, audio e imagen en una misma entrada comercial.
- Evitar respuestas o envíos multimedia duplicados.
- Separar la interpretación de la IA de las acciones comerciales y operativas.
- Coordinar varios agentes y fuentes de datos sin exponer información interna.
- Mantener modalidades, monedas, cobertura y condiciones comerciales separadas por segmento.
- Obtener consentimiento explícito antes de solicitar datos de contacto o identificación para una demostración o compra.

## Principio de control de IA

La IA clasifica, interpreta y produce respuestas estructuradas. El enrutamiento, las validaciones, el control de repetición, el registro de envíos y las acciones en CRM son decisiones deterministas del flujo.

## Límites y guardrails verificados

- Hogar en RM utiliza un recorrido de arriendo mensual y demostración; empresas en RM combina soluciones de agua y café según la necesidad; fuera de RM utiliza solo venta directa.
- Los precios, especificaciones, políticas y comparativas se consultan en fuentes controladas. El agente no inventa datos técnicos, condiciones, costos de despacho ni plazos.
- Mencionar un modelo o valor requiere el envío efectivo del material multimedia correspondiente. Si el recurso falla, el flujo informa la limitación y escala en vez de prometer un envío inexistente.
- El subagente multimedia no envía contenido por sí mismo: analiza el contexto y devuelve una selección estructurada de recursos. Además revisa el historial para no repetir el mismo formato del mismo producto.
- La conversación no interpreta expresiones ambiguas de interés como autorización para una demo o compra. Antes de pedir datos, requiere una solicitud explícita y valida que el protocolo esté completo.
- La IA no agenda instalaciones o demostraciones: deja una pre-solicitud y la coordinación posterior corresponde al equipo humano.
- Los casos HORECA/SODA se derivan sin entregar información comercial o multimedia de los recorridos generales.

## Resultado

Se entregó una automatización funcional de atención comercial segmentada, con memoria, manejo multimedia y trazabilidad de interacciones, orientada a facilitar la coordinación de demostraciones. Las métricas concretas permanecen confidenciales.
