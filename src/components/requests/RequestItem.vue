<template>
  <div class="request-item">
    <ul>
      <li>
        <p>{{ name }}</p>
      </li>
      <li>
        <a :href="emailLink">{{ email }}</a>
      </li>
      <li>
        <p>{{ message }}</p>
      </li>
    </ul>
    <a :href="emailLink" class="reply-link">Reply</a>
    <base-button>Delete</base-button>
  </div>
</template>

<script>
export default {
  props: ["name", "email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
  methods: {
    replyRequest() {
      return "mailto:" + this.email;
    },
  },
};
</script>

<style scoped>
.request-item {
  width: 90%;
  background-color: #f2f4f1;
  margin: 0 auto;
  margin-right: 5%;
  margin-bottom: 1em;
  padding: 2.5em;
}
ul {
  list-style: none;
  margin: 0;
  padding: 1em;
}
li {
  margin: 0;
  padding: 0;
}
a {
  color: #6c736b;
  text-decoration: none;
  font-weight: bold;
}
a:hover,
a:active {
  color: #6c736b;
}
.reply-link {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: transparent;
  border: 1px solid #6c736b;
  color: #6c736b;
  cursor: pointer;
  margin-right: 0.5rem;
  display: inline-block;
  transition: all 0.5s ease;
}

.reply-link:hover,
.reply-link:active {
  background-color: #6c736b;
  color: #fbfbfb;
  -webkit-transition: 0.5s linear;
  -ms-transition: 0.5s linear;
  transition: 0.5s linear;
}
p {
  margin: 0.5rem 0 0 0;
}
</style>
