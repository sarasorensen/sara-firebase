<template>
  <base-wrap>
    <div class="form-wrap">
      <form class="form" @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Name</label>
          <input type="name" id="name" v-model.trim="name" />
        </div>
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="message">Message</label>
          <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">
          Please enter a valid email and non-empty message.
        </p>
        <div class="actions">
          <base-button>Send Message</base-button>
        </div>
      </form>
    </div>
  </base-wrap>
</template>

<script>
export default {
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
