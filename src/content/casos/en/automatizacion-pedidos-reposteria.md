---
title: Pastry order lifecycle automation
description: CRM-connected workflows for stock, quotations, payment validation, and production coordination.
role: automation
sector: Made-to-order pastry
technologies:
  - n8n
  - Google Sheets
  - Kommo
  - AI
---

## Problem

The business wanted to automate most of its order lifecycle: stock lookups by location and workshop, quotations by product, size, and delivery date, payment-receipt validation, and production coordination. Before implementation, these tasks required manual work and there was no end-to-end automation.

## Role and responsibility

- I implemented the most complex processes within the order lifecycle and integrated the corresponding CRM stages.
- The remaining pipeline orchestration was configured in Kommo to trigger each workflow when the lead reaches the relevant stage.
- I worked independently under a lead's direction; a teammate performed QA testing, and findings were resolved in development.

## Users

- Sales, production, and customer support teams.
- Customers placing orders through CRM-connected channels.

## Delivered solution

Stage-based order lifecycle automation:

- Stock lookup by location for cakes and portions.
- Workshop inventory lookup for whole products.
- Order quotations based on products, size, and delivery date.
- Payment-receipt validation using AI image analysis.
- Production-order notification and customer confirmation.

## Core workflow

1. A lead moves through the CRM according to the sales conversation.
2. The stage triggers the relevant workflow to check stock, quote, validate payment, or coordinate production.
3. The workflow retrieves required information from catalogs, inventories, or order data.
4. When applicable, it calculates the quotation or analyzes the payment receipt.
5. The validated result updates operational information and the lead status in the CRM.
6. Once payment is confirmed, the system delivers the order to the production team and sends confirmation to the customer.

## Architecture and integrations

- Orchestration: n8n.
- Operational data, inventory, and catalogs: Google Sheets API.
- CRM and stage-based orchestration: Kommo API.
- Receipt validation: AI model connected through n8n.

## Technical decisions

- Design independent stage-triggered workflows to keep the lifecycle organized.
- Validate that required data exists before continuing to the next stage.
- Prevent the AI model from making final payment decisions: analysis must be turned into output that workflow rules can validate.
- Keep inventory, quotations, payment, and production synchronized.
- Communicate operational errors without unnecessarily blocking the process.

## AI control principle

AI use is limited to interpreting the payment receipt and structuring needed information. Order updates, stages, and notifications are governed by validations and deterministic rules.

## Result

A functional order lifecycle automation was delivered, coordinated from the CRM and connected to inventory, catalogs, payment validation, and production. Specific metrics remain confidential.
