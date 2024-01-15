<template>
     <div class="page-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Our Services</h1>
            <p><a href="index.html">Home</a> / <span>Our Services</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- Heading Ends Here -->


    <!-- Services Starts Here -->
    <div class="services-section services-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <span>Hosting Services</span>
              <h2>Best Services We Provide</h2>
              <p>Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis. Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat.</p>
            </div>
          </div>
            <Service/>
        </div>
      </div>
    </div>
    <!-- Services Ends Here -->



</template>
<script>
import Service from "@/components/Service.vue";
import servicesFile from "../assets/services.json";

export default {
  components: {
    Service, 
  },
};
</script>