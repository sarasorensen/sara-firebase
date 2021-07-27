<template>
  <div>
    <base-card v-if="!isLoggedIn">
      <h2>Dashboard</h2>
      <p>
        This page is only visible to users that are currently logged in, pease
        register or log in.
      </p>
      <router-link to="/auth">Log in here</router-link>
    </base-card>
    <section v-else>
      <base-dialog
        :show="!!error"
        title="An error occurred!"
        @close="handleError"
      >
        <p>{{ error }}</p>
      </base-dialog>
      <section>
        <base-spinner v-if="isLoading"></base-spinner>

        <div
          class="dash-wrap"
          v-else-if="hasRequests && !isLoading && isLoggedIn"
        >
          <div class="column" v-if="hasUserDash">
            <h2>Dashboard</h2>
            <p>You are logged in as:</p>
          </div>

          <div class="column-2">
            <header>
              <h3>Requests Received</h3>
            </header>
            <request-item
              v-for="req in receivedRequests"
              :key="req.id"
              :email="req.userEmail"
              :message="req.message"
            ></request-item>
          </div>
        </div>
        <h3 v-else>You haven't received any requests yet!</h3>
      </section>
    </section>
  </div>
</template>

<script>
import RequestItem from "../../requests/RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    hasUserDash() {
      console.log(this.$store.getters.userDash);
      return this.$store.getters.userDash;
    },
    isLoggedIn() {
      console.log(this.$store.getters.token);
      return this.$store.getters.isAuthenticated;
    },
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.error = error.message || "Something failed!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.dash-wrap {
  min-width: 100%;
  display: flex;
  flex-direction: row;
}
.column {
  width: 45%;
  background-color: #fbfbfb;
}
.column-2 {
  width: 55%;
  background-color: #fbfbfb;
  justify-content: center;
  margin: 0;
}
@media only screen and (min-width: 700px) and (max-width: 950px) {
  .dash-wrap {
    width: 100%;
  }
}

@media only screen and (min-width: 300px) and (max-width: 700px) {
  .dash-wrap {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
