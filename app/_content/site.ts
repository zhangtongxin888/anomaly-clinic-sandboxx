export const SITE_URL = "https://anomalyclinicsandboxx-wiki.wiki";

export const navigation = [
  { href: "/guides/quick-start", label: "Quick start", short: "Start" },
  { href: "/guides/core-loop", label: "Core loop", short: "Loop" },
  { href: "/guides/progression", label: "Progression", short: "Progress" },
  { href: "/guides/common-mistakes", label: "Common mistakes", short: "Mistakes" },
  { href: "/faq", label: "FAQ", short: "FAQ" },
] as const;

export const officialSources = [
  {
    label: "Roblox experience listing",
    href: "https://www.roblox.com/games/89294506890787/Anomaly-Clinic-SANDBOXX",
  },
  {
    label: "Roblox experience metadata",
    href: "https://games.roblox.com/v1/games?universeIds=10610105255",
  },
  {
    label: "Roblox pass catalog",
    href: "https://apis.roblox.com/game-passes/v1/universes/10610105255/game-passes?passView=Full&limit=100",
  },
  {
    label: "Roblox place list",
    href: "https://develop.roblox.com/v1/universes/10610105255/places?isUniverseCreation=false&limit=100&sortOrder=Asc",
  },
  {
    label: "Roblox badge catalog",
    href: "https://badges.roblox.com/v1/universes/10610105255/badges?limit=100&sortOrder=Asc",
  },
] as const;

export const verifiedSnapshot = {
  title: "Anomaly Clinic: SANDBOXX",
  placeId: "89294506890787",
  universeId: "10610105255",
  creator: "Voltber3877",
  genre: "Survival",
  maxPlayers: "50",
  access: "Free entry",
  vipServers: "Not available",
  badges: "None listed",
  checkedOn: "August 18, 2026",
};

export const passes = [
  { id: "1933701030", name: "Admin Panel", price: "599 Robux" },
  { id: "1933557087", name: "PERM SANDBOX PASS", price: "499 Robux" },
  { id: "1931999425", name: "Tall Monster", price: "249 Robux" },
  { id: "1932957101", name: "Shadow", price: "199 Robux" },
  { id: "1935332728", name: "Infinite Sanity", price: "99 Robux" },
] as const;

export type GuidePage = {
  slug: string;
  code: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  steps: ReadonlyArray<{ title: string; body: string; tag?: string }>;
  verified: readonly string[];
  caution: string;
  next: { href: string; label: string; note: string };
};

export const guidePages: Record<string, GuidePage> = {
  "quick-start": {
    slug: "quick-start",
    code: "CASE 01",
    title: "Quick start",
    eyebrow: "FIRST-SESSION ORIENTATION",
    description:
      "Start Anomaly Clinic: SANDBOXX safely: confirm the correct Roblox listing, learn the live interface, and test one sandbox control at a time.",
    summary:
      "The public Roblox description is only one word, so the live interface—not an unrelated guide—is the source of truth for your session. Use this route to get oriented without buying first or importing assumptions from another build.",
    steps: [
      {
        title: "Confirm the listing before you join",
        body: "Check that the page title is Anomaly Clinic: SANDBOXX and the place ID in the address is 89294506890787. Instructions written for any other place ID may not match this one.",
        tag: "Verified ID",
      },
      {
        title: "Enter free before considering a pass",
        body: "Roblox currently lists the experience with no entry price. Join a normal public server and learn what is already available before spending Robux on an optional pass.",
        tag: "Free entry",
      },
      {
        title: "Map the live interface",
        body: "Read every visible label once. Locate the session objective, reset or respawn option, and any sandbox panel that your account can open. If a button is not present, do not borrow instructions from a different place ID.",
        tag: "Safe method",
      },
      {
        title: "Test one control at a time",
        body: "Begin from a quiet state, use a single control, observe the result, then reset before testing the next one. One-change tests make spawned characters, events, tools, and role effects easier to understand.",
        tag: "Safe method",
      },
      {
        title: "Keep names separate from effects",
        body: "The pass catalog confirms five product names, but their public descriptions are blank. Treat a name such as Infinite Sanity as a label until the purchase dialog or live game states the exact benefit.",
        tag: "Fact check",
      },
    ],
    verified: [
      "The experience is free to enter at the time of research.",
      "It is categorized as Survival and allows up to 50 players.",
      "The public description does not document controls or a win condition.",
    ],
    caution:
      "Do not use an older Animal Hospital tutorial as proof that a control exists here. Match instructions to place ID 89294506890787 and trust the current in-game labels when they differ.",
    next: {
      href: "/guides/core-loop",
      label: "Build a repeatable core loop",
      note: "Turn first-session experiments into a clean test routine.",
    },
  },
  "core-loop": {
    slug: "core-loop",
    code: "CASE 02",
    title: "Core loop",
    eyebrow: "LEARN → TEST → COMPARE → RESET",
    description:
      "Use a repeatable sandbox loop in Anomaly Clinic: SANDBOXX without relying on unverified mechanics from other Roblox builds.",
    summary:
      "Roblox does not publish a fixed objective for this listing. The most reliable loop is therefore experimental: learn the current state, change one thing, compare the result, and reset before the next test.",
    steps: [
      {
        title: "Learn the baseline",
        body: "Start by observing the default scene, visible counters, current role, nearby characters, and available controls. This gives you a clean point of comparison.",
      },
      {
        title: "Choose one experiment",
        body: "Pick one visible control or interaction. Avoid activating several events or characters at once; stacked effects hide what each control actually changes.",
      },
      {
        title: "Observe the full result",
        body: "Watch for changes to the environment, your character, other players, on-screen meters, or available actions. Use the game’s own wording when you make a note.",
      },
      {
        title: "Compare with the baseline",
        body: "Ask what changed and what stayed the same. If the effect is unclear, repeat the same test once instead of guessing from a product name or thumbnail.",
      },
      {
        title: "Reset before the next test",
        body: "Respawn, rejoin, or use a visible reset control when the state becomes noisy. A clean state keeps the next result understandable and helps a group coordinate.",
      },
    ],
    verified: [
      "The title explicitly identifies this listing as SANDBOXX.",
      "Roblox lists five optional pass names, and all five public descriptions are blank.",
      "The exact effects of those passes are not described in the public catalog.",
    ],
    caution:
      "This loop is a safe play method, not a claim about a hidden scoring system. There is no publicly verified ending, shift count, currency route, or required objective for this exact place ID.",
    next: {
      href: "/guides/progression",
      label: "Plan your progression",
      note: "Know what can be earned, bought, or left unverified.",
    },
  },
  progression: {
    slug: "progression",
    code: "CASE 03",
    title: "Progression",
    eyebrow: "LEARN BEFORE YOU UNLOCK",
    description:
      "A no-guesswork progression route for Anomaly Clinic: SANDBOXX, including verified passes, badges, and private-server limits.",
    summary:
      "There is no public badge path or documented level ladder for this exact experience. Progress first through knowledge: learn the interface, master controlled tests, then decide whether an optional pass is relevant.",
    steps: [
      {
        title: "Stage 1 — Orientation",
        body: "Confirm the correct place ID, join for free, and identify the controls available to every player. Your goal is a reliable map of the current interface.",
      },
      {
        title: "Stage 2 — Controlled experiments",
        body: "Test the default tools and interactions one at a time. Repeat unclear results and keep notes tied to the exact wording shown in the live game.",
      },
      {
        title: "Stage 3 — Group scenarios",
        body: "Once you understand a single change, coordinate a small scenario with other players. Assign one person to trigger a control and everyone else to observe one result.",
      },
      {
        title: "Stage 4 — Optional pass decision",
        body: "Only consider a pass after the Roblox purchase dialog or the live game explains its current benefit. Pass names and prices are verified; their exact effects are not publicly documented.",
      },
    ],
    verified: [
      "The public badge catalog contains no badges for this universe.",
      "Roblox says creators cannot create VIP servers for this experience.",
      "Five optional passes were listed when this guide was researched.",
    ],
    caution:
      "Prices and sale status can change. Check Roblox at purchase time. A paid pass should not be treated as required progression unless the current game explicitly says so.",
    next: {
      href: "/guides/common-mistakes",
      label: "Avoid the common mistakes",
      note: "Protect your time and Robux with five quick checks.",
    },
  },
  "common-mistakes": {
    slug: "common-mistakes",
    code: "CASE 04",
    title: "Common mistakes",
    eyebrow: "ERROR / CORRECTION",
    description:
      "Avoid wrong-place guides, assumed pass effects, and early purchases in Anomaly Clinic: SANDBOXX.",
    summary:
      "Most early confusion comes from mixing this listing with another Animal Hospital build. Keep the place ID visible, separate verified catalog data from live mechanics, and change one variable at a time.",
    steps: [
      {
        title: "Mistake: following a guide for a different place",
        body: "Correction: check for place ID 89294506890787. Similar titles, screenshots, and pass names do not prove identical controls.",
        tag: "Identity",
      },
      {
        title: "Mistake: buying before exploring",
        body: "Correction: enter free, learn the default interface, and read the live purchase details first. The five passes are optional catalog items, not a verified starter requirement.",
        tag: "Robux",
      },
      {
        title: "Mistake: treating a pass name as a full description",
        body: "Correction: product names are real, but every public pass description is blank. Confirm duration, scope, and server behavior at purchase time.",
        tag: "Evidence",
      },
      {
        title: "Mistake: triggering everything at once",
        body: "Correction: change one control, observe, compare, reset. This prevents several characters or effects from obscuring the result.",
        tag: "Testing",
      },
      {
        title: "Mistake: expecting badges or a private server",
        body: "Correction: the universe currently lists no badges and disables creator-made VIP servers. Plan a public-session test instead.",
        tag: "Limits",
      },
    ],
    verified: [
      "This exact listing has its own place and universe IDs.",
      "Its creator is the Roblox user Voltber3877, not a verified creator account.",
      "Public metadata does not establish an official link to any other Roblox experience.",
    ],
    caution:
      "A matching title, thumbnail, or product name is not proof that another place ID uses the same live controls.",
    next: {
      href: "/faq",
      label: "Read the FAQ",
      note: "Get direct answers to the questions public data can settle.",
    },
  },
};

export const faqItems = [
  {
    question: "Is Anomaly Clinic: SANDBOXX free to enter?",
    answer:
      "Yes at the time of research. Roblox lists no entry price. Optional paid passes are sold separately.",
  },
  {
    question: "How many players can join?",
    answer:
      "Roblox metadata sets the server size at up to 50 players.",
  },
  {
    question: "What is the verified objective?",
    answer:
      "The public listing does not state one. Its description is only “Scaryz.” Use the current live interface as the source of truth and avoid importing a win condition from another place ID.",
  },
  {
    question: "Is it the same game as Animal Hospital (Anomaly)?",
    answer:
      "Roblox does not identify this listing as the same experience. Treat every other place ID as a separate build unless the current live interface proves a specific control matches.",
  },
  {
    question: "What does the Infinite Sanity pass do?",
    answer:
      "Roblox confirms the product name and current sale listing, but the public description is blank. Confirm the exact benefit, duration, and scope in the live purchase dialog before buying.",
  },
  {
    question: "Are Admin Panel, Tall Monster, and Shadow real passes?",
    answer:
      "Yes. They were present in the official pass catalog when researched. Their names are verified; their exact controls and effects are not publicly documented.",
  },
  {
    question: "Does the game have badges?",
    answer:
      "No badges were listed for Universe ID 10610105255 on August 18, 2026.",
  },
  {
    question: "Can I create a VIP server?",
    answer:
      "Roblox metadata reports that VIP server creation is disabled for this experience.",
  },
] as const;
