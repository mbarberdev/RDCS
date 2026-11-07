// Public copy for the RDCS landing page, kept apart from layout so wording can
// be reviewed on its own.
//
// Content rules for editors:
// - The project's stage is explained once, in `progress`. Elsewhere, write
//   plainly, but don't state an untested capability as demonstrated fact.
// - Leave out numeric requirements (net size, drone speed, ranges) until the
//   team confirms them; the source documents disagree on several.
// - No contact details, Drive links, or budgets. Photos only in progress
//   updates, from team tests.

export const intro = {
  acronym: "RDCS",
  name: "Rapid Drone Capture System",
  summary:
    "RDCS is a portable, ground-based system that tracks a small drone with a camera and computer vision, turns a launcher to face it, and deploys a tethered net to catch it.",
  affiliation:
    "We are six engineering students at Stevens Institute of Technology building a prototype as our 2026–2027 senior design project, sponsored by General Dynamics Mission Systems.",
  problem:
    "Small drones are inexpensive, agile, and fly low. They can appear with little warning and change direction quickly, which makes them hard to follow by eye, and capture methods that rely on an operator’s reaction time and aim leave little room for error. We want sensors to do the tracking and pointing instead.",
};

export const howItWorks = {
  id: "how-it-works",
  title: "How it works",
  steps: [
    {
      title: "Find the drone",
      body: "An optical camera feeds an onboard computer, an NVIDIA Jetson Orin NX in our current architecture, which locates the drone and follows its position. We’ve begun testing a pretrained YOLO vision model for detection reliability and processing delay (see Progress), and we’re still choosing a second sensor.",
    },
    {
      title: "Turn toward it",
      body: "Battery-powered stepper motors drive a two-axis pan-and-tilt assembly on a stationary, tripod-style base. Turning from a fixed position lets the launcher face a target from different directions, where a barrier would have to be moved across the area to cover the same ground. The structure is designed in steel, with a prototype in carbon-fiber-reinforced nylon.",
    },
    {
      title: "Deploy the net",
      body: "A pneumatic launcher sends a flexible net toward the drone, and we want it to deploy the same way every time. The net stays tethered so that it remains connected to the system along with whatever it catches. Multiple barrels in a modular launcher are meant to allow a second attempt after a miss.",
    },
    {
      title: "Recover and reset",
      body: "We recover the net by hand and reset the system for the next run.",
    },
  ],
  safetyTitle: "Running it safely",
  safety:
    "Safety comes before performance. Operators will stay outside the test area and use a remote interface, proposed over Wi-Fi and WebSockets, that shows readiness, operating status, and faults. The design includes a physical interlock backed by a safety relay, and testing is limited to a designated lightweight test drone in a defined area.",
  stretch:
    "If time allows, we’d also like RDCS to run without step-by-step operator input and to tell drones from birds. Both are stretch goals.",
  diagram: {
    description:
      "Side view of the concept: a launcher with several barrels on a pan-and-tilt assembly, mounted on a tripod-style base, sending a tethered net toward a test drone.",
    caption: "Concept sketch. Not to scale, and not final hardware.",
  },
};

// Only documented disciplines, experience, and project contributions. No
// photos, titles, contact details, or social links.
export const team = {
  id: "team",
  title: "Team",
  members: [
    {
      name: "Max Barber",
      discipline: "Software Engineering",
      bio: "Software architecture, detection research, system flow, and this website. Background in AI/ML systems, IT, and full-stack development.",
    },
    {
      name: "Joseph “Joey” Morsillo",
      discipline: "Electrical Engineering",
      bio: "Electrical architecture and power analysis. Background in embedded and control systems, with an internship at Thorlabs.",
    },
    {
      name: "Noah Golan",
      discipline: "Mechanical Engineering",
      bio: "Motor calculations, motor mounts, and the pan-and-tilt design. Design and analysis experience as a General Dynamics Mission Systems intern.",
    },
    {
      name: "Rene Bieluch",
      discipline: "Mechanical Engineering",
      bio: "The base, support structure, and preliminary structural analysis. Design and finite element analysis experience in R&D at Getinge.",
    },
    {
      name: "Ansh Razdan",
      discipline: "Mechanical Engineering",
      bio: "Launcher CAD and mechanical analysis. Simulation and navigation experience at Kearfott.",
    },
    {
      name: "Jeylan Jubran",
      discipline: "Industrial & Systems Engineering",
      bio: "Reports, presentations, and project communication. Background in maintenance and continuous improvement consulting.",
    },
  ],
  advisor: "Our faculty advisor is Professor Kishore Pochiraju.",
};

export const progress = {
  id: "progress",
  title: "Progress",
  paragraphs: [
    "We’ve finished our research and selected the concept described above, and we’re now designing the subsystems. We presented our mechanical design choices in October 2026 and are working through motor sizing and mounts.",
    "Next come simulation and more isolated subsystem tests, then integration into one prototype and testing against the test drone. Nothing has been tested as an integrated system yet, so this page describes what we’re designing rather than demonstrated performance.",
  ],
  update: {
    date: "November 5, 2026",
    title: "First vision test",
    body: [
      "We took the camera to the drone lab for an initial YOLO detection test, using only the visual camera. It went well: the model picked up the drone in under a second and tracked it with moderate confidence.",
      "This was a pretrained YOLO11 drone-detection model, run on a laptop with little training on our part. Since a lightly trained model already performed this well, we expect a better-trained model running on the Jetson to do considerably better, well within our 5-second window for confirming a detection.",
    ],
    images: [
      {
        src: "/progress/yolo-flight.jpg",
        width: 1300,
        height: 730,
        alt: "Camera view of the netted drone lab with a blue box labeled drone 0.61 around a small drone in flight near the floor, and two lower-confidence boxes elsewhere in the frame.",
        caption: "Tracking the drone in flight. The two lower-scoring boxes are false detections.",
      },
      {
        src: "/progress/yolo-handheld.jpg",
        width: 1200,
        height: 900,
        alt: "A team member holds a drone up in front of a whiteboard while the model draws a box around it labeled drone 0.66.",
        caption: "Detecting a hand-held drone.",
      },
    ],
  },
  goal: {
    date: "May 2027",
    label: "Our goal is to demonstrate the integrated prototype at the Stevens Innovation Expo.",
  },
};

export const navItems = [howItWorks, team, progress];

export const footer = {
  identification: "Rapid Drone Capture System, a Stevens Institute of Technology senior design project.",
  disclaimer: "This is not an official General Dynamics Mission Systems website.",
};
