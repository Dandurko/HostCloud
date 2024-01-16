import { defineStore } from 'pinia';

interface Price {
  amount: number;
  interval: string;
}

interface PricingItem {
  name: string;
  price: Price;
  description: string;
  features: string[];
  cta: {
    text: string;
    link: string;
  };
  count: number;
}

export const usePricingStore = defineStore('pricing', {
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
      },
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
        count: 10,
      },
    ] as PricingItem[],
  }),

  // Getters
  getters: {
    getItems: (state) => () => state.pricingItems,
    getCountById: (state) => (id: number) => state.pricingItems[id].count,

    doubleCountById: (state, getters) => (id: number) => getters.getCountById(id) * 2,
  },


  actions: {
    incrementCountById(id: number) {
      this.pricingItems[id].count += 1;
    },
    decrementCountById(id: number) {
      if (this.pricingItems[id].count > 0) {
        this.pricingItems[id].count -= 1;
      }
    },
  },
});
