module.exports = {
  "**/*.{js,jsx}": ["prettier --write .", "eslint --cache --fix"],
  "**/*.{ts,tsx}": [
    "prettier --write .",
    "eslint --cache --fix",
    () => "tsc --skipLibCheck --noEmit",
  ],
  "**/*.{json,css,scss,md,yml}": ["prettier --write ."],
};
