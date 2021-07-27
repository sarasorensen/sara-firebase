<template>
  <div>
    <h1>Contact Us</h1>
    <p>
      Do you have any questions? Please don't hesitate to contact us, we are
      happy to help.
    </p>
    <contact-us></contact-us>
  </div>
</template>

<script>
import ContactUs from "./requests/ContactUs.vue";

export default {
  components: {
    ContactUs,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
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
        name: this.name,
        email: this.email,
        message: this.message,
      });
      this.$router.replace("/dashboard");
    },
  },
};
</script>

<style scoped>
form {
  width: 985px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  text-align: left;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
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
  font-weight: bold;
  color: red;
}
.actions {
  text-align: center;
}
</style>
