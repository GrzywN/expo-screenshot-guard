module.exports = {
  '*.{ts,tsx,js,jsx,json}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
  ],
  '*.{ts,tsx,js,jsx}': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
  ],
  '*.{ts,tsx}': () => ['expo-module tsc --noEmit'],
};
