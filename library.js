// ===== library.js =====
const warLibrary = {
  time: {
    turnToHourRatio: 0.5,
    turnsPerDay: 48,
    description: "Each turn represents 30 minutes of in-universe time."
  },
  warProgression: {
    startYear: 2525,
    endYear: 2552,
    escalationEvents: {
      2525: "First Contact at Harvest.",
      2526: "UNSC mobilization and Spartan deployment.",
      2530: "Covenant begins glassing outer colonies.",
      2547: "Inner colonies threatened.",
      2552: "Reach falls."
    }
  },
  planets: {
    Harvest: { control: "Covenant", threatLevel: 10 },
    Reach: { control: "UNSC", threatLevel: 8 },
    Earth: { control: "UNSC", threatLevel: 2 },
    Arcadia: { control: "Contested", threatLevel: 5 },
    SigmaOctanusIV: { control: "UNSC", threatLevel: 6 }
  },
  enlistment: {
    canEnlist: true,
    requiredFaction: "UNSC",
    deploymentTrigger: (year, threatLevel) => year > 2525 && threatLevel >= 6
  },
  playerActions: {
    enlist: () => {
      const profile = state.plotEssentials.profile || {};
      if (profile.faction === "UNSC") {
        profile.deployed = true;
        state.plotEssentials.profile = profile;
      }
    },
    timeSkip: (hours) => {
      const turnsToAdd = Math.floor(hours / 0.5);
      state.plotEssentials.turns = (state.plotEssentials.turns || 0) + turnsToAdd;
    }
  }
};
