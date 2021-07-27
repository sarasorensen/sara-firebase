<template>
  <base-wrap>
    <div class="form-wrap">
      <div class="column">
        <h2>Contact Us</h2>
        <div class="column__text">
          <p>
            Do you have any questions? Please don't hesitate to contact us,
            we're happy to help. You can email us directly at
            <a class="column__a" href="sarasorensen97@hotmail.com"
              >companyEmail@gmail.com</a
            >, or use the form.
          </p>
          <p>
            If you have any questions about your order, don't forget to include
            your order number.
          </p>
          <p>
            <span class="light">
              Contact hours are between 9AM - 5PM Monday to Friday. Respond time
              may vary.
            </span>
          </p>
        </div>
      </div>
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
          Please check your input.
        </p>
        <p class="errors" v-if="!formIsValid">
          There has to be a name, a valid email and non-empty message.
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
      this.$router.replace("/inquiryMessage");
    },
  },
};
</script>

<style scoped>
.form-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2.5em;
  margin-bottom: 3.5em;
}
.column {
  width: 50%;
  padding: 1em;
  background-color: #fbfbfb;
}
.column__text {
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
form {
  width: 50%;
  margin: 0 auto;
  background-color: #fbfbfb;
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
