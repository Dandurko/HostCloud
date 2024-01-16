<template>
  <div v-if="show" class="message">
    {{ message }}
    <div class="close" @click="closeMessage">Close</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    closeMessage() {
      this.show = false;
      this.$emit('closeMessage'); // Emitovat closeMessage
    },
  },
};
</script>


  <style scoped>
.message {
  position:absolute;
  bottom:100px;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #d6d6d6;
  background-color: #d9edf7;
  border-radius: 4px;
  height:100pxpx;
  text-align: center;
  width: 33.3%;
}
.close {

  color:white;
  font-size: 20px;
  background-color: green; /* Change the color as needed */
  cursor: pointer;
}

/* Add more styles for other alert types as needed */
</style>
  