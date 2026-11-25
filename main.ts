// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// Chosen word: "Buffering".
// Why this word: it is the machine's own honest stall signal — the spinning
// wheel every user recognises the instant an agent stops knowing what to do
// next. It needs no caption, it sounds like something a machine blurts out
// mid-task, and it is fresher than the obvious "Oops" / "Stuck" / "Uh-oh"
// echo. The one entry already on the board ("Hallucinating") confesses to
// making things up; this one confesses to having nothing yet — a different
// family, no collision.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Buffering";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 99 characters, and
// exactly one word — no whitespace inside, nothing attached.
if (WORD.length < 1 || WORD.length > 99 || /\s/.test(WORD)) {
  throw new Error(`word must be one word of 1-99 characters, got ${JSON.stringify(WORD)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
