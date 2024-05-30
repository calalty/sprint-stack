module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    tsconfigRootDir: __dirname
  }
};
