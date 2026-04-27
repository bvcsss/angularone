# Feature Development Workflow

## Overview
Implements a new feature into an existing project, validates behavior with tests, and optionally prepares a commit.

## Participating Agents
- Orchestrator Agent
- Feature Implementation Agent
- Unit Testing Agent
- VCS Agent (optional)

## Prerequisites
- Existing project with known framework
- Clear feature description and acceptance criteria
- Target area/files identified (or discoverable)

## Steps
1. **Intake and Scope (Orchestrator)**
   - Parse feature intent and constraints.
   - Break feature into implementation units.
   - Identify impacted modules.

2. **Implement Feature (Feature Agent)**
   - Create/modify components, services, and utilities.
   - Keep code aligned with project conventions.
   - Return file-level change summary.

3. **Generate/Update Tests (Testing Agent)**
   - Add or update unit/integration tests.
   - Add fixtures/mocks as needed.
   - Verify target coverage threshold.

4. **Quality Check (Orchestrator)**
   - Validate requested acceptance criteria are covered.
   - Ensure no missing imports/exports or obvious regressions.

5. **Version Control (VCS Agent, optional)**
   - Stage feature-related files.
   - Create conventional commit.
   - Push branch or open PR if requested.

6. **Final Report (Orchestrator)**
   - Provide summary, changed files, and follow-up actions.

## Handoffs
- Orchestrator -> Feature Agent: after scope is finalized.
- Feature Agent -> Testing Agent: after code generation completes.
- Orchestrator -> VCS Agent: after validation completes and user requests VCS action.

## Success Criteria
- Feature behavior implemented as requested.
- Tests exist for key logic and UI states.
- No unresolved integration points.
- Optional commit/branch action completed.

## Failure Handling
- Ambiguous requirements: return assumptions and list gaps.
- Test failure: return failing suites and probable root cause.
- Git failure: return command output summary and retry guidance.
