// Everything on the site comes from this file. Change the text, links and lists here.
// Nothing calls the GitHub API: the star count and contributors are plain data,
// so update them when you cut a release (or generate this file in CI).

export const project = {
  name: "loam",
  tagline: "A small, durable key‑value store for JavaScript runtimes",
  description:
    "loam is an embedded key-value store for Node, Deno and Bun. One file on disk, crash-safe writes, ordered keys and transactions, in 41 KB with no native dependencies.",
  install: "npm install loam",
  version: "2.3.0",
  license: "MIT",
  stars: "2.4k",
  repoUrl: "https://git.example.com/loam/loam",
  docsUrl: "https://loam.example.dev/docs",
  changelogUrl: "https://git.example.com/loam/loam/releases",
  sponsorUrl: "https://sponsors.example.com/loam",
};

export const nav = [
  { label: "Features", href: "#features" },
  { label: "Example", href: "#example" },
  { label: "Community", href: "#community" },
  { label: "Docs", href: project.docsUrl },
];

// Other ways to install, shown as tabs under the main command.
export const installs = [
  { label: "npm", command: "npm install loam" },
  { label: "pnpm", command: "pnpm add loam" },
  { label: "Deno", command: "deno add jsr:@loam/loam" },
  { label: "Bun", command: "bun add loam" },
];

export const facts = [
  { label: "Size", value: "41 KB" },
  { label: "Dependencies", value: "0" },
  { label: "Runtimes", value: "Node 20+, Deno, Bun" },
];

export const features = [
  {
    title: "Crash-safe by default",
    text: "Every write goes to an append-only log and is synced before the promise resolves. Pull the plug mid-write and the store opens cleanly with everything that was acknowledged.",
  },
  {
    title: "Ordered keys and range scans",
    text: "Keys are kept sorted, so prefixes and ranges are a single call. Good for time series, queues and anything you'd otherwise index by hand.",
  },
  {
    title: "Transactions without a server",
    text: "Read and write several keys atomically. Conflicting transactions retry automatically, and readers never block writers.",
  },
  {
    title: "One file, easy to back up",
    text: "The whole store is a single file plus a small log. Copy it while it's open with the built-in snapshot call.",
  },
  {
    title: "Typed values",
    text: "Store strings, numbers, binary data or anything JSON can hold. TypeScript types flow from the store's schema to every read.",
  },
  {
    title: "No native code",
    text: "Pure TypeScript on top of each runtime's file APIs, so it installs anywhere: CI runners, Alpine images, edge functions with a disk.",
  },
];

// How a write settles into the store, drawn as layers in the hero diagram.
export const layers = [
  { name: "Write log", detail: "appended and synced", keys: "every write", width: 100 },
  { name: "Memory table", detail: "sorted, in RAM", keys: "1,204 keys", width: 86 },
  { name: "Level 0", detail: "recent files", keys: "48,600 keys", width: 70 },
  { name: "Level 1", detail: "merged, compacted", keys: "1.2M keys", width: 54 },
];

// The quick example. Each step is a short code block with a caption.
export const example = [
  {
    caption: "Open a store. It creates the file if it isn't there.",
    code: `import { open } from "loam";

const db = await open("./data/app.loam");`,
  },
  {
    caption: "Write and read. Keys sort by their parts, so related keys stay together.",
    code: `const today = ["orders", "2026-11-24"];

await db.put([...today, 1042], { total: 64.5 });
const order = await db.get([...today, 1042]);`,
  },
  {
    caption: "Scan a range and update several keys in one transaction.",
    code: `for await (const { key, value } of db.range({ prefix: today })) {
  console.log(key[2], value.total);
}

await db.transaction(async (tx) => {
  const stock = await tx.get(["stock", "SKU-118"]);
  await tx.put(["stock", "SKU-118"], stock - 1);
  await tx.put([...today, 1043], { total: 18 });
});`,
  },
];

export const output = `1040 22.00
1041 9.75
1042 64.50`;

// Contributors. A handful are shown with their initials; the rest are counted.
export const contributors = [
  { name: "Ada Okafor", handle: "adaok", role: "Maintainer" },
  { name: "Lukas Brenner", handle: "lbrenner", role: "Maintainer" },
  { name: "Mei Tanaka", handle: "meitk", role: "Storage engine" },
  { name: "Sam Rivera", handle: "samriv", role: "Deno support" },
  { name: "Joon Park", handle: "jpark", role: "Docs" },
  { name: "Ines Faria", handle: "ifaria", role: "Benchmarks" },
  { name: "Theo Lindqvist", handle: "theol", role: "Bun support" },
  { name: "Nadia Haddad", handle: "nhaddad", role: "Transactions" },
  { name: "Ravi Menon", handle: "rmenon", role: "Testing" },
  { name: "Clara Novak", handle: "cnovak", role: "TypeScript types" },
  { name: "Owen Achebe", handle: "oachebe", role: "Windows fixes" },
  { name: "Yusuf Demir", handle: "ydemir", role: "Compaction" },
];
export const moreContributors = 61;

// Sponsors by tier. Fictional companies; replace with your own.
export const sponsors = [
  { tier: "Infrastructure", names: ["Northbeam Hosting", "Quillstack"] },
  { tier: "Supporters", names: ["Tidewater Labs", "Bramble Analytics", "Kiteline", "Ferro & Finch"] },
  { tier: "Individuals", names: ["43 people sponsor loam every month"] },
];

export const community = [
  { title: "Documentation", text: "Guides, the full API and recipes for queues, caches and time series.", href: project.docsUrl },
  { title: "Discussions", text: "Ask questions, share what you built and propose changes.", href: "https://git.example.com/loam/loam/discussions" },
  { title: "Chat", text: "A small, friendly room where maintainers answer most days.", href: "https://chat.example.com/loam" },
  { title: "Contributing guide", text: "How to run the tests, the code style and how releases work.", href: "https://git.example.com/loam/loam/blob/main/CONTRIBUTING.md" },
];
