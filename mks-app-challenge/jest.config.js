const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.tsx"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "(<rootDir>/src/test/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};

module.exports = createJestConfig(customJestConfig);