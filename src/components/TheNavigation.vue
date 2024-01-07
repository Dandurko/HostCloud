<template>
   
    <header>
      <nav id="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About us</RouterLink>
        <RouterLink to="/contact">Contact us</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink v-for="destination in destinations" :to="`/destination/${destination.slug}`"
          >{{ destination.slug }}</RouterLink
        >
      </nav>
    </header>
  
    <div class="container"><RouterView /></div>
  </template>
  <script>
  import { RouterLink, RouterView } from "vue-router";
  export default {
    data() {
      return {
        destinations: "dataDestination",
      };
    },
  };
  </script>
  