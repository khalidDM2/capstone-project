# Capstone Project

A React user settings form built with the AI-Assisted Development workflow in mind.

## Overview
This repository contains a small Vite-powered React app with a validated user settings form.

The form validates full name, email, and notification preferences using React Hook Form and Zod.

## Current project status
The project currently includes a runnable React settings form.

- Node.js LTS is the expected runtime environment.
- The form is implemented in `src/UserSettingsForm.jsx`.
- Validation uses Zod through `@hookform/resolvers`.
- Valid submissions are passed to the form's `onSave` callback.

## Prerequisites
Before working in this repository, make sure you have the following installed:

- Node.js LTS
- Git
- A code editor, such as VS Code

## Local setup
1. Clone the repository:
   git clone <repository-url>
2. Navigate into the project folder:
   cd capstone-project
3. Verify that Node.js is available:
   node --version
4. Install dependencies:
   npm install
5. Start the development server:
   npm run dev

## Recommended project structure
As the project grows, a typical structure might look like this:

- src/ — application source code
- tests/ — automated tests
- docs/ — design and architecture notes
- public/ — static assets, if needed
- scripts/ — local helper or build scripts

This structure is a good default for keeping the repository maintainable as the project develops.

## Usage
### For a contributor starting on the project
1. Open the repository in VS Code.
2. Review the project docs and any implementation notes before making changes.
3. Review the package scripts before choosing development or validation commands.
4. Create or update feature work in the appropriate source folder.
5. Run `npm run build` to validate the production app.

### For local development workflow
Use a consistent workflow as the project grows:

1. Pull the latest changes from the remote branch.
2. Create a dedicated branch for your change.
3. Make the smallest focused update needed.
4. Run relevant validation commands.
5. Update documentation if behavior or usage changes.
6. Commit with a clear message and open a pull request.

### Running and validating the project
The normal workflow is:

- install dependencies with npm install,
- start the app with `npm run dev`,
- create a production build with `npm run build`,
- and use the repo’s documentation as the single source of truth for behavior.


## Development guidelines
- Keep the codebase organized and easy to navigate.
- Favor clear naming and small, focused changes.
- Document new features and commands as soon as they are introduced.
- Keep README updates in sync with project behavior.
- Validate changes before submitting work.

## Contributing
Contributions are welcome once implementation begins. The expected workflow is:

1. Fork or branch the repo.
2. Work on a focused feature or fix.
3. Update documentation when behavior changes.
4. Run validation steps relevant to the change.
5. Submit a pull request with a clear summary.

## License
This project is licensed under the terms included in the repository’s LICENSE files.

## Summary
This repository contains a runnable React user settings form with client-side validation and an `onSave` callback for integrating submission handling.