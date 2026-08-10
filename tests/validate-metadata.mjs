import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const config = await readFile(new URL("../fitness-pwa/config.yaml", import.meta.url), "utf8");
const repository = await readFile(new URL("../repository.yaml", import.meta.url), "utf8");

for (const required of [
  "name: Fitness PWA",
  "slug: fitness_pwa",
  "arch:",
  "- aarch64",
  "- amd64",
  "backup: cold",
  "services:",
  "- mysql:want",
  "LOCAL_DATA_DIR: /data",
  "image: ghcr.io/amenophus79/ha_fitnesswpa"
]) {
  assert.match(config, new RegExp(escapeRegExp(required)), `Missing app metadata: ${required}`);
}

assert.match(config, /^version:\s*"\d+\.\d+\.\d+"$/m, "Missing semantic app version.");
assert.match(repository, /url: https:\/\/github\.com\/Amenophus79\/HA_FitnessWPA/);
assert.doesNotMatch(config, /SUPABASE|OPENAI_API_KEY|PASSWORD|TOKEN/);
console.log("Home Assistant metadata is valid.");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
