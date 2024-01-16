import { defineStore } from 'pinia';

export const usePricingStore = defineStore('pricing', {
  // Stav store
  state: () => ({
    pricingItems: [
      {
        name: "Advanced Cloud",
        price: {
          amount: 72.25,
          interval: "monthly",
        },
        description: "Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.",
        features: [
          "4 TB Cloud Space",
          "20 TB Data Transfer",
          "Fully Managed Panel",
          "15-minute Quick Support",
          "Top Notch Web Apps",
          "Advanced Scalable",
        ],
        cta: {
          text: "Take it now",
          link: "#",
        },
        count: 5,
      },    {
        name: "Advanced Cloud",
        price: {
          amount: 72.25,
          interval: "monthly",
        },
        description: "Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.",
        features: [
          "4 TB Cloud Space",
          "20 TB Data Transfer",
          "Fully Managed Panel",
          "15-minute Quick Support",
          "Top Notch Web Apps",
          "Advanced Scalable",
        ],
        cta: {
          text: "Take it now",
          link: "#",
        },
        count: 10,
      },
      // ... other pricing items
    ],
  }),

  // Getters
  getters: {
    // Getter to get the count for a specific pricing item
    getItems: (state) => () => state.pricingItems,
    getCountById: (state) => (id) => state.pricingItems[id].count,

    // Getter to get the double count for a specific pricing item
    doubleCountById: (state, getters) => (id) => getters.getCountById(id) * 2,
  },

  // Actions
  actions: {
    // Action to increment the count for a specific pricing item
    incrementCountById(id) {
      this.pricingItems[id].count += 1;
    },
  },
});
