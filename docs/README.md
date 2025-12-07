# Project Documentation

## Version Control Workflow

This project uses [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) for managing version control.

### Branches

- `main`: Production-ready code. Only updated via releases or hotfixes.
- `develop`: Integration branch for features. All feature branches merge here.
- `feature/*`: Feature branches for new functionality.
- `release/*`: Release branches for preparing production releases.
- `hotfix/*`: Hotfix branches for urgent fixes on production.

### Workflow

1. Start a new feature: `git flow feature start <feature-name>`
2. Work on the feature branch.
3. Finish the feature: `git flow feature finish <feature-name>` (merges back to develop)
4. When ready for release: `git flow release start <version>`
5. Finalize release: `git flow release finish <version>` (merges to main and develop, tags)
6. For hotfixes: `git flow hotfix start <version>` from main.

Use clear, descriptive commit messages following the project's guidelines.
