# Code Generation Tools Specification

## `generate_react_component`
### Description
Generates a React component with optional style and test stubs.

### Input Parameters
- `name` (string): Component name.
- `destination` (string): Target folder.
- `props` (object[], optional): Props name/type/default.
- `include_styles` (boolean, optional)
- `include_tests` (boolean, optional)

### Output
- `files_created` (string[])
- `exports_added` (string[])
- `status` (success|error)

---

## `create_api_service`
### Description
Generates a service module for REST-style CRUD operations.

### Input Parameters
- `service_name` (string)
- `base_url` (string)
- `operations` (string[]): e.g. `get`, `post`, `put`, `delete`.
- `destination` (string)

### Output
- `service_file` (string)
- `operations_generated` (string[])
- `status` (success|error)

---

## `create_utility_module`
### Description
Creates reusable utility functions.

### Input Parameters
- `module_name` (string)
- `functions` (object[]): function definitions.
- `destination` (string)

### Output
- `module_file` (string)
- `exports` (string[])
- `status` (success|error)

---

## `generate_imports`
### Description
Produces import statements for generated files.

### Input Parameters
- `framework` (string)
- `dependencies` (string[])
- `relative_from` (string)

### Output
- `imports` (string[])
- `missing_dependencies` (string[])
