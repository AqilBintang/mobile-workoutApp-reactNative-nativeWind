# Contributing Guide

## Struktur Monorepo

```
root/
├── frontend/            ← Expo React Native app
│   ├── app/             ← Expo Router screens
│   ├── features/        ← Feature modules
│   ├── components/      ← Shared components
│   ├── lib/             ← Utilities & storage
│   ├── constants/       ← App-wide constants
│   ├── types/           ← Global TypeScript types
│   └── assets/          ← Images, fonts, icons
├── backend/             ← (coming soon)
├── .github/workflows/   ← CI/CD pipelines
├── .husky/              ← Git hooks
└── package.json         ← Root devops scripts
```

## Branching Strategy

```
main        → production
develop     → staging / integration
feature/*   → fitur baru
fix/*       → bug fix
chore/*     → maintenance
```

## Commit Convention

Project ini menggunakan [Conventional Commits](https://www.conventionalcommits.org/).

Format: `<type>(<scope>): <subject>`

### Types

| Type       | Kapan dipakai                          |
|------------|----------------------------------------|
| `feat`     | Fitur baru                             |
| `fix`      | Bug fix                                |
| `docs`     | Perubahan dokumentasi                  |
| `style`    | Formatting, tidak ada perubahan logic  |
| `refactor` | Refactor kode                          |
| `perf`     | Peningkatan performa                   |
| `test`     | Menambah atau update test              |
| `chore`    | Update build, config, dependencies     |
| `ci`       | Perubahan CI/CD                        |
| `revert`   | Revert commit sebelumnya               |

### Contoh

```bash
git commit -m "feat(workout): add timer screen"
git commit -m "fix(exercise): fix muscle group filter"
git commit -m "chore(deps): update nativewind to v4.2"
```

## Development Workflow

1. Install semua dependencies
   ```bash
   # Root (devops tools)
   npm install

   # Frontend
   cd frontend && npm install
   ```

2. Jalankan app dari root
   ```bash
   npm run frontend          # expo start
   npm run frontend:android  # android
   npm run frontend:ios      # ios
   ```

3. Buat branch dari `develop`
   ```bash
   git checkout -b feature/nama-fitur develop
   ```

4. Develop & commit dengan conventional commits

5. Push dan buat Pull Request ke `develop`

6. CI otomatis run: format check → lint → type check

7. Setelah review & merge ke `develop`, test di staging

8. Merge `develop` → `main` untuk release
