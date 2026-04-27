# Complete Build Workflow

## Overview
Runs an end-to-end flow from project setup through feature delivery, testing, and version control output.

## Participating Agents
- Orchestrator Agent
- Feature Implementation Agent
- Unit Testing Agent
- VCS Agent

## Prerequisites
- User has defined:
  - project type/framework
  - initial feature scope
  - repository preference (new or existing)

## Steps
1. **Plan Execution (Orchestrator)**
   - Select `project-creation` if project does not exist.
   - Select `feature-development` for each requested feature.
   - Define task order and dependencies.

2. **Create or Validate Base Project**
   - Execute project creation steps if needed.
   - Otherwise validate current project health.

3. **Iterative Feature Delivery**
   - Delegate feature implementation.
   - Delegate tests for each feature batch.
   - Track completion state after each batch.

4. **Build and Test Verification**
   - Run configured build command.
   - Run test command and gather summary.
   - Capture warnings/errors.

5. **Finalize in VCS**
   - Create branch (if missing).
   - Commit logical units.
   - Push and prepare PR details if requested.

6. **Completion Summary (Orchestrator)**
   - Provide final status, artifacts, and next actions.

## Handoffs
- Orchestrator -> Feature Agent: per planned feature batch.
- Orchestrator -> Testing Agent: after each feature implementation handoff.
- Orchestrator -> VCS Agent: after green build/test or user confirmation.

## Success Criteria
- Project is created or validated.
- Requested features are implemented.
- Tests are generated and pass (or failures are documented).
- VCS outputs are complete when requested.

## Failure Handling
- Build failure: return failing target and top diagnostics.
- Dependency/setup issue: return required install/setup commands.
- Partial completion: return exact completed vs pending items.
