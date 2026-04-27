# Multi-Agent System Architecture

## Overview

This is a **Claude Code multi-agent system** for collaborative end-to-end application development. The system is driven by CLAUDE.md files that Claude Code loads automatically. Sub-agents are spawned using Claude Code's built-in **Agent tool**, and all file/shell operations use Claude Code's real native tools.

---

## How Claude Code Loads This System

```
User opens project in Claude Code
    ↓
Claude Code reads CLAUDE.md at project root  ← entry point
    ↓
CLAUDE.md imports sub-agent specs via @path syntax
    ↓
Claude behaves as the Orchestrator Agent
    ↓
On delegation: Agent tool spawns a sub-agent
              with the relevant spec as its prompt
```

**The root `CLAUDE.md` is the only file Claude Code reads automatically.** All other files are either imported via `@path` in CLAUDE.md or passed into Agent tool prompts at delegation time.

---

## File Structure

```
genericApp/
├── CLAUDE.md                            ← Root entry point (auto-loaded by Claude Code)
│
└── agents_markdown/
    ├── SYSTEM_ARCHITECTURE.md           ← This file
    ├── INDEX.md                         ← Navigation index
    │
    ├── agents/
    │   ├── orchestrator.md              ← Orchestrator spec (imported by CLAUDE.md)
    │   ├── feature-agent.md             ← Feature Agent spec (imported by CLAUDE.md)
    │   ├── testing-agent.md             ← Testing Agent spec (imported by CLAUDE.md)
    │   └── vcs-agent.md                 ← VCS Agent spec (imported by CLAUDE.md)
    │
    ├── workflows/
    │   ├── project-creation.md
    │   ├── feature-development.md
    │   └── complete-build.md
    │
    └── tools/
        ├── project-tools.md
        ├── code-generation-tools.md
        ├── testing-tools.md
        └── vcs-tools.md
```

---

## Agent Hierarchy

```
┌────────────────────────────────────────────────┐
│  ORCHESTRATOR (Claude Code reads CLAUDE.md)    │
│  • Asks user for app type                      │
│  • Scaffolds project via Bash                  │
│  • Routes requests to sub-agents               │
│  • Tracks state via TodoWrite                  │
└──────────────┬─────────────────────────────────┘
               │  Agent tool (sub-agent spawn)
    ┌──────────┼─────────────────┐
    ▼          ▼                 ▼
┌──────────────────┐  ┌──────────────────┐  ┌─────────────────┐
│  FEATURE AGENT   │  │  TESTING AGENT   │  │   VCS AGENT     │
│  Write/Edit/Read │  │  Write/Edit/Bash │  │   Bash (git)    │
│  Glob/Grep/Bash  │  │  Read/Glob/Grep  │  │   Push only     │
│  Code generation │  │  Test generation │  │   with user OK  │
└──────────────────┘  └──────────────────┘  └─────────────────┘
```

---

## Real Tools (Not Fictional)

All agents use Claude Code's native tools. There are no custom tool implementations required.

| Tool      | Used By                  | Purpose                                     |
|-----------|--------------------------|---------------------------------------------|
| Bash      | All agents               | Shell commands: CLIs, npm, git, test runners|
| Write     | Feature, Testing         | Create new source and test files            |
| Edit      | Feature, Testing         | Modify existing files                       |
| Read      | All agents               | Read files for context                      |
| Glob      | Feature, Testing         | Discover project structure                  |
| Grep      | Feature, Testing         | Search code patterns                        |
| Agent     | Orchestrator             | Spawn Feature, Testing, or VCS sub-agent    |
| TodoWrite | Orchestrator             | Track project state across steps            |

---

## Inter-Agent Communication

Sub-agents do not communicate directly. All coordination flows through the Orchestrator:

```
Orchestrator
  → reads feature-agent.md
  → spawns Feature Agent via Agent tool
  ← receives: created files, handoff data for Testing Agent

Orchestrator
  → reads testing-agent.md
  → spawns Testing Agent with feature handoff data
  ← receives: test files, pass/fail, coverage

Orchestrator
  → reads vcs-agent.md
  → spawns VCS Agent with file list from both above
  ← receives: branch/commit status, waits for user push approval
```

---

## Key Design Principles

1. **CLAUDE.md is the activation point** — Without it, nothing in `agents_markdown/` is loaded by Claude Code
2. **Real tools only** — No fictional tool names; every capability maps to a real Claude Code tool
3. **Agent tool = real sub-agent delegation** — Spawns an independent Claude instance with its own context
4. **Push is always gated** — VCS Agent never pushes without explicit user confirmation
5. **Stateful via TodoWrite** — Orchestrator tracks project name, path, completed work across the session
6. **Sub-agent files are prompts** — Each `agents/*.md` file is designed to be passed as the system prompt to an Agent tool invocation

---

## Adding New Agents

1. Create `agents_markdown/agents/new-agent.md` following the same format:
   - Identity, Tools table, Process, Output format, Error handling
2. Add an `@agents_markdown/agents/new-agent.md` import line in root `CLAUDE.md`
3. Add a routing row in the Orchestrator's routing table in `CLAUDE.md`
4. Update `INDEX.md`

---

## Extending Workflows

Workflow files in `agents_markdown/workflows/` describe multi-step coordination sequences.
They are reference documentation — the Orchestrator reads them when executing complex multi-step requests.
