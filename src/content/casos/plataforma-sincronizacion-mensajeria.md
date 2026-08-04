---
title: Plataforma B2B de sincronización entre mensajería y CRM
description: MVP multi-tenant para sincronizar conversaciones entre WhatsApp y un CRM comercial.
role: backend
sector: SaaS B2B
technologies:
  - TypeScript
  - Node.js
  - Hono
  - React
  - PostgreSQL
  - Redis Streams
  - Docker
---

## Problema

Las agencias que usan un CRM de automatización comercial necesitan gestionar mensajes de WhatsApp sin abandonar sus flujos, automatizaciones, bots o procesos comerciales existentes. La solución debe conectar números de WhatsApp a subcuentas de agencia, sincronizar conversaciones en ambos sentidos y mantener aislados los datos de cada agencia.

## Usuarios

- Equipo interno con administración global de la plataforma.
- Administradores de agencias que autorizan la integración y gestionan sus subcuentas.
- Usuarios de cada subcuenta, que conectan y supervisan un número de WhatsApp desde una aplicación embebida en el CRM.
- Contactos finales de WhatsApp, que no interactúan directamente con la plataforma.

## Solución construida

Plataforma multi-tenant para conectar WhatsApp y un CRM externo de automatización comercial.

- Onboarding de agencias mediante OAuth y sincronización de subcuentas.
- Conexión de números de WhatsApp mediante QR, persistencia de sesión y reconexión.
- Sincronización bidireccional de conversaciones: mensajes entrantes desde WhatsApp y mensajes salientes originados desde el CRM.
- Creación y actualización de contactos y conversaciones dentro del CRM.
- Aplicación embebida para que cada subcuenta conecte y supervise su número.
- Separación de datos operativos por agencia.

## Flujos principales

### Onboarding de una agencia

1. Un administrador autoriza la integración de su agencia con OAuth.
2. La plataforma valida el acceso y crea o recupera el espacio de datos aislado de la agencia.
3. Se sincronizan las subcuentas autorizadas.
4. Los usuarios de una subcuenta pueden abrir la aplicación embebida y conectar un número de WhatsApp.

### Mensaje entrante

1. Un `session-worker` mantiene la sesión asociada a un número de WhatsApp.
2. Un mensaje entrante se publica como evento y se recibe de forma durable.
3. La API valida la pertenencia del número a la agencia antes de resolver los datos de ese tenant.
4. Una transacción registra el evento, actualiza el mensaje local y crea el trabajo de sincronización hacia el CRM.
5. Un procesador entrega el mensaje al CRM y persiste el resultado para impedir efectos duplicados.

### Mensaje saliente

1. El CRM entrega un webhook autenticado con una solicitud de mensaje.
2. La API valida firma, pertenencia y estado de la sesión.
3. El comando se guarda de forma durable y se publica para el worker propietario del número.
4. El worker verifica que el comando siga vigente, entrega el mensaje por WhatsApp y registra un resultado terminal idempotente.

## Arquitectura y tecnologías

- Monorepo TypeScript estricto sobre Node.js.
- API con Hono, autenticación, OAuth, WebSocket y sincronización con CRM.
- `session-worker` basado en Baileys, con una sesión de WhatsApp por teléfono.
- Cliente con React 19, Vite, Tailwind, shadcn, Zustand y formularios validados.
- PostgreSQL para datos de control y datos operativos aislados por agencia.
- Drizzle y Zod para persistencia tipada y contratos compartidos.
- Redis Streams para eventos, coordinación, locks, leases y heartbeats.
- Almacenamiento privado compatible con S3 para medios.
- Docker Compose para desarrollo local; entrega a VPS y CI/CD definidos para etapas posteriores.

## Decisiones y retos técnicos

- Garantizar entrega al menos una vez sin duplicar contactos, conversaciones o mensajes en servicios externos.
- Usar inbox/outbox transaccional, claves únicas e idempotencia persistida para confirmar eventos solo después de un commit durable.
- Mantener orden por teléfono mientras se procesan muchos números en paralelo mediante particiones, leases y fencing.
- Evitar que workers antiguos o sesiones desconectadas entreguen comandos salientes tardíos.
- Validar criptográficamente webhooks y restringir el acceso por agencia, subcuenta y propiedad del número.
- Diseñar aislamiento real de datos entre agencias en una plataforma multi-tenant.
- Planificar la retención de mensajes, limpieza de medios, reintentos, recuperación de consumidores y observabilidad antes de escalar el servicio.

## Estado del proyecto

El MVP se encuentra en desarrollo. La base local, los contratos iniciales, los esquemas separados y la infraestructura de desarrollo están definidos. Las siguientes piezas se encuentran planificadas o en implementación: autenticación y roles, OAuth validado en sandbox, sesiones de WhatsApp, QR, sincronización durable, UI embebida, despliegue de producción, CI/CD, backups, monitoreo y pruebas de carga.

No se presentan como funcionalidades terminadas las integraciones cuyo contrato externo aún está pendiente de validar, incluidos adjuntos, estados de entrega e idempotencia remota.

## Resultado esperado del MVP

Validar que una agencia pueda conectar un número de WhatsApp a una subcuenta del CRM, crear contactos automáticamente y sincronizar mensajes bidireccionalmente en tiempo real, sin perder eventos ni producir duplicados silenciosos.
