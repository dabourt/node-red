const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = __dirname;
const runtimeDir = process.env.NODE_RED_USER_DIR || path.join(root, "runtime");
const sourceFlow = path.join(root, "flows.json");
const targetFlow = path.join(runtimeDir, "flows.json");

fs.mkdirSync(runtimeDir, { recursive: true });

// Repo is the source of truth: overwrite the runtime flow on every boot
fs.copyFileSync(sourceFlow, targetFlow);

const cmd = process.platform === "win32" ? "node-red.cmd" : "node-red";
const child = spawn(cmd, ["-s", path.join(root, "settings.js"), "-u", runtimeDir], {
  stdio: "inherit",
  shell: process.platform === "win32"
});

child.on("exit", (code) => process.exit(code ?? 0));