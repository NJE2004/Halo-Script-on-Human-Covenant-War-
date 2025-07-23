// ===== output.js =====
const modifier = (text) => {
  state.plotEssentials = state.plotEssentials || {};

  const turns = state.plotEssentials.turns || 0;
  state.plotEssentials.turns = turns + 1;

  const hoursPassed = (state.plotEssentials.turns || 0) * 0.5;
  state.plotEssentials.hoursPassed = hoursPassed;

  return text;
};

modifier(output);
