# AGENTS.md

## Project Overview

De La Salle Kigali Website is a public-facing school website built with Next.js and Tailwind CSS.

The primary goal is to provide information about the school and allow prospective families to submit admissions applications.

The project intentionally avoids unnecessary complexity during the MVP phase.

---

## MVP Scope

### Included

* Home page
* About page
* Programmes page
* Admissions page
* Contact page
* Apply Now page
* Mobile responsive design
* Email-based admissions workflow
* Vercel deployment

### Excluded

* Student portal
* Parent portal
* User accounts
* Authentication
* Application tracking
* Dashboards
* Databases
* Payment processing

---

## Architecture Principles

### Keep It Simple

When multiple solutions exist, prefer the simpler solution.

Avoid introducing databases, APIs, or backend services unless a clear business requirement exists.

### Static First

Prefer static content whenever possible.

Use local data files for school information, programmes, contact details, and sample news items.

### Reusable Components

Shared UI should live under:

components/layout
components/home
components/ui

Avoid duplicating layouts or styling across pages.

---

## Admissions Workflow

Applications are submitted through the Apply Now page.

Submitted forms and uploaded documents are emailed directly to the admissions office.

The school reviews submissions manually and follows up by email if additional information is required.

No application records are stored in a database during MVP.

---

## Design Guidelines

### Colors

Primary:

* Navy Blue

Secondary:

* White

Accent:

* Academic Gold

### Tone

Professional
Welcoming
Faith-centered
Family-oriented

Avoid corporate or startup-style language.

---

## Deployment

Platform:

* Vercel

Main branch:

* main

Every change should be tested locally before deployment.

---

## Future Enhancements

Potential future additions:

* News management
* School calendar
* Online application management
* Parent portal
* Student portal
* Online payments

These features are intentionally out of scope for MVP.
