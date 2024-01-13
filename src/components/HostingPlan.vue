<template>
  <!-- Pricing Starts Here -->
  <div v-for="(item, index) in hosting" :key="index" class="col-md-4 col-sm-6 col-xs-12">
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
      <a :href="item.cta.link" class="main-button">{{ item.cta.text }}</a>
    </div>
  </div>
  <!-- Pricing Ends Here -->
</template>

<script>
import hostingPlansFile from "../assets/hostingPlans.json";

export default {
  data() {
    return {
      hosting: hostingPlansFile.pricingItems,
    };
  },
};
</script>
