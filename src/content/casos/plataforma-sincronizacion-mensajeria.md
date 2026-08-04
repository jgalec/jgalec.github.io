---
title: Plataforma B2B de sincronización entre mensajería y GHL
description: MVP multi-tenant para sincronizar conversaciones entre WhatsApp y GHL.
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

Las agencias que usan GHL necesitan gestionar mensajes de WhatsApp sin abandonar sus flujos, automatizaciones, bots o procesos comerciales existentes. La solución debe conectar números de WhatsApp a subcuentas de agencia, sincronizar conversaciones en ambos sentidos y mantener aislados los datos de cada agencia.

## Usuarios

- Equipo interno con administración global de la plataforma.
- Administradores de agencias que autorizan la integración y gestionan sus subcuentas.
- Usuarios de cada subcuenta, que conectan y supervisan un número de WhatsApp desde una aplicación embebida en GHL.
- Contactos finales de WhatsApp, que no interactúan directamente con la plataforma.

## Solución construida

Plataforma multi-tenant para conectar WhatsApp y GHL.

- Onboarding de agencias mediante OAuth y sincronización de subcuentas.
- Conexión de números de WhatsApp mediante QR, persistencia de sesión y reconexión.
- Sincronización bidireccional de conversaciones: mensajes entrantes desde WhatsApp y mensajes salientes originados desde GHL.
- Creación y actualización de contactos y conversaciones dentro de GHL.
- Aplicación embebida para que cada subcuenta conecte y supervise su número.
- Separación de datos operativos por agencia.

## Flujos principales

La plataforma coordina el alta de agencias, la conexión de números y la sincronización bidireccional de mensajes entre WhatsApp y GHL. Cada operación valida la pertenencia de los recursos a su agencia y preserva la integridad de las conversaciones.

## Arquitectura y tecnologías

- Monorepo TypeScript estricto sobre Node.js.
- API con Hono, autenticación, OAuth, WebSocket y sincronización con GHL.
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

El MVP se encuentra en desarrollo. Las funcionalidades se implementan y validan de forma incremental antes de su entrega en producción.

## Resultado esperado del MVP

Validar que una agencia pueda conectar un número de WhatsApp a una subcuenta de GHL, crear contactos automáticamente y sincronizar mensajes bidireccionalmente en tiempo real, sin perder eventos ni producir duplicados silenciosos.
