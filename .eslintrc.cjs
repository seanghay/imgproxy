module.exports = {
  root: true,
  extends: ['@block65'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './__test__/tsconfig.json'],
  },
};
