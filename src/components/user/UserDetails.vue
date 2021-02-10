<template>
  <div class="card">
    <div class="card-header">
      User Details
    </div>
    <div class="card-body">
      <p>
        User ID: {{ userId }}<br />
        Name: {{ $route.query.name }}
      </p>
      <button type="button" class="btn btn-warning" @click="editUser">Edit</button>
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
    editUser() {
      this.$router.push({
        path: `/user/${this.userId}/edit`
      });
    },
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  }
}
</script>
