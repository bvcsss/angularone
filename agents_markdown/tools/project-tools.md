# Project Tools Specification

## `create_project`
### Description
Creates a new project directory and baseline structure for the selected framework.

### Input Parameters
- `project_name` (string): Name of the project folder.
- `framework` (string): Selected framework/runtime.
- `location` (string): Absolute or relative base path.
- `template` (string, optional): Starter template flavor.

### Output
- `project_path` (string)
- `created_files` (string[])
- `status` (success|error)
- `message` (string)

---

## `select_framework`
### Description
Normalizes and validates the user-selected framework.

### Input Parameters
- `requested_framework` (string)
- `app_type` (string, optional): frontend/backend/fullstack/mobile.

### Output
- `framework` (string)
- `version_hint` (string, optional)
- `supported` (boolean)
- `alternatives` (string[])

---

## `get_project_status`
### Description
Returns current state of project initialization and core artifacts.

### Input Parameters
- `project_path` (string)

### Output
- `exists` (boolean)
- `framework_guess` (string)
- `has_git` (boolean)
- `has_tests` (boolean)
- `key_files` (string[])

---

## `list_frameworks`
### Description
Returns supported frameworks and brief metadata.

### Input Parameters
- `include_experimental` (boolean, optional)

### Output
- `frameworks` (object[])
  - `name` (string)
  - `type` (string)
  - `notes` (string)
