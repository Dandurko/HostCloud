<template>
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
      <button type="button" class="btn-main" @click.prevent="incrementCount(index)">Increment Count</button>
      <br> <br>
      <button type="button"  class="btn-secondary" @click.prevent="decrementCount(index)">Decrement Count</button>
      <br> <br>
      {{ item.count }}
    </div>
  </div>
  <div style="margin-left: 50px"></div>
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
  props: {
    msg: String,
  },
  computed: {
    counti() {
      return this.counterStore.pricingItems;
    },
  },
  methods: {
    incrementCount(index) {
      this.counterStore.incrementCountById(index);
    },
    decrementCount(index) {
      this.counterStore.decrementCountById(index);
    },
  },
};
</script>
