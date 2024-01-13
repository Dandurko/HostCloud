<template>
  <div class="col-md-4 col-sm-6 col-xs-12" v-for="service in services">
    <div class="service-item">
      <i :class="service.icon"></i>
      <h4>{{service.name}}</h4>
      <p>
        {{service.text}}
      </p>
    </div>
  </div>
</template>

<script>
import servicesFile from "../assets/services.json";

export default {
  data() {
    return {
      services: servicesFile.services,
    };
  },
};
</script>
