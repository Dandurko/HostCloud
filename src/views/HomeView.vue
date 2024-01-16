<template>
   

  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="header-text caption">
            <h2>Search your domain</h2>
            <div id="search-section">

              <div>
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
    >
                <div class="searchText">
                  <input
                    v-model="domain"
                    type="text"
                    name="q"
                    class="searchText"
                    placeholder="Enter your domain here..."
                    autocomplete="on"
                  />
                  <ul>
                    <li>
                      <label
                        ><input type="checkbox" name="ext_com" value="1" /><span
                          >.com <em>($10/yr)</em></span
                        ></label
                      >
                    </li>
                    <li>
                      <label
                        ><input type="checkbox" name="ext_net" value="1" /><span
                          >.net <em>($12/yr)</em></span
                        ></label
                      >
                    </li>
                    <li>
                      <label
                        ><input type="checkbox" name="ext_org" value="1" /><span
                          >.org <em>($8/yr)</em></span
                        ></label
                      >
                    </li>
                    <li>
                      <label
                        ><input type="checkbox" name="ext_in" value="1" /><span
                          >.in <em>($6/yr)</em></span
                        ></label
                      >
                    </li>
                  </ul>
                </div>

      <input
        type="submit"
        name="results"
        class="main-button"
        value="Search Now"
      />
    </form>
  </div>



              <div class="advSearch_chkbox"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Banner Ends Here -->

  <!-- Trusted Starts Here -->
  <div class="trusted-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="trusted-section-heading">
            <h4>TRUSTED BY 1,250+ HAPPY CUSTOMERS WORLDWIDE</h4>
          </div>
        </div>
        <div class="col-md-12">
          <div class="owl-trusted owl-carousel">
            <div class="trusted-item">
              <img src="src/assets/images/trusted-01.png" alt="trusted 1" />
            </div>
            <div class="trusted-item">
              <img src="src/assets/images/trusted-01.png" alt="trusted 2" />
            </div>
            <div class="trusted-item">
              <img src="src/assets/images/trusted-01.png" alt="trusted 3" />
            </div>
            <div class="trusted-item">
              <img src="src/assets/images/trusted-01.png" alt="trusted 4" />
            </div>
            <div class="trusted-item">
              <img src="src/assets/images/trusted-01.png" alt="trusted 5" />
            </div>
            <div class="trusted-item">
              <img src="src/assets/images/trusted-01.png" alt="trusted 6" />
            </div>
            <div class="trusted-item">
              <img src="src/assets/images/trusted-01.png" alt="trusted 7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Trusted Ends Here -->

  <div class="pricing-section">
    <div class="background-image-pricing"></div>
    <div class="container">
      <div class="row">
        <HostingPlan />
      </div>
    </div>
  </div>
  <!-- Features Starts Here -->
  <div class="features-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <span>Best Quality for you</span>
            <h2>Cloud Features</h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="feature-item">
            <div class="icon">
              <img src="src/assets/images/feature-01.png" alt="" />
            </div>
            <h4>Load Balanced</h4>
            <p>
              Nulla nisl ex, vehicula in urna nec, commodo consectetur augue. Vivamus nec
              metus mauris. Praesent lacinia tempus urna.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="feature-item">
            <div class="icon">
              <img src="src/assets/images/feature-01.png" alt="" />
            </div>
            <h4>99.9% Uptime Guaranteed</h4>
            <p>
              Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas
              en pin sustainable carry scenester.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="feature-item">
            <div class="icon">
              <img src="src/assets/images/feature-01.png" alt="" />
            </div>
            <h4>Top Reliability</h4>
            <p>
              Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas
              en pin sustainable carry scenester.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="feature-item">
            <div class="icon">
              <img src="src/assets/images/feature-01.png" alt="" />
            </div>
            <h4>High Security</h4>
            <p>
              Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas
              en pin sustainable carry scenester.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="feature-item">
            <div class="icon">
              <img src="src/assets/images/feature-01.png" alt="" />
            </div>
            <h4>Quality Hardwares</h4>
            <p>
              Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas
              en pin sustainable carry scenester.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="feature-item">
            <div class="icon">
              <img src="src/assets/images/feature-01.png" alt="" />
            </div>
            <h4>Network Solutions</h4>
            <p>
              Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas
              en pin sustainable carry scenester.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Features Ends Here -->
</template>
<script>
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
      domain: "", 
    };
  },
  methods: {
    submitForm() {
      if (this.domain.trim() === "") {
        this.showMessage = true;
        this.message = "Please enter a domain.";
      } else {
        this.showMessage = true;
        this.message = "Nice";
      }
    },
    closeMessage() {
      this.showMessage = false; // Aktualizovat stav showMessage na false
    },
  },
};
</script>