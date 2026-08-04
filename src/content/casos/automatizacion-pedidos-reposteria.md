---
title: Automatización del ciclo de pedidos para repostería
description: Flujos conectados al CRM para stock, cotización, validación de pago y coordinación de producción.
role: automation
sector: Repostería por encargo
technologies:
  - n8n
  - Google Sheets
  - Kommo
  - IA
---

## Problema

El negocio quería automatizar la mayor parte de su ciclo de pedido: consulta de stock por sede y taller, cotización por producto, tamaño y fecha de entrega, validación de comprobantes de pago y coordinación con producción. Antes de la implementación, estas tareas requerían trabajo manual y no existía una automatización integral.

## Rol y responsabilidad

- Implementé los procesos de mayor complejidad dentro del ciclo de pedido e integré las etapas correspondientes del CRM.
- La orquestación restante del pipeline se configuró desde Kommo para activar cada flujo cuando el lead alcanza la etapa correspondiente.
- Trabajé individualmente bajo dirección de un responsable; un compañero realizaba pruebas de QA y los hallazgos se resolvían en desarrollo.

## Usuarios

- Equipo comercial, de producción y de atención al cliente.
- Clientes que realizan pedidos por los canales conectados al CRM.

## Solución construida

Automatización por etapas del ciclo de pedido:

- Consulta de stock por sede para tortas y porciones.
- Consulta de inventario del taller para productos completos.
- Cotización de pedidos según productos, tamaño y fecha de entrega.
- Validación de comprobantes de pago mediante análisis de imagen con IA.
- Notificación de orden a producción y confirmación al cliente.

## Flujo principal

1. Un lead avanza en el CRM según la conversación comercial.
2. La etapa activa el flujo correspondiente para consultar stock, cotizar, validar el pago o coordinar producción.
3. El flujo recupera la información necesaria desde catálogos, inventarios o datos del pedido.
4. Cuando corresponde, calcula la cotización o analiza el comprobante de pago.
5. El resultado validado actualiza la información operativa y el estado del lead en el CRM.
6. Tras confirmar el pago, el sistema entrega la orden al equipo de producción y envía la confirmación al cliente.

## Arquitectura e integraciones

- Orquestación: n8n.
- Datos operativos, inventario y catálogos: API de Google Sheets.
- CRM y orquestación por etapas: API de Kommo.
- Validación de comprobantes: modelo de IA conectado desde n8n.

## Decisiones técnicas

- Diseñar flujos independientes activados por etapa para mantener el ciclo ordenado.
- Validar que los datos requeridos existan antes de continuar a la siguiente etapa.
- Evitar que el modelo de IA tome decisiones finales sobre pagos: el análisis debe transformarse en una salida validable por reglas del flujo.
- Mantener sincronizados inventario, cotización, pago y producción.
- Comunicar errores operativos sin bloquear innecesariamente el proceso.

## Principio de control de IA

El uso de IA se limita a interpretar el comprobante de pago y estructurar la información necesaria. Las actualizaciones del pedido, las etapas y las notificaciones se rigen por validaciones y reglas deterministas.

## Resultado

Se entregó una automatización funcional del ciclo de pedido, coordinada desde el CRM y conectada con inventario, catálogos, validación de pago y producción. Las métricas concretas permanecen confidenciales.
