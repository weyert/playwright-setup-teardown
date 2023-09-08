import type { PlaywrightTestConfig, Project } from "@playwright/test";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  //
  testDir: "tests/empty",

  //
  projects: [
    {
      name: "setup db",
      testMatch: /global\.setup\.ts/,
      teardown: "cleanup db",
    },
    // Application 1
    {
      name: "app1-setup",
      testDir: "./tests/app1",
      testMatch: "**/*.setup.ts",
      dependencies: ["setup db"],
      teardown: "app1-teardown",
    },
    {
      name: "App 1",
      testDir: "./tests/app1",
      testMatch: "**/*.test.ts",
      use: {},
      metadata: {
        testGroup: "app1",
      },
      dependencies: ["app1-setup"],
    },
    {
      name: "App 1",
      testDir: "./tests/app1",
      testMatch: "**/*.test.ts",
      use: {},
      metadata: {
        testGroup: "app1",
      },
      dependencies: ["app1-setup"],
    },
    {
      name: "app1-teardown",
      testDir: "./tests/app1",
      testMatch: "**/*.teardown.ts",
    },
    // Cleanup before projects
    {
      name: "cleanup db",
      testMatch: /global\.teardown\.ts/,
    },
  ].filter(Boolean),
});
