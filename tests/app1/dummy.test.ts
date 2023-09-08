import { expect, test } from "@playwright/test";

test.describe("App1", () => {
  test("should be okay", async () => {
    console.log(`[app1-app:test] APP1_DATABASE:`, process.env.APP1_DATABASE);
    expect(true).toBe(true);
  });
});
