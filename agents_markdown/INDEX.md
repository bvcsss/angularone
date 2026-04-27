# Multi-Agent System Index

## Entry Point
- [CLAUDE.md](../CLAUDE.md) — Root file loaded automatically by Claude Code. Start here.

## Architecture
- [System Architecture](./SYSTEM_ARCHITECTURE.md) — How the system works, tool mapping, design principles

## Agents
- [Orchestrator Agent](./agents/orchestrator.md) — Scaffolds projects, routes requests, delegates to sub-agents
- [Feature Implementation Agent](./agents/feature-agent.md) — Generates components, services, utilities
- [Unit Testing Agent](./agents/testing-agent.md) — Generates unit and integration tests
- [VCS Agent](./agents/vcs-agent.md) — Manages branches, commits, and push (with user confirmation)

## Workflows
- [Project Creation Workflow](./workflows/project-creation.md) — End-to-end project setup flow
- [Feature Development Workflow](./workflows/feature-development.md) — Feature → tests → VCS flow
- [Complete Build Workflow](./workflows/complete-build.md) — Full project delivery flow

## Tools Reference
- [Project Tools](./tools/project-tools.md)
- [Code Generation Tools](./tools/code-generation-tools.md)
- [Testing Tools](./tools/testing-tools.md)
- [VCS Tools](./tools/vcs-tools.md)

## Usage

1. Open the project in Claude Code — `CLAUDE.md` is loaded automatically.
2. Tell Claude what kind of app you want to build.
3. The Orchestrator scaffolds the project and coordinates sub-agents from there.
4. Sub-agents (Feature, Testing, VCS) are spawned via the Agent tool when needed.
