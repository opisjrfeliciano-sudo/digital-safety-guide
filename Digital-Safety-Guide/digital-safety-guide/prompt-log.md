# Prompt Log: Digital Safety and Responsible AI Guide

Student: Feliciano Opis Jr., BSIT 3rd Year, IT3E
Course: Web Systems and Technologies
Activity: Hands-On Laboratory Activity #4: Prompt, Observe, Refine
Tool: GitHub Copilot Chat in Visual Studio Code
Model used:

> Documentation rule: record what Copilot actually produced, not what the prompt was meant to produce.

---

## Task 1 — Sector Selection

| Item | Details |
|---|---|
| Sector | Digital Technology & AI |
| Local Challenge | Students and residents of Marinduque who use social media, messaging apps, online shopping, and AI tools need a simple, easy-to-understand guide for recognizing online scams and using AI tools safely and responsibly. |
| Target Users | Students and community residents who use the internet and AI tools |
| Proposed Project | Digital Safety and Responsible AI Guide |
| Key Features (3) | 1. Online scam red-flag checklist (interactive). 2. Responsible AI use tip cards (filterable by category). 3. "Spot the Scam" self-check with fictional sample messages. |
| Expected Outputs (2) | 1. Mini frontend prototype (`index.html`, `styles.css`, `script.js`). 2. Prompt documentation (`prompt-log.md`) with preserved results in `outputs/`. |

Project concept:
Many people go online every day but are unsure how to tell a scam message from a safe one, or how to use AI tools without sharing private information or copying answers without checking them. The Digital Safety and Responsible AI Guide is a single-page responsive website that lets users go through a scam red-flag checklist, browse responsible AI tips by category, and test themselves with fictional sample messages. It uses only semantic HTML, CSS, and vanilla JavaScript with demonstration data, and has no backend, database, authentication, or external APIs. All content is educational, not security or legal advice.

---

## Task 2 — Zero-Shot Prompting

Objective: Observe what Copilot generates from a basic prompt without examples, and keep the result as the baseline.

Exact Prompt:
> Create a simple webpage that helps students and residents learn how to stay safe online and use AI tools responsibly.

Actual Copilot Output:
[Saved in `outputs/task2-zero-shot/`]

What Worked:

What Needs Improvement:


Next Action / Verification:


---

## Task 3 — Structured Prompt (Prompt Anatomy)

Objective: Improve output relevance using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria.

Exact Prompt:
> Role: Act as a frontend web developer who builds accessible, mobile-friendly educational websites.
>
> Task: Create a responsive single-page "Digital Safety and Responsible AI Guide" with three features: (1) an interactive online scam red-flag checklist where users mark items as completed, (2) responsible AI use tip cards that can be filtered by category, and (3) a "Spot the Scam" self-check with three sample messages where the user chooses "Scam" or "Looks safe" and receives feedback.
>
> Context: The website is for students and residents of Marinduque, Philippines who use social media, messaging apps, online shopping, and AI tools. It is a third-year BSIT laboratory prototype.
>
> Constraints: Use only semantic HTML, CSS, and vanilla JavaScript. Do not use external frameworks, libraries, backend services, databases, authentication, or external APIs. Use fictional demonstration data only: no real names, phone numbers, brands, or links in the sample messages. Label the content as educational, not security or legal advice. Do not show live alerts or real scam reports.
>
> Expected Output: Three files: `index.html`, `styles.css`, and `script.js`, with a short explanation of the file structure.
>
> Acceptance Criteria: (a) The page uses `header`, `nav`, `main`, `section`, and `footer`. (b) The checklist uses native checkboxes with linked labels, shows a "completed X of Y" counter, and works with mouse and keyboard. (c) Category buttons filter the tip cards. (d) "Spot the Scam" shows correct or incorrect feedback with a short explanation after each answer and a final score. (e) The layout is readable at 360px width. (f) All controls have a visible focus indicator.

Actual Copilot Output:
[Saved in `outputs/task3-structured/`]

What Worked:
[Write actual observations]

What Needs Improvement:
[Write actual observations]

Next Action / Verification:
[Test keyboard use and the 360px layout. List at least two differences compared with the Task 2 result: 1. ___ 2. ___]

---

## Task 4 — Few-Shot Prompting (Experiment A)

Objective: Explore how examples influence the consistency of AI output.

Exact Prompt:
> Role: Act as a frontend web developer.
>
> Task: Create online scam red-flag checklist items using this format.
>
> Example 1:
> Item: Urgent request for money
> Category: Message Red Flags
> Description: Be cautious when a message pressures you to send money immediately.
>
> Example 2:
> Item: Link from an unknown sender
> Category: Link Safety
> Description: Avoid opening links from people or accounts you do not know.
>
> Generate four additional items using the same format, including at least one under the category "Account Security". Then render all six items as the checklist in my existing `index.html` and `script.js`.
>
> Constraints: Store the items in a JavaScript array of objects. Use native checkboxes with linked labels. Use vanilla JavaScript only. Do not use external libraries or live data.
>
> Expected Output: The four new items in the same Item / Category / Description format, plus the updated code.
>
> Acceptance Criteria: All six items have the three fields, the checklist works with mouse and keyboard, and clicking a label toggles its checkbox.

Actual Copilot Output:
[Saved in `outputs/task4a-few-shot/`]

What Worked:
[Write actual observations]

What Needs Improvement:
[Write actual observations]

Next Action / Verification:
[One observation for this technique: what became more consistent? Then check all six items and the label behavior]

---

## Task 4 — Role Assignment Prompting (Experiment B)

Objective: Examine the same interface from a specialized perspective.

Exact Prompt:
> Role: Act as a frontend accessibility reviewer.
>
> Task: Examine my generated Digital Safety and Responsible AI Guide (`index.html`, `styles.css`, `script.js`). Identify problems involving HTML semantics, keyboard access, labels, and visual clarity.
>
> Context: The users are students and residents, many using phones. The project has three features: a scam red-flag checklist, filterable AI tip cards, and a "Spot the Scam" self-check.
>
> Constraints: Do not change the project's scope or add new features. Do not use external libraries. Base your findings only on the provided code.
>
> Expected Output: Problems grouped under HTML semantics, keyboard access, labels, and visual clarity. For each problem, give the affected code location and a targeted improvement.
>
> Acceptance Criteria: Each recommendation is specific to my code, and problems are ranked from most to least important.

Actual Copilot Output:
[Saved in `outputs/task4b-role-accessibility.md`]

What Worked:
[Write actual observations]

What Needs Improvement:
[Write actual observations]

Next Action / Verification:
[One observation for this technique: what specialized concerns did the role reveal? Verify each reported problem in the real code before accepting it]

---

## Task 5 — Structured Reasoning and Refinement

**Objective:** Use AI-assisted analysis to identify and improve a specific implementation weakness. This requests a concise technical analysis, not the model's hidden internal reasoning.

Exact Prompt:
> Role: Act as a senior frontend code reviewer.
>
> Task: Review my Digital Safety and Responsible AI Guide against its original requirements. Work through these steps and keep each to 2 to 3 sentences. Step 1: check whether the checklist, the filterable tip cards, and the "Spot the Scam" self-check work correctly. Step 2: check whether the HTML uses appropriate semantic elements. Step 3: check whether the interface is usable on mobile screens. Step 4: identify the two most important implementation issues based on the provided code. Step 5: recommend the smallest appropriate correction for each issue. Step 6: explain how I can test each correction.
>
> Context: This is a single-page BSIT laboratory prototype using only HTML, CSS, and vanilla JavaScript.
>
> Constraints: Base your findings only on the provided code. Do not add new features.
>
> Expected Output: A concise diagnosis table with the columns Issue, Evidence in code, Smallest fix, and How to test.
>
> Acceptance Criteria: Every issue points to a specific part of my code, and every fix has a testable procedure.

Actual Copilot Output:
[Saved in `outputs/task5-analysis.md`]

What Worked:
[Write actual observations]

What Needs Improvement:
[Write actual observations]

Next Action / Verification:
[Selected correction: ___. Verification result: Before ___. After ___. Tested using ___]

---

## Task 6 — Compare and Submit

Selected final version: [Which version best satisfies the original requirements, and why]

| Technique | Observation |
|---|---|
| Zero-Shot | What did the AI assume or omit? |
| Structured Prompt | What improved after adding context and constraints? |
| Few-Shot | What became more consistent? |
| Role Assignment | What specialized concerns were identified? |
| Structured Analysis | What correction or improvement was verified? |

Final Reflection:
[Write 3 to 5 sentences in your own words about which technique helped most and what you still had to inspect and test yourself]
