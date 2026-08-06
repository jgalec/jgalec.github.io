---
title: AI agent for logistics support and quotations
description: Conversational automation for initial support, recommendations, and international shipping quotations.
role: automation
sector: Logistics
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Kommo
  - Google Sheets
---

## Problem

The client needed to automate part of their WhatsApp support, especially initial shipping inquiries, recommendations, and quotations, without replacing operational rules with uncontrolled AI model decisions.

## Role and responsibility

- I implemented the conversational workflow, knowledge-source integration, and recommendation and quotation tools.

## Users

- Sales or customer support team.
- People inquiring about shipping services through WhatsApp.

## Capabilities

- Conversational support with context for each conversation.
- Intent classification for each inquiry.
- Progressive collection and structuring of data needed for a shipment.
- Shipping-type recommendations based on origin, destination, contents, weight, dimensions, urgency, and restrictions.
- Estimated quotations using rate tables and actual or volumetric-weight calculations.
- Answers to frequently asked questions about services, pricing, lead times, collections, payments, restrictions, and customs duties.
- Shipment-status lookup when the customer provides a tracking number.
- Delivery of a personalized form after a quotation is accepted.
- Escalation to a team member when uncertainty, claims, out-of-scope requests, or restricted content arise.

## Core workflow

1. A customer writes through WhatsApp.
2. The workflow retrieves available context and classifies the inquiry's intent.
3. If data is missing for a recommendation or quotation, the agent requests it progressively.
4. The agent queries the appropriate knowledge source or tool: FAQs, rates, or shipping rules.
5. Deterministic rules validate the data, calculate volumetric weight, and generate the recommendation or quotation.
6. The agent turns the validated result into a clear customer response and retains the context needed for the next turn.

## Architecture and integrations

- Orchestration: n8n.
- Data and context: Supabase.
- AI models: OpenRouter API.
- Operational knowledge: Google Docs and Google Sheets APIs.
- CRM and messaging: Kommo API.

## Technical decisions

- AI interprets language, classifies, and structures data; rules, validations, and calculations remain deterministic.
- A quotation can only be requested when origin, destination, weight, and dimensions are complete; the model does not calculate rates on its own.
- Transit times, pricing, and regulations are communicated only from authorized sources or tools.
- If a tool does not return a valid answer, the workflow escalates to human support instead of inventing information.
- The conversation limits the number of questions per turn to preserve a natural messaging experience.

## Result

A functional automation was delivered for initial support, recommendations, and quotations, with critical logic controlled by validations and deterministic rules. Specific metrics remain confidential.
