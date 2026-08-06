---
title: Sales agent for a confectionery brand
description: Conversational customer support based on the catalog, FAQs, and current promotions.
role: automation
sector: Confectionery
technologies:
  - n8n
  - Supabase
  - OpenRouter
  - Google Docs
  - Google Sheets
  - Kommo
---

## Problem

The brand needed to automate frequently asked questions about its products, including amaranth wafers and churros. Responses had to stay current with the catalog, company information, and daily promotion.

## Role and responsibility

- I implemented conversational support and its connection to commercial knowledge sources.
- I worked independently under a lead's direction; a teammate performed QA testing, and findings were resolved in development.

## Users

- The brand's sales or customer support team.
- Customers asking about products, promotions, or general information.

## Delivered solution

AI sales agent that:

- Answers questions about catalog products.
- Queries a knowledge base with company information.
- Resolves frequently asked questions.
- Checks an up-to-date document with the daily promotion.
- Maintains conversation context to continue supporting a customer.
- Guides product quotations and calculates subtotals once product, presentation, and quantity are confirmed.
- Escalates orders, complaints, or requests requiring commercial or operational validation to the human team.

## Core workflow

1. A customer sends an inquiry through the CRM-connected channel.
2. The workflow retrieves available context and identifies the question type: product, general information, FAQ, or promotion.
3. The agent queries the relevant knowledge source.
4. The workflow validates the retrieved answer and presents it in a clear commercial format.
5. The conversation is recorded to provide continuity for the next inquiry.

## Architecture and integrations

- Orchestration: n8n.
- Data and context: Supabase.
- AI models: OpenRouter API.
- Knowledge sources: Google Docs and Google Sheets APIs.
- CRM and messaging: Kommo API.

## Technical decisions

- Keep a daily promotion up to date without modifying the workflow.
- Select the correct knowledge source for every inquiry type.
- Prevent the agent from inventing availability, prices, or promotions not present in the queried source.
- Preserve sales context without mixing data from different customers.

## Verified guardrails and limits

- The agent distinguishes the catalog, calculator, operational base, FAQs, and promotions to query the appropriate source in each case.
- It does not quote a product with multiple presentations without first confirming which one the customer needs.
- Totals are calculated with a tool, and final shipping costs remain subject to operational validation when applicable.
- Promotions are communicated only from the current source, preventing outdated or invented promotions.
- Claims, high-volume orders, special requests, non-standard shipping, and unavailable data are escalated to a team member in a controlled way.

## AI control principle

AI interprets the question and writes the response. Catalog data, FAQs, and promotions must come from controlled sources; validations and commercial actions remain outside free model decisions.

## Result

A functional sales support automation was delivered based on the catalog, FAQs, brand information, and daily promotions. Specific metrics remain confidential.
