<template>
  <div class="card">
    <div class="card-header">
      User
    </div>
    <div class="card-body">
      <p>
        User ID: {{ userId }}
      </p>
      <button type="button" class="btn btn-danger" @click="goHome">Back Home</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
    }
  },
  methods: {
    goHome() {
      this.$router.push({
        //path: "/"
        name: "home-page"
      });
    },
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  }
}
</script>
