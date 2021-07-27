<template>
  <div class="dashboard-wrapper">
    <base-card v-if="!isLoggedIn">
      <h2>Dashboard</h2>
      <p>
        This page is only visible to users that are currently logged in, pease
        register or log in.
      </p>
      <router-link to="/auth">Log in here</router-link>
    </base-card>
    <section v-else>
      <div class="dashboard-wrapper">
        <base-dialog
          :show="!!error"
          title="An error occurred!"
          @close="handleError"
        >
          <p>{{ error }}</p>
        </base-dialog>
        <base-spinner v-if="isLoading"></base-spinner>
        <section>
          <base-card>
            <header>
              <h2>Requests Received</h2>
            </header>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="hasRequests && !isLoading && isLoggedIn">
              <request-item
                v-for="req in receivedRequests"
                :key="req.id"
                :email="req.userEmail"
                :message="req.message"
              ></request-item>
            </ul>
            <h3 v-else>You haven't received any requests yet!</h3>
          </base-card>
        </section>
      </div>
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
    isLoggedIn() {
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
.dashboard-wrapper {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
