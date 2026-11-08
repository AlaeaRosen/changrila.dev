import flavourIqCover from "@/imports/Screenshot_2026-11-08_at_2.51.48_pm.png"

export const A = (file: string) => `/assets/${file}`
export type Category = "UX/UI" | "DATA" | "DEV"

export type ImageCover = {
  kind: "image"
  src: string
  alt: string
  imageClassName?: string
}

export type PlanetCover = {
  kind: "planet"
  src: string
  alt: string
  tint: string
  imageClassName?: string
}

export type Cover = ImageCover | PlanetCover

export type Project = {
  id: string
  title: string
  category: Category
  label: string
  summary: string
  skills: string[]
  cover: Cover
  what: string
  who: string
  context: string
  role: string
  timeline: string
  /** Divider above the story; defaults to STORYTELLING NARRATIVE, "" hides it. */
  storyHeading?: string
  chapters: {
    problem: string
    exploration: string
    solution: string
  }
  metrics: {
    value: string
    label: string
  }[]
  decisions: {
    title: string
    body: string
  }[]
  architecture: {
    name: string
    detail: string
  }[]
  learnings: string[]
  links: {
    figma?: string
    github?: string
    live?: string
    prototype?: string
  }
}

const lorem = {
  problem:
    "Placeholder: describe the moment you noticed the problem, who it hurt, and why the existing tools were not enough.",
  exploration:
    "Placeholder: sketches, wireframes and the dead ends that shaped the direction. Show the messy middle honestly.",
  solution:
    "Placeholder: the breakthrough. What the final concept does differently, in one or two confident sentences.",
}

export const PROJECTS: Project[] = [
  {
    id: "mindsprout",
    title: "Mindsprout",
    category: "UX/UI",
    label: "UX/UI Project",
    summary:
      "Mindsprout is an 5 min journaling app on iOS made during Apple Foundation Program.  Add one more line.",
    skills: ["Figma", "SwiftCode", "ClaudeCode"],
    cover: {
      kind: "image",
      src: A("b4de1.png"),
      alt: "Moonlit bedroom with a warm bedside lamp",
    },
    what: "A five-minute iOS journaling ritual that grows a sprout as you reflect.",
    who: "Students and young professionals who want a calmer end to the day.",
    context: "Apple Foundation Program (2025).",
    role: "UX/UI Designer & iOS Developer",
    timeline: "4 weeks / Foundation Program 2025",
    chapters: lorem,
    metrics: [
      { value: "94%", label: "User satisfaction" },
      { value: "12", label: "Users tested" },
      { value: "4 weeks", label: "Sprint duration" },
    ],
    decisions: [
      {
        title: "Decision 1",
        body: "One prompt per night keeps the ritual under five minutes.",
      },
      {
        title: "Decision 2",
        body: "The sprout grows with streaks, never punishes missed days.",
      },
      {
        title: "Decision 3",
        body: "Night palette by default to protect sleep.",
      },
      { title: "Decision 4", body: "Haptics mark each finished entry." },
    ],
    architecture: [
      {
        name: "Onboarding",
        detail: "Three calm screens: intent, reminder time, first sprout.",
      },
      {
        name: "Daily Prompt",
        detail: "A single rotating prompt, chosen by mood check-in.",
      },
      {
        name: "Journal Entry",
        detail: "Voice or text, auto-saved locally with SwiftData.",
      },
      {
        name: "Garden View",
        detail: "Sprout growth visualises consistency over weeks.",
      },
      {
        name: "Memory Capture",
        detail: "Resurfaced entries on the anniversary of writing them.",
      },
    ],
    learnings: [
      "Personal learning bullet 1",
      "Personal learning bullet 2",
      "Personal learning bullet 3",
    ],
    links: { figma: "#", github: "#", live: "#" },
  },
  {
    id: "flavouriq",
    title: "FlavourIQ",
    category: "UX/UI",
    label: "UX/UI Project",
    summary:
      "FlavourIQ helps coffee lovers understand their taste, mapping every cup into a flavour profile they can share.",
    skills: ["Figma", "Prototyping", "User Research"],
    cover: {
      kind: "image",
      src: flavourIqCover,
      alt: "FlavourIQ coffee and tea app screens",
      imageClassName: "object-[70%_center]",
    },
    what: "A tasting companion that turns cupping notes into a personal flavour map.",
    who: "Home baristas and specialty coffee shops.",
    context: "Personal project (2025).",
    role: "Solo UX Designer",
    timeline: "3 weeks / Semester 1 2025",
    chapters: lorem,
    metrics: [
      { value: "88%", label: "Task success" },
      { value: "9", label: "Users tested" },
      { value: "3 weeks", label: "Sprint duration" },
    ],
    decisions: [
      {
        title: "Decision 1",
        body: "Flavour wheel replaced with five sliders after testing.",
      },
      { title: "Decision 2", body: "Shareable cards drive word-of-mouth." },
      { title: "Decision 3", body: "Cafe mode for staff recommendations." },
      { title: "Decision 4", body: "Taste history is private by default." },
    ],
    architecture: [
      {
        name: "Onboarding",
        detail: "Pick three coffees you love to seed your profile.",
      },
      {
        name: "Taste Log",
        detail:
          "Quick sliders for acidity, body, sweetness, bitterness, aroma.",
      },
      {
        name: "Flavour Map",
        detail: "Your palate plotted against origins and roasts.",
      },
      {
        name: "Recommendations",
        detail: "Beans and cafes matched to your map.",
      },
      { name: "Share Card", detail: "An exportable taste card for social." },
    ],
    learnings: [
      "Personal learning bullet 1",
      "Personal learning bullet 2",
      "Personal learning bullet 3",
    ],
    links: { figma: "#" },
  },
  {
    id: "realswipe",
    title: "RealSwipe",
    category: "UX/UI",
    label: "UX/UI Project",
    summary:
      "RealSwipe makes house hunting playful: swipe through rentals, match with flatmates and plan viewings on a map.",
    skills: ["Figma", "Prototyping", "User Research"],
    cover: {
      kind: "image",
      src: A("realswipe-cover.png"),
      alt: "RealSwipe app screens",
    },
    what: "Mistaken for a dating app by 100% of new users ",
    who: "18–30 Young people who would like to socialise",
    context: "UX/ID Society - Project UX",
    role: "UX/UI Designer",
    timeline: " 8 weeks · April - June 2025",
    storyHeading: "",
    chapters: {
      problem:
        "RealSwipe helps people discover events and connect around shared interests (nightlife, sports, meetups). The app was functionally sound but perceptually broken: 100% of new users assumed it was a dating app before reading any content.",
      exploration:
        "We benchmarked four competitors: Meetup, Nomadtable, Ripple, and Bunchups and ran usability testing and heuristic analysis on the original RealSwipe, surfacing three root causes: romantic visual cues, profile-first structure, and ambiguous language.",
      solution:
        "We redesigned Onboarding, Map & Events, and the Profile Card around community framing and activity context, then validated the redesign in a controlled A/B test with 54 participants.",
    },
    metrics: [
      {
        value: "100%",
        label: 'Correct app category after redesign, zero said "dating"',
      },
      { value: "100%", label: "More confident in meeting someone" },
      {
        value: "75%",
        label: "Cheetah & Panda Mode clarity — better understanding",
      },
      { value: "100%", label: "Successfully located events" },
    ],
    decisions: [
      {
        title: "01 — Onboarding",
        body: "Replace romantic signals with social proof on the very first screen.",
      },
      {
        title: "02 — Map & Events",
        body: "Turn a passive map into an active discovery engine with live hotspots and ambient vertical-scroll discovery.",
      },
      {
        title: "03 — Profile Card",
        body: 'Stop showing people. Show people in context with bio, hobbies, upcoming events, and "Connect".',
      },
    ],
    architecture: [
      {
        name: "Onboarding",
        detail:
          "Warm neutrals, group imagery, event count for social proof, and a community CTA.",
      },
      {
        name: "Map & Events",
        detail:
          "Vertical-scroll discovery view with live hotspots, Hotspots/Events toggle, and filters.",
      },
      {
        name: "Profile Card",
        detail:
          "Bio, hobbies, and upcoming events lead the card before identity.",
      },
      {
        name: "Cheetah & Panda Mode",
        detail: "One-tap toggle above the map switches your social mode.",
      },
    ],
    learnings: [
      "Client & Team workflow — collaborating directly with Dan as client and Amir as mentor to translate research findings into actionable decisions.",
      "Research in 2 phases — running usability interviews, synthesising into an affinity map, and validating the fix through A/B testing.",
      "Presenting with confidence — pitching our work with guidance from UXID Soc exec and teammates.",
    ],
    links: {
      figma:
        "https://www.figma.com/proto/r7N1GWdge9iNlE0EfEnAKd/UX-Project---RealSwipe?node-id=590-11547&p=f&viewport=410%2C481%2C0.02&t=fAfPQ7x2rx6Ty7lL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=590%3A11547&show-proto-sidebar=1&page-id=0%3A1",
      live: "https://realswipe.com.au",
    },
  },
]

export const PLANET_PROJECTS = ["realswipe", "flavouriq", "mindsprout"] as const

export type LabItem = {
  id: string
  kind: "Characters" | "Hackathons" | "Motion" | "Prototypes"
  title: string
  year: string
  body: string
  art: "chan" | "sprout" | "mascots" | "image" | "orbit" | "flask"
  image?: string
}

export const LABS: LabItem[] = [
  {
    id: "chan",
    kind: "Characters",
    title: "CHAN-1.0",
    year: "2026",
    body: "A calculator with feelings. First edition of my companion character.",
    art: "chan",
  },
  {
    id: "sprout",
    kind: "Characters",
    title: "Sprout",
    year: "2026",
    body: "The idle seedling who lives on Mindsprout and grows with every entry.",
    art: "sprout",
  },
]

export const ABOUT = {
  name: "Changrila Souksamlane",
  role: "Design Engineer",
  portrait: A("1c797.png"),
  intro:
    "I design and build interfaces that feel like small worlds. I sit between Figma and code, sketching ideas, prototyping interactions and shipping them in SwiftUI and ClaudeCode.",
  now: "Currently: Apple Foundation Program alumni, exploring playful, character-driven products.",
  skills: {
    Design: [
      "UX Research",
      "UI Design",
      "Interaction Design",
      "Prototyping",
      "Illustration",
    ],
    Engineering: ["SwiftUI", "Java"],
    Tools: ["Figma", "ClaudeCode", "Rive"],
  },
  journey: [
    {
      year: "2026",
      title: "Apple Foundation Program",
      body: "Design onboarding screens and Sprout character. Built Mindsprout in iOS",
    },
    {
      year: "2026",
      title: "FlavourIQ(ProjectUX)",
      body: "Redesigned tea and coffee result pages (wheel and flavour sections) through user testing",
    },
    {
      year: "2026",
      title: "RealSwipe (ProjectUX)",
      body: "Redesigned map screen and conducted user research ",
    },
  ],
  contact: [
    { label: "Email", href: "mailto:changrila.souksamlane@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/changrila-souksamlane/details/projects/",
    },
    { label: "GitHub", href: "https://github.com/AlaeaRosen" },
    { label: "Resume", href: A("resume.pdf") },
  ],
}

export type ChangeKind = "Added" | "Fixed" | "Changed"

export interface ChangeEntry {
  date: string
  kind: ChangeKind
  summary: string
}

/** Site changelog, newest first. One line per change. */
export const CHANGELOG: ChangeEntry[] = [
  {
    date: "2025-10-23",
    kind: "Added",
    summary:
      "Hovering a train wagon opens it to show the Projects gallery, Labs workshop or About Me cabin.",
  },
  {
    date: "2025-10-23",
    kind: "Changed",
    summary:
      "Wagons rest with their lights off; only the carriage you're in stays lit.",
  },
  {
    date: "2025-10-23",
    kind: "Added",
    summary:
      "Faint diamond lattice on the window glass for a digital-window feel.",
  },
  {
    date: "2025-10-22",
    kind: "Fixed",
    summary:
      "Project cards keep clear of the frame trim and grow to fit long skill lists.",
  },
  {
    date: "2025-10-22",
    kind: "Fixed",
    summary: "Project covers now stay inside the card's angled gold frame.",
  },
  {
    date: "2025-10-22",
    kind: "Changed",
    summary: "Project cards rebuilt to match the Card Project design.",
  },
  {
    date: "2025-10-22",
    kind: "Fixed",
    summary: "Scrollbar no longer runs into the frame's gold trim.",
  },
  {
    date: "2025-10-22",
    kind: "Changed",
    summary: "Smaller filter tabs on Projects and Labs.",
  },
  {
    date: "2025-10-22",
    kind: "Changed",
    summary: "Changelog is now a compact popover by the CHAN-1.0 badge.",
  },
  {
    date: "2025-10-22",
    kind: "Changed",
    summary: "Projects show three per row with a dotted orb scrollbar.",
  },
  {
    date: "2025-10-22",
    kind: "Fixed",
    summary:
      "Project cards: rule on the image, left-aligned skills, larger type.",
  },
  {
    date: "2025-10-22",
    kind: "Added",
    summary: "Changelog panel behind the CHAN-1.0 badge.",
  },
  {
    date: "2025-10-22",
    kind: "Changed",
    summary: "Hover a planet to target it; the reticle now moves faster.",
  },
  {
    date: "2025-10-22",
    kind: "Changed",
    summary: "RealSwipe planet redrawn with a banded gas-giant surface.",
  },
  {
    date: "2025-10-21",
    kind: "Fixed",
    summary: "Formatter no longer breaks inline type declarations.",
  },
  {
    date: "2025-10-21",
    kind: "Added",
    summary: "Projects, case-study, Labs and About panels.",
  },
  {
    date: "2025-10-21",
    kind: "Added",
    summary: "Train navigation, starfield and celestial home scene.",
  },
]
