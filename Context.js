// ===== context.js =====
const context = async () => {
  const profile = state.plotEssentials?.profile || {};
  const warYear = state.plotEssentials?.warYear || 2525;
  const turns = state.plotEssentials?.turns || 0;
  const currentDate = state.plotEssentials?.warDate || "January 1, 2525";
  const faction = profile.faction || "Civilian";
  const rank = profile.rank || "Unranked";
  const career = profile.career || "Unemployed";
  const colony = profile.colony || "Unknown";
  const reputation = profile.reputation || {};
  const deployed = profile.deployed || false;
  const inventory = (state.inventory || []).join(", ") || "None";

  return `
The year is ${warYear}. The Human-Covenant War rages across the galaxy.
Date: ${currentDate}

You are currently known as ${profile.name || "an unnamed individual"},
a ${career} from ${colony}, affiliated with ${faction}.
Your current rank is ${rank}. Deployment status: ${deployed ? "Active" : "Not deployed"}.

Inventory: ${inventory}
Reputation: ${Object.entries(reputation).map(([key, val]) => `${key}: ${val}`).join(", ") || "Unknown"}

You are ${(turns * 0.5).toFixed(1)} hours into the war (1 turn = 30 minutes).
The situation dynamically changes as the war escalates each year.
Make decisions wisely; every action affects the galaxy.
  `.trim();
};

context();
