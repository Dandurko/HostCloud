<template>
    <div style ="display:flex" class="container">
    <div v-for="(item, index) in counti" :key="index" class="col-md-4 col-sm-6 col-xs-12">
      <div class="pricing-item">
        <h4>{{ item.name }}</h4>
        <div class="price">
          <h6>{{ item.price.amount }}</h6>
          <span>{{ item.price.interval }}</span>
        </div>
        <p>{{ item.description }}</p>
        <div class="dev"></div>
        <ul>
          <li v-for="(feature, i) in item.features" :key="i">
            <i class="fa fa-check"></i>{{ feature }}
          </li>
        </ul>
        <br>
        {{ item.count }}
      </div>
    </div>
    <div style="margin-left: 50px"></div>
    </div>
  </template>

<script lang="ts">
import { usePricingStore } from "@/stores/offers";

export default {
  data() {
    const counterStore = usePricingStore();
    return {
      counterStore,
    };
  },

  computed: {
    counti() {
      return this.counterStore.pricingItems;
    },
  },
}
</script>