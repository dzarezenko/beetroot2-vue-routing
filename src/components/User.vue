<template>
  <div class="card">
    <div class="card-header">
      User
    </div>
    <div class="card-body">
      <button type="button" class="btn btn-danger" @click="goHome">Back Home</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        //path: "/"
        name: "home-page"
      });
    },
  },
}
</script>
