export default {
  // Sort mainDeck and sideboard
  // First, by type.includes("Land") and those without that type
  // Second, by manaValue
  // Third, by copies
  mainDeck: [
    {
      copies: 4,
      atomicCard: {
        _id: "b",
        name: "Copperline Gorge",
        type: "Land",
        manaValue: 0,
      },
    },
    {
      copies: 2,
      atomicCard: {
        _id: "a",
        name: "Sokenzan, Crucible of Defiance",
        type: "Legendary Land",
        manaValue: 0,
      },
    },
    {
      copies: 4,
      atomicCard: {
        _id: "e",
        name: "Slickshot Show-Off",
        type: "Creature",
        manaValue: 2,
        manaCost: "1R",
      },
    },
    {
      copies: 1,
      atomicCard: {
        _id: "c",
        name: "Khenra Spellspear",
        type: "Creature",
        manaValue: 2,
        manaCost: "1R",
      },
    },
    {
      copies: 2,
      atomicCard: {
        _id: "d",
        name: "Urabrask's Forge",
        type: "Artifact",
        manaValue: 3,
        manaCost: "2R",
      },
    },
  ],
  sideboard: [
    {
      copies: 4,
      atomicCard: {
        _id: "f",
        name: "End the Festivities",
        type: "Sorcery",
        manaValue: 1,
        manaCost: "R",
      },
    },
    {
      copies: 2,
      atomicCard: {
        _id: "d",
        name: "Urabrask's Forge",
        type: "Artifact",
        manaValue: 3,
        manaCost: "2R",
      },
    },
  ],
};
