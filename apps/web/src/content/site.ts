// Public copy for the RDCS landing page.
//
// Everything a visitor reads lives here so that wording can be reviewed and
// approved without touching layout code.

export type SectionLink = {
  id: string;
  label: string;
};

export const sections = {
  project: { id: "project", label: "Project" },
  system: { id: "system", label: "System" },
  // Not yet published: add to `navItems` and render in app/page.tsx once
  // approved content replaces the placeholders below.
  team: { id: "team", label: "Team" },
  milestones: { id: "milestones", label: "Milestones" },
} as const satisfies Record<string, SectionLink>;

export const navItems: SectionLink[] = [sections.project, sections.system];

export const identity = {
  acronym: "RDCS",
  name: "Rapid Drone Capture System",
  institution: "Stevens Institute of Technology",
  sponsor: "General Dynamics Mission Systems",
};

export const introduction = {
  sponsorship:
    "A Stevens Institute of Technology senior design project, sponsored by General Dynamics Mission Systems.",
  description:
    "RDCS is a system for detecting, tracking, and capturing a drone with a net. The prototype is under development for controlled testing.",
};

export const overview = {
  purpose:
    "The project's goal is to integrate sensing, perception, positioning, and net capture into one working prototype, and to evaluate how those parts perform together.",
  rows: [
    { label: "Institution", value: "Stevens Institute of Technology" },
    { label: "Sponsor", value: "General Dynamics Mission Systems" },
    { label: "Project type", value: "Undergraduate senior design" },
    { label: "Focus", value: "Prototype design, integration, and testing" },
  ],
};

export type SystemEntry = {
  name: string;
  function: string;
};

export const systemEntries: SystemEntry[] = [
  {
    name: "Sensing",
    function: "Observes the test area and supplies data to the rest of the system.",
  },
  {
    name: "Perception",
    function: "Detects a drone in that data and tracks its position over time.",
  },
  {
    name: "Positioning",
    function: "Aims the capture mechanism using the tracked position.",
  },
  {
    name: "Net Capture",
    function: "Deploys a net to capture the drone.",
  },
];

// --- Unpublished placeholder content -------------------------------------
// Used by the Team and Milestones components, which are not rendered yet.
// Replace with approved content; do not fill with guessed names or dates.

export type RosterEntry = {
  name: string;
  role: string;
  focus: string;
};

export const roster: RosterEntry[] = Array.from({ length: 4 }, () => ({
  name: "Name pending approval",
  role: "Role pending approval",
  focus: "Focus area pending approval",
}));

export type Milestone = {
  title: string;
  date: string;
  status: string;
};

export const milestones: Milestone[] = [
  "Project start",
  "Design review",
  "Prototype integration",
  "Controlled testing",
  "Final presentation",
].map((title) => ({
  title,
  date: "Date pending",
  status: "Not yet reported",
}));

export const footer = {
  identification:
    "RDCS is a senior design project at Stevens Institute of Technology, sponsored by General Dynamics Mission Systems.",
  disclaimer: "This is not an official General Dynamics Mission Systems website.",
};
