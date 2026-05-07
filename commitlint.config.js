module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // fitur baru
        'fix', // bug fix
        'docs', // dokumentasi
        'style', // formatting, tidak ada perubahan logic
        'refactor', // refactor kode
        'perf', // peningkatan performa
        'test', // menambah/update test
        'chore', // update build, config, dependencies
        'ci', // CI/CD changes
        'revert', // revert commit
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
  },
};
