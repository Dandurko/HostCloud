<template>  <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Contact Us</h1>
          <p><a href="index.html">Home</a> / <span>Contact Us</span></p>
        </div>
      </div>
    </div>
  </div>
  <!-- Heading Ends Here -->


  <!-- Contact Us Starts Here -->
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="contact-form">
            <div v-if="showMessage">
      <Message :message="message" @closeMessage="closeMessage" />
    </div>

    <form
      id="suggestion_form"
      name="gs"
      method="get"
      action="#"
      @submit.prevent="submitForm"
    
    >
                <div class="name">
                  <input
                    v-model="name"
                    type="text"
                    name="name"
                    class="name"
                    placeholder="Enter your name"
                    autocomplete="on"
                  />
                </div>
                <div class="email">
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="email"
                    placeholder="Enter your email"
                    autocomplete="on"
                  />
                </div>



      <button
        type="submit"
        name="results"
        class="main-button"
        value="Search Now"
        id="form-submit"
      >Odosli</button>
    </form>
        </div>
        </div>
        <div class="col-md-6">
          <div class="right-content">
            <div class="section-heading">
              <span>Contact Us</span>
              <h2>Let's keep in touch</h2>
              <p>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <ul>
                  <li><i class="fa fa-phone"></i> 010-020-0560</li>
                  <li><i class="fa fa-support"></i> support@company.com</li>
                </ul>
              </div>
              <div class="col-md-6 col-sm-12">
                <ul>
                  <li><i class="fa fa-envelope"></i> contact@company.com</li>
                  <li><i class="fa fa-globe"></i> www.company.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Us Ends Here -->


  <!-- Map Starts Here -->
  <div id="map">
  
<!-- How to change your own map point
  1. Go to Google Maps
  2. Click on your location point
  3. Click "Share" and choose "Embed map" tab
  4. Copy only URL and paste it within the src="" field below
-->

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11196.961132529668!2d-43.38581128725845!3d-23.011063013218724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1568649412152!5m2!1sen!2sth" width="100%" height="520px" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
  <!-- Map Ends Here -->


</template><script>
import Message from "@/components/Message.vue";
import HostingPlan from "@/components/HostingPlan.vue";
export default {
  components: {
    Message,
    HostingPlan
  },
  data() {
    return {
      showMessage: false,
      message: "",
      name: "",
      email:"",
    };
  },
  methods: {
    submitForm() {
      if (this.name.trim() === "" || this.email.trim() === "") {
        this.showMessage = true;
        this.message = "Please complete the form.";
      } else {
        this.showMessage = true;
        this.message = "Thx User";
      }
    },
    closeMessage() {
      this.showMessage = false; // Aktualizovat stav showMessage na false
    },
  },
};
</script>