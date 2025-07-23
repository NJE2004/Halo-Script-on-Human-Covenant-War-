// ===== input.js =====
const modifier = (text) => {
  const turns = state.plotEssentials?.turns || 0;
  state.plotEssentials = state.plotEssentials || {};
  state.plotEssentials.turns = turns + 1;

  return text;
};

modifier(input);
