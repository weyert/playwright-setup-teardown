import { expect, test } from "@playwright/test";

process.env.APP1_DATABASE = JSON.stringify([]);

console.log(`[app1-app] teardown() APP1_DATABASE:`, process.env.APP1_DATABASE);
console.log(`[app1-app] teardown() SEED_DATABASE:`, process.env.SEED_DATABASE);
