---
title: Sales assistant for residential real estate
description: Multimodal agent for sales inquiries, interest classification, and visit management.
role: automation
sector: Real estate
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Google Calendar
  - Kommo
---

## Problem

The real estate company needed a sales assistant to answer initial questions about inventory and commercial information. The primary goal was to identify a person's interest in acquiring a home and manage the booking of a visit with the company.

## Role and responsibility

- I designed and implemented the conversational workflows, knowledge and inventory retrieval, sales classification, and scheduling automation.
- I worked independently under a lead's direction; a teammate performed QA testing, and findings were resolved in development.

## Users

- The real estate company's sales team.
- Leads inquiring about homes and looking to schedule a visit.

## Delivered solution

Real estate sales assistant able to:

- Process text, audio, and image messages.
- Answer initial questions about the project, available properties, and commercial information.
- Preserve conversation context.
- Classify interest level and update the sales pipeline.
- Schedule, reschedule, or cancel visits according to availability.
- Suggest alternatives when a time is unavailable.

The solution separates three responsibilities: a conversational agent to assist the lead, a scheduling component that normalizes and validates the request, and a classifier that updates the pipeline only when there is sufficient evidence of interest or a confirmed visit.

## Core workflow

1. A lead sends an inquiry to the CRM.
2. The agent processes the message and preserves relevant context.
3. It queries knowledge and inventory sources to answer commercial questions.
4. When it detects interest in a visit, it extracts the required data in a structured form.
5. The scheduling workflow checks availability and applies the rules defined for the operation.
6. The system schedules, reschedules, or cancels the visit and updates the sales status in the CRM.
7. The agent informs the lead of the confirmation, an alternative, or the information needed to continue.

## Architecture and integrations

- Orchestration: n8n.
- Data and context: Supabase.
- AI models: OpenRouter API.
- Knowledge and inventory sources: Google Docs API.
- Scheduling: Google Calendar API.
- CRM: Kommo API.

## Technical decisions

- Separate AI interpretation from business and scheduling rules.
- Prevent concurrent bookings through validations and temporary availability locks.
- Retain needed context without turning the entire history into a model dependency.
- Process different input formats without losing the sales workflow.
- Allow the workflow to update only authorized sales stages.

## Verified guardrails and limits

- General information, inventory, and scheduling are queried from separate sources; the agent must use the relevant source before making factual claims.
- The sales agent does not confirm a visit without consulting the scheduling component.
- The scheduling component does not converse with the lead or execute directly in the calendar: it normalizes date and time, validates constraints, and returns structured output for the external workflow to execute the action.
- Rescheduling is handled as a controlled operation: the previous appointment is validated and resolved first, and only then is the new one attempted.
- Pipeline updates consider conversational history and the operational result of scheduling; a lead is not moved to a confirmed-visit stage after an ambiguous response or scheduling failure.
- Inquiries outside the knowledge sources or sales scope are escalated to a human advisor.

## AI control principle

AI interprets inquiries, extracts data, and proposes structured output. Decisions affecting scheduling, availability, and the pipeline are validated and executed deterministically through workflow rules and integrations.

## Result

A functional sales support and visit-management automation was delivered, connected to the CRM and calendar. Specific metrics remain confidential.
