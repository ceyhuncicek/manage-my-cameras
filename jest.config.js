module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['node_modules/(?!axios)'],
  setupFilesAfterEnv: ['./tests/unit/setup.js'],
};
