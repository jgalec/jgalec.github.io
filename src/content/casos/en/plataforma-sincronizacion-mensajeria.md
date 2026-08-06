---
title: B2B messaging and GHL synchronization platform
description: Multi-tenant MVP for synchronizing conversations between WhatsApp and GHL.
role: backend
sector: B2B SaaS
technologies:
  - TypeScript
  - Node.js
  - Hono
  - React
  - PostgreSQL
  - Redis Streams
  - Docker
---

## Problem

Agencies using GHL need to manage WhatsApp messages without leaving their existing workflows, automations, bots, or sales processes. The solution must connect WhatsApp numbers to agency subaccounts, synchronize conversations both ways, and keep each agency's data isolated.

## Users

- Internal team with global platform administration.
- Agency administrators who authorize the integration and manage their subaccounts.
- Users in each subaccount, who connect and monitor a WhatsApp number from an embedded GHL application.
- End WhatsApp contacts, who do not interact with the platform directly.

## Delivered solution

Multi-tenant platform for connecting WhatsApp and GHL.

- Agency onboarding through OAuth and subaccount synchronization.
- WhatsApp number connections through QR codes, session persistence, and reconnection.
- Bidirectional conversation synchronization: incoming WhatsApp messages and outgoing messages originated in GHL.
- Contact and conversation creation and updates within GHL.
- Embedded application for each subaccount to connect and monitor its number.
- Separation of operational data by agency.

## Core workflows

The platform coordinates agency onboarding, number connections, and bidirectional message synchronization between WhatsApp and GHL. Each operation validates that resources belong to the relevant agency and preserves conversation integrity.

## Architecture and technologies

- Strict TypeScript monorepo on Node.js.
- API with Hono, authentication, OAuth, WebSocket, and GHL synchronization.
- Baileys-based `session-worker`, with one WhatsApp session per phone number.
- Client built with React 19, Vite, Tailwind, shadcn, Zustand, and validated forms.
- PostgreSQL for control data and operational data isolated by agency.
- Drizzle and Zod for typed persistence and shared contracts.
- Redis Streams for events, coordination, locks, leases, and heartbeats.
- Private S3-compatible storage for media.
- Docker Compose for local development; VPS delivery and CI/CD are defined for later stages.

## Technical decisions and challenges

- Guarantee at-least-once delivery without duplicating contacts, conversations, or messages in external services.
- Use transactional inbox/outbox, unique keys, and persisted idempotency to acknowledge events only after a durable commit.
- Preserve ordering per phone number while processing many numbers concurrently through partitions, leases, and fencing.
- Prevent stale workers or disconnected sessions from delivering late outgoing commands.
- Cryptographically validate webhooks and restrict access by agency, subaccount, and number ownership.
- Design true data isolation between agencies in a multi-tenant platform.
- Plan message retention, media cleanup, retries, consumer recovery, and observability before scaling the service.

## Project status

The MVP is in development. Features are implemented and validated incrementally before production delivery.

## Expected MVP outcome

Validate that an agency can connect a WhatsApp number to a GHL subaccount, create contacts automatically, and synchronize messages bidirectionally in real time without losing events or silently creating duplicates.
