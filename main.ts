// The Meeting That Should Have Been an Email — make.fun bounty entry.
// Writes the single meeting line (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the could-have-been-an-email setup,
// then the reversal — the meeting's only value was the spectacle itself.
const SETUP =
  "This meeting could have been an email, but then nobody would have watched Karen read her own slides out loud for forty minutes ";
const PUNCH =
  "while the rest of us nodded like bobbleheads on a dashboard.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 200

// The line sits near the cap: a named colleague, forty minutes of slides,
// and the punch lands on the last word — dashboard.
function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
