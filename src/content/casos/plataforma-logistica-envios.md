---
title: Plataforma logística de envíos internacionales
description: Plataforma para centralizar el registro, la operación y el seguimiento de envíos internacionales.
role: backend
sector: Logística
technologies:
  - React
  - Express
  - PostgreSQL
  - Supabase
  - n8n
  - Docker
---

## Problema

La operación necesitaba centralizar en una sola plataforma la solicitud y gestión de envíos, con reglas diferentes según la transportadora. Antes de la implementación, no existía un sistema unificado y una parte importante de la operación requería trabajo manual.

## Rol y responsabilidad

- Trabajé como programador backend, responsable de la arquitectura e implementación de la plataforma, su lógica de negocio, integraciones y automatizaciones operativas.
- Trabajé individualmente bajo dirección de un responsable; un compañero realizaba pruebas de QA y los hallazgos se resolvían en desarrollo.

## Usuarios

- Equipo operativo del cliente.
- Clientes que registran solicitudes de envío mediante formularios seguros.

## Solución construida

Plataforma para registrar y operar envíos internacionales con:

- Formularios seguros para solicitudes con uno o varios paquetes.
- Gestión de remitentes, destinatarios, envíos, paquetes, costes, proveedores y modalidades de envío.
- Panel de operación para consultar, editar, duplicar y actualizar registros de forma individual o masiva.
- Generación y descarga de etiquetas.
- Tracking, historial de estados, incidencias y consultas manuales de seguimiento.
- Exportación de datos operativos y administración de usuarios.
- Actualizaciones en tiempo real para el equipo de operación.

## Flujo principal

1. El equipo genera o comparte un enlace seguro para registrar un envío.
2. El cliente completa el formulario con la información del remitente, destinatario y uno o varios paquetes.
3. El backend valida y persiste el envío y sus paquetes.
4. El equipo revisa y completa la información desde el panel operativo.
5. Al preparar la recogida, la plataforma desencadena la automatización correspondiente para CTT o GLS.
6. Las automatizaciones crean la recogida, generan la etiqueta y registran los códigos de seguimiento.
7. Un proceso programado consulta el estado de los envíos, actualiza el historial, notifica cambios relevantes y crea acciones operativas ante incidencias.

## Arquitectura e integraciones

- Frontend: React.
- Backend: Express.
- Datos: Supabase con PostgreSQL y actualizaciones en tiempo real.
- Autenticación: sesiones administrativas seguras.
- CRM: Kommo mediante una capa intermedia HTTP/JSON entre n8n y la API de Kommo. Gestiona y expone endpoints simplificados para operaciones frecuentes.
- Logística: CTT y GLS.
- Servicio auxiliar: proxy ligero en Hono que actúa como intermediario entre los flujos de n8n y el servicio web SOAP B2B de GLS Spain, gestionando de forma transparente los requisitos de SSL y Content-Type.
- Automatización: n8n para recogidas, etiquetas, tracking, notificaciones e incidencias.
- Despliegue: Railway.

## Decisiones técnicas

- Modelar envíos y paquetes como entidades independientes para soportar solicitudes multibulto.
- Separar la plataforma, servicios auxiliares y automatizaciones para reducir acoplamiento con CRM y transportadoras.
- Mantener consistencia entre estados internos, CRM, etiquetas y proveedores logísticos.
- Manejar errores de proveedores y convertirlos en acciones operativas claras.
- Proteger datos personales y documentos asociados a cada envío.

## Resultado

Se entregó una plataforma funcional que centraliza el registro, la operación y el seguimiento de envíos, junto con automatizaciones para las tareas logísticas antes manuales. Las métricas concretas permanecen confidenciales.
