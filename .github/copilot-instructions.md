# GitHub Copilot Instructions

### 🔄 Project Awareness & Context

- **Always read `BRIEF.md` and `README.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Use consistent naming conventions, file structure, and architecture patterns** as described in `BRIEF.md`.
- **Check existing components, composables, and utilities** before creating new ones to avoid duplication.
- **Understand the project's internationalization (i18n) setup** by reviewing `/i18n/` folder and `useSeoMetaI18n` composable.

### 🎨 Vue & Nuxt Best Practices

- **Use Composition API with `<script setup>`** for all Vue components.
- **Leverage Nuxt auto-imports** for components, composables, and utilities – no need to manually import them.
- **Follow Vue 3 reactivity patterns**: use `ref`, `reactive`, `computed`, and `watch` appropriately.
- **Use TypeScript** for all new files with proper type definitions and interfaces.
- **Organize component structure**: template → script → style (if absolutely necessary).
- **Keep components focused and single-purpose** – split complex components into smaller, reusable ones.
- **Use Nuxt layouts and pages** appropriately – avoid business logic in layouts.
- **Leverage Nuxt plugins** for global functionality (see `plugins/` folder).

### 🔧 Component Generation Rules

- **Components must have default values for required props.**
- **All props are required until provided with optional props.**
- **Generate a playground page for generated components.**
- **Place the playground page in `app/pages/components/category/ComponentName.vue`** (using kebab-case for the filename).
- **Playground page follows the next template:**

  ```
  <script setup lang="ts">
  import ComponentName from '~/components/category/ComponentName.vue'
  import ResizableContainer from '~/components/playground/ResizableContainer.vue'
  import PropsEditor from '~/components/playground/PropsEditor.vue'
  import CodeViewer from '~/components/playground/CodeViewer.vue'

  // Available only in development mode
  if (!import.meta.env.DEV) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }

  definePageMeta({
    layout: 'components-playground',
  })

  const componentNameProps = ref({
    // component props here
  })

  const propDefinitions = [
    // prop definitions here
  ]

  const updateProps = (newProps: Record<string, any>) => {
    componentNameProps.value = { ...newProps }
  }

  const componentCode = computed(() => {
    return `<ComponentName
  // props here
  />`
  })
  </script>

  <template>
    <div class="d-flex flex-column ga-4">
      <header class="d-flex flex-column ga-2 mb-5">
        <p class="text-B30 label-2 mb-0">
          <NuxtLink to="/components" class="text-decoration-none text-B30">Components</NuxtLink> /
          <NuxtLink to="/components/categoryName" class="text-decoration-none text-B30">category name</NuxtLink> /
          component name goes here
        </p>
        <h3 class="mb-0">component name</h3>
        <p class="text-B20 text-body-3 mb-0">
          component description goes here.
        </p>
      </header>

      <div class="d-flex flex-column ga-10">
        <ResizableContainer>
          <ComponentName v-bind="componentNameProps" />
        </ResizableContainer>

        <PropsEditor
          :props-data="componentNameProps"
          :prop-definitions="propDefinitions"
          @update="updateProps"
        />

        <CodeViewer :code="componentCode" />
      </div>
    </div>
  </template>
  ```

- **Don't forget to add component playground to component-playgrounds.ts.**

### 🧱 Code Structure & Modularity

- **Never create a file longer than 500 lines of code.** If a file approaches this limit, refactor by splitting it into modules or helper files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility.
- **Use clear, consistent imports** (prefer relative imports within packages).
- **Avoid circular imports** by carefully structuring dependencies.

### 🧪 Testing & Reliability

- **Always read `BRIEF.md`** to understand the testing framework and conventions.
- **After updating any logic**, check whether existing unit tests need to be updated. If so, do it.
- **Tests should live in a `/tests` folder** mirroring the main app structure.
  - Include at least:
    - 1 test for expected use
    - 1 edge case
    - 1 failure case

### 📎 Style & Conventions

#### Component & UI Styling:

- **Use Ultimate Core UI (Vuetify) components** with `u-` prefix instead of `v-` (e.g., `<u-btn>` instead of `<v-btn>`).
- **Leverage Vuetify utility classes** for spacing, typography, and layout:
  - Typography: `text-h1`, `text-h2`, `text-body-1`, etc.
  - Spacing: `ma-4`, `pa-2`, `ga-0`, `mt-8`, etc.
  - Layout: `d-flex`, `flex-column`, `justify-center`, `align-center`, etc.
- **Always check `app/assets/styles/main.scss`** for available custom style classes before creating new ones.
- **Always reference `app/plugins/ultimate-core-ui.ts`** to understand theme configuration and color tokens (e.g., `<u-btn color="BL10"></u-btn>`).
- **Avoid custom CSS and inline styles** unless absolutely necessary; use utility classes and component props instead.
- **Use the project's icon system** (3D icons, feature icons, line icons from `app/iconsets/`).

#### Code Documentation:

- Write **JSDoc comments for all functions, composables, and complex logic**.
- Use **clear, descriptive variable and function names** that make the code self-documenting.
- Add **explanatory comments for complex business logic** – explain the "why", not the "what".

### 📚 Documentation & Explainability

- **Update `README.md`** when new features are added, dependencies change, or setup steps are modified.
- **Document new components** with usage examples and prop descriptions.
- **Document new composables** with purpose, parameters, return values, and usage examples.
- **Keep the `/docs` folder updated** with relevant documentation for features and patterns.
- **Comment non-obvious code** and ensure everything is understandable to a mid-level developer.
- When writing complex logic, **add explanatory comments** that explain the "why", not just the "what".
- **Use JSDoc for exported functions** to provide IntelliSense hints in the IDE.

### 🧠 AI Behavior Rules

- **Never assume missing context. Ask questions if uncertain.**
- **Never hallucinate libraries or functions** – only use known, verified packages.
- **Always confirm file paths and module names** exist before referencing them in code or tests.

### 🛠️ Code Quality & Maintenance

- **Refactor code to improve clarity** without changing functionality.
- **Avoid unnecessary complexity** – keep solutions straightforward and idiomatic.
- **Use consistent naming conventions**:
  - `PascalCase` for components and classes
  - `camelCase` for variables, functions, and methods
  - `UPPER_SNAKE_CASE` for constants
  - `kebab-case` for file names (except components)
- **Always use TypeScript types and interfaces** for function parameters, return values, and props.
- **Define prop types explicitly** using `defineProps<T>()` with TypeScript interfaces.
- **Use template refs correctly** with proper typing: `const myRef = ref<HTMLElement>()`.
- **Avoid `any` type** – use proper types or `unknown` with type guards if necessary.
- **Prefer `const` over `let`** – use `let` only when reassignment is necessary.
- **Use optional chaining (`?.`) and nullish coalescing (`??`)** for safer code.
- **Never leave commented-out code** in the final version – use version control instead.
- **Avoid using `eval()` or similar functions** that execute arbitrary code.

### 🗂️ File Organization & Management

- **Avoid creating new files unnecessarily**. If a new file is needed, ensure it has a clear purpose and fits the existing structure.
- **Do not delete files unless explicitly requested**. If a file is no longer needed, comment it out and add a note explaining why.

### 📦 Dependencies & Packages

- When suggesting new packages, **always check `package.json`** to see if they are already installed.
- If a new package is needed:
  - **Use the appropriate package manager** (check `package.json` for package manager hints).
  - **Explain the purpose** of the package and why it's necessary.
  - **Consider the bundle size impact** – prefer lightweight alternatives when possible.
  - **Check for TypeScript types** – install `@types/*` packages if needed.

### 📝 Commit Messages & Version Control

- **Use clear, descriptive commit messages** that explain the changes made and why.
- Follow the project's version control guidelines as outlined in `BRIEF.md`.

### ⚠️ Security & Privacy

- **Never hardcode sensitive information** (like API keys or passwords) in code.
- Always use environment variables or secure vaults for sensitive data.
- **Review code for potential security vulnerabilities** before committing changes.
- **Follow best practices for secure coding** as outlined in the project's security guidelines.

### ♿ Accessibility & Inclusively

- **Ensure all user-facing features are accessible** to people with disabilities (e.g., use semantic HTML, ARIA labels, and sufficient color contrast).
- **Write inclusive documentation and comments** (avoid gendered language, use clear and respectful terms).
- **Test UI components with screen readers and keyboard navigation** where applicable.

### 🔑 Handling Secrets

- **Store secrets in environment variables or secure vaults**; never commit them to version control.
- **Add `.env` and similar files to `.gitignore`** to prevent accidental leaks.
- **Document secret management and setup steps in `README.md`**.

### 📝 Issue & PR Templates

- **Use the provided issue and pull request templates** in `.github/ISSUE_TEMPLATE/` and `.github/pull_request_template/`.
- **Fill out all required sections** to ensure clarity and completeness.
- **Reference related issues and link to relevant documentation** when submitting PRs.

### ⬆️ Dependency Updates

- **Review and test all dependency updates** before merging.
- **Document any new or removed dependencies** in `README.md` and changelog.
- **Check for security advisories** when updating dependencies.
- **Test thoroughly** after updates – Nuxt and Vue updates can introduce breaking changes.

### 📁 Handling Large Files

- **Do not commit large files (e.g., >100MB) to the repository** unless absolutely necessary.
- **Use Git LFS or external storage solutions** for large assets.
- **Add large file patterns to `.gitignore`** and document handling procedures in `README.md`.
