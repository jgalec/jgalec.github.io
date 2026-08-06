---
title: International shipping logistics platform
description: Platform for centralizing international shipment intake, operations, and tracking.
role: backend
sector: Logistics
technologies:
  - React
  - Express
  - PostgreSQL
  - Supabase
  - n8n
  - Docker
---

## Problem

The operation needed to centralize shipment requests and management in one platform, with different rules for each carrier. Before implementation, there was no unified system and a significant part of the operation required manual work.

## Role and responsibility

- I worked as a backend developer, responsible for the platform architecture and implementation, its business logic, integrations, and operational automations.
- I worked independently under a lead's direction; a teammate performed QA testing, and findings were resolved in development.

## Users

- The client's operations team.
- Customers who submit shipping requests through secure forms.

## Delivered solution

Platform for registering and operating international shipments with:

- Secure request forms for one or more packages.
- Sender, recipient, shipment, package, cost, provider, and shipping-method management.
- Operations dashboard for viewing, editing, duplicating, and updating records individually or in bulk.
- Label generation and download.
- Tracking, status history, incidents, and manual tracking lookups.
- Operational data exports and user administration.
- Real-time updates for the operations team.

## Core workflow

1. The team generates or shares a secure link to register a shipment.
2. The customer completes the form with sender, recipient, and one or more package details.
3. The backend validates and persists the shipment and its packages.
4. The team reviews and completes the information from the operations dashboard.
5. When preparing collection, the platform triggers the corresponding CTT or GLS automation.
6. The automations create the collection, generate the label, and record tracking codes.
7. A scheduled process checks shipment status, updates the history, notifies relevant changes, and creates operational actions for incidents.

## Architecture and integrations

- Frontend: React.
- Backend: Express.
- Data: Supabase with PostgreSQL and real-time updates.
- Authentication: secure administrative sessions.
- CRM: Kommo through an HTTP/JSON intermediary layer between n8n and the Kommo API. It manages and exposes simplified endpoints for frequent operations.
- Logistics: CTT and GLS.
- Supporting service: lightweight Hono proxy between n8n workflows and GLS Spain's B2B SOAP web service, transparently handling SSL and Content-Type requirements.
- Automation: n8n for collections, labels, tracking, notifications, and incidents.
- Deployment: Railway.

## Technical decisions

- Model shipments and packages as separate entities to support multi-package requests.
- Separate the platform, supporting services, and automations to reduce coupling with the CRM and carriers.
- Keep internal statuses, CRM records, labels, and logistics providers consistent.
- Handle provider errors and turn them into clear operational actions.
- Protect personal data and documents associated with each shipment.

## Result

A functional platform was delivered to centralize shipment intake, operations, and tracking, along with automations for previously manual logistics tasks. Specific metrics remain confidential.
