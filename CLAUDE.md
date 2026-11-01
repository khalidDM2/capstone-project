## Project Rules
1. **Forms & Validation:** Always use `react-hook-form` paired with a `zod` schema for form state and validation. Never use basic uncontrolled inputs.
2. **Accessibility:** Every `<input>` must have an associated semantic `<label>` tag and proper `aria-labels`.
3. **Verification Loop:** Every new UI component must handle empty/error states explicitly before declaring a task complete.