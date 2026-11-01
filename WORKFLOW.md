# Workflow Comparison: Vague vs. Precise Prompting

## Time & Review Effort
- **Round 1 (Vague):** The AI generated code instantly, but it lacked validation, proper error handling, and accessibility. Fixing this manually would take ~15-20 minutes.
- **Round 2 (Precise):** Prompting with explicit rules took 1 minute longer upfront, but produced production-ready code with Zod validation and full accessibility immediately. End-to-end, Round 2 was significantly faster.

## AI Mistakes Caught in Round 1
In Round 1, the AI created a generic form without schema validation and omitted semantic `<label>` associations and `aria-label` attributes.

## Edge Cases & Accessibility
Round 2 explicitly handled empty form submissions, invalid email formats using Zod, and screen-reader accessibility with explicit labels.