# Project Creation Workflow

## Overview
Creates a new application project from user intent, sets up baseline structure, and validates readiness for feature work.

## Participating Agents
- Orchestrator Agent
- Feature Implementation Agent (optional for starter templates)
- Unit Testing Agent (optional for initial test config)
- VCS Agent (optional for repo bootstrap)

## Prerequisites
- User has provided:
  - project name
  - framework/runtime
  - preferred package manager (optional)
- Destination path is writable

## Steps
1. **Capture Requirements (Orchestrator)**
   - Parse framework, app type, and project name.
   - Confirm defaults for missing values.
   - Create a normalized project request object.

2. **Initialize Project Structure (Orchestrator + Project Tools)**
   - Create folder layout.
   - Add baseline config files.
   - Add starter README and `.gitignore`.

3. **Generate Starter Code (Feature Agent, optional)**
   - Generate entry component/module.
   - Generate initial route/screen scaffolding.
   - Add framework-consistent imports/exports.

4. **Add Test Foundation (Testing Agent, optional)**
   - Generate test config.
   - Add one starter sanity test.

5. **Initialize Version Control (VCS Agent, optional)**
   - Initialize git repository if missing.
   - Create first commit.

6. **Report Completion (Orchestrator)**
   - Return created paths and summary.
   - Return immediate next actions.

## Handoffs
- Orchestrator -> Feature Agent: when starter code is requested.
- Orchestrator -> Testing Agent: when test scaffolding is requested.
- Orchestrator -> VCS Agent: when repository bootstrap is requested.

## Success Criteria
- Project directory exists with expected structure.
- Entry point compiles or is syntactically valid.
- Test setup exists (if requested).
- Git repository initialized (if requested).

## Failure Handling
- Invalid framework: return supported framework list and suggest closest match.
- Path conflict: suggest alternate project name/path.
- Tool failure: return failed step + remediation command.
