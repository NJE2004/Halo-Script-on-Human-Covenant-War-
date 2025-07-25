// ===== library.js =====

if (!state.library) state.library = {};

state.library.time = {
  turnToHourRatio: 0.5,
  turnsPerDay: 48,
  description: "Each turn represents 30 minutes of in-universe time."
};

state.library.warProgression = {
  startYear: 2525,
  endYear: 2552,
  escalationEvents: {
    2525: "First Contact at Harvest.",
    2526: "UNSC mobilization and Spartan deployment.",
    2530: "Covenant begins glassing outer colonies.",
    2547: "Inner colonies threatened.",
    2552: "Reach falls."
  }
};

state.library.planets = {
  Harvest: { control: "Covenant", threatLevel: 10 },
  Reach: { control: "UNSC", threatLevel: 8 },
  Earth: { control: "UNSC", threatLevel: 2 },
  Arcadia: { control: "Contested", threatLevel: 5 },
  SigmaOctanusIV: { control: "UNSC", threatLevel: 6 }
};

state.library.enlistment = {
  canEnlist: true,
  requiredFaction: "UNSC"
};

// Note: functions like deploymentTrigger or timeSkip should be implemented in input/output.js
