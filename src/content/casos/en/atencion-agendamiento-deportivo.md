---
title: Customer support and scheduling for a sports center
description: Customer support and specialized scheduling system for four sports disciplines.
role: automation
sector: Sports center
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Google Calendar
  - Kommo
---

## Problem

The sports center needed to answer basic questions about its services and let interested people schedule classes. Unlike a single scheduling service, the business operates four disciplines with their own availability and scheduling rules: triathlon, running, swimming, and indoor training.

## Role and responsibility

- I implemented the sales support, knowledge retrieval, and four discipline-specific scheduling agents.
- I worked independently under a lead's direction; a teammate performed QA testing, and findings were resolved in development.

## Users

- Sales team and discipline coordinators.
- People interested in triathlon, running, swimming, or indoor training classes.

## Delivered solution

Customer support and scheduling system that:

- Answers basic questions about the sports center and its disciplines.
- Maintains conversational context for each prospect.
- Identifies the discipline of interest.
- Routes the case to one of four specialized scheduling agents.
- Applies the scheduling and availability rules for each discipline.
- Confirms, reschedules, or declines a request according to business-defined conditions.
- Progressively collects the data needed to classify the lead and coordinate a trial class or booking.
- Distinguishes general sales information from personalized sports recommendations, which are escalated to a human coach.

## Core workflow

1. A person sends an inquiry to the CRM.
2. The main agent interprets it, retains context, and answers basic information from knowledge sources.
3. If the person wants to schedule a class, the workflow identifies the relevant discipline.
4. The request is routed to the triathlon, running, swimming, or indoor specialist agent.
5. The scheduling agent queries and validates the availability rules for its discipline.
6. The workflow confirms the booking, requests another option, or indicates an alternative based on the validation results.
7. The conversation and operational information are updated in the CRM.

## Architecture and integrations

- Orchestration: n8n.
- Data and context: Supabase.
- AI models: OpenRouter API.
- Knowledge sources: Google Docs API.
- Scheduling: Google Calendar API.
- CRM: Kommo API.

## Technical decisions

- Model each scheduling service without mixing operational rules.
- Keep the main agent simple and delegate availability to specialized agents.
- Prevent AI from confirming times without deterministic validation against the rules for each discipline.
- Preserve continuity from initial questions to the final booking.

## Verified guardrails and limits

- The agent can communicate prices, schedules, locations, general methodology, and requirements from controlled sources, but does not make personalized sports recommendations or performance evaluations.
- The discipline is identified before collecting data or invoking a scheduling manager; if intent is ambiguous, the agent asks for clarification.
- Each specialized manager normalizes natural-language dates, validates the day, time slot, time zone, and availability before confirming a booking.
- Indoor training includes additional capacity and booking-limit validations tied to the user's plan.
- Error responses return structured statuses and valid alternatives within the same discipline instead of accepting nonexistent times.
- Sensitive health information used in lead capture requires special handling and will not be used in public material.

## AI control principle

AI detects intent, identifies the discipline, and structures request data. Availability, scheduling rules, and class confirmation are validated and executed deterministically.

## Result

A functional customer support and scheduling automation was delivered for four disciplines, with explicit separation between each service's rules. Specific metrics remain confidential.
