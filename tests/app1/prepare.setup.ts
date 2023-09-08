import { expect, test } from "@playwright/test";

process.env.APP1_DATABASE = JSON.stringify(["app1", "app2"]);

console.log(`[aap1-app] setup() SEED_DATABASE:`, process.env.SEED_DATABASE);
console.log(`[aap1-app] setup() APP1_DATABASE:`, process.env.APP1_DATABASE);
