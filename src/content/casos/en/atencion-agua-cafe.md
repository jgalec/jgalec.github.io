---
title: Segmented sales support for water and coffee solutions
description: Agent system for sales support, conversational memory, and controlled multimedia content.
role: automation
sector: Home and business services
technologies:
  - n8n
  - Redis
  - Supabase
  - OpenAI
  - Kommo
---

## Problem

The main goal was to help prospects progress toward a demonstration of water-dispenser or coffee products. Customer support needed to answer sales inquiries, recognize each lead's profile, and provide appropriate information without relying on a single generic conversation.

## Role and responsibility

- I implemented sales routing, segment-specific agents, conversational memory, knowledge retrieval, and controlled multimedia delivery.
- I worked independently under a lead's direction; a teammate performed QA testing, and findings were resolved in development.

## Users

- Sales team.
- Prospects interested in water dispensers or coffee solutions.

## Delivered solution

AI sales support system that:

- Processes text, audio, and images received from the CRM.
- Maintains context per lead to preserve conversation continuity.
- Classifies and routes inquiries to specialized agents based on the prospect's profile and operational coverage.
- Queries FAQs, catalogs, commercial terms, and competitor comparisons.
- Determines which multimedia content is relevant to send based on context.
- Records multimedia deliveries to avoid repetition and preserve traceability.
- Adapts the sales journey to applicable coverage and conditions.
- Routes out-of-scope sectors and scenarios to a human advisor.

## Core workflow

1. A message arrives from the CRM.
2. A sentinel validates whether automation should handle the lead, processes the content type, and groups close messages to avoid fragmented responses.
3. The selector validates the request, retrieves sales segmentation, and routes the inquiry to the right agent.
4. The agent queries memory and knowledge sources to generate a relevant response.
5. If content supports the response, the multimedia subagent selects audio, images, or video through structured output and verifies it has not already been sent repeatedly.
6. The CRM receives the response and operational records needed to preserve sales follow-up.
7. When the prospect explicitly requests a demonstration, the workflow collects and validates required data, records a pre-request, and assigns coordination to a human owner.
8. When a modality is not covered, the workflow guides the prospect toward the available alternative.

## Architecture and integrations

- Orchestration: n8n.
- Authorization between components: JWT.
- Temporary state and concurrency control: Redis.
- Data and memory: Supabase.
- CRM: Kommo API.
- Knowledge sources: Google Docs and Google Sheets APIs.
- AI models: OpenAI API.

## Technical decisions

- Route leads by segment without losing conversation context.
- Process text, audio, and images in a single sales entry point.
- Avoid duplicate responses or multimedia deliveries.
- Separate AI interpretation from sales and operational actions.
- Coordinate multiple agents and data sources without exposing internal information.
- Keep commercial and operational conditions separate by segment.
- Obtain explicit consent before requesting contact or identification data for a demonstration or purchase.

## AI control principle

AI classifies, interprets, and produces structured responses. Routing, validation, repetition control, delivery recording, and CRM actions are deterministic workflow decisions.

## Verified guardrails and limits

- The workflow applies sales and operational rules by segment, without mixing conditions between profiles.
- Prices, specifications, policies, and comparisons are queried from controlled sources. The agent does not invent technical data, conditions, delivery costs, or lead times.
- Mentioning a model or value requires that the corresponding multimedia material is actually sent. If the resource fails, the workflow reports the limitation and escalates instead of promising a nonexistent delivery.
- The multimedia subagent does not send content itself: it analyzes context and returns a structured resource selection. It also reviews history to avoid repeating the same format for the same product.
- The conversation does not interpret ambiguous expressions of interest as authorization for a demo or purchase. Before asking for data, it requires an explicit request and validates that the protocol is complete.
- AI does not schedule installations or demonstrations: it records a pre-request, and subsequent coordination belongs to the human team.
- Out-of-scope sectors and scenarios are routed without delivering sales information or multimedia from the general journeys.

## Result

A functional segmented sales support automation was delivered, with memory, multimedia handling, and interaction traceability, designed to facilitate demonstration coordination. Specific metrics remain confidential.
