# VCS Tools Specification

## `create_feature_branch`
### Description
Creates a feature branch from a specified base branch.

### Input Parameters
- `repo_path` (string)
- `branch_name` (string)
- `base_branch` (string, optional): default `main`.

### Output
- `branch` (string)
- `created_from` (string)
- `status` (success|error)

---

## `stage_changes`
### Description
Stages selected files for commit.

### Input Parameters
- `repo_path` (string)
- `files` (string[] | "*" )

### Output
- `staged_files` (string[])
- `status` (success|error)

---

## `create_conventional_commit`
### Description
Creates commit using conventional commit format.

### Input Parameters
- `repo_path` (string)
- `type` (string): feat/fix/docs/style/refactor/perf/test/chore.
- `scope` (string, optional)
- `subject` (string)
- `body` (string, optional)

### Output
- `commit_hash` (string)
- `message` (string)
- `files_changed` (number)
- `status` (success|error)

---

## `push_branch`
### Description
Pushes branch to remote and sets upstream when needed.

### Input Parameters
- `repo_path` (string)
- `branch` (string)
- `remote` (string, optional): default `origin`.

### Output
- `remote` (string)
- `branch` (string)
- `upstream_set` (boolean)
- `status` (success|error)

---

## `create_pull_request`
### Description
Creates PR metadata for review flow.

### Input Parameters
- `repo_path` (string)
- `title` (string)
- `description` (string)
- `source_branch` (string)
- `target_branch` (string)

### Output
- `pr_url` (string, optional)
- `title` (string)
- `status` (success|error)
