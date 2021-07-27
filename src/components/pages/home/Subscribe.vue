<template>
  <div class="subscripe-wrap">
    <div class="form-wrap">
      <h3 class="big">Subscribe,</h3>
      <h3>& never miss a launch!</h3>
      <form class="form" @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <p class="errors" v-if="!formIsValid">
          Please enter a valid email.
        </p>
        <div class="actions">
          <base-button>Subscribe</base-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === "" ||
        this.name === ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch("requests/contactUs", {
        email: this.email,
      });
      this.$router.replace("/inquiryMessage");
    },
  },
};
</script>

<style scoped>
.subscripe-wrap {
  background-color: #dfe4de;
  padding-top: 3.5em;
  padding-bottom: 6.5em;
}
form {
  width: 50%;
  margin: 0 auto;
  background-color: #fbfbfb;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: left;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  margin-bottom: 0.5rem;
  display: block;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
.errors {
  color: red;
}
.actions {
  text-align: center;
}
</style>
