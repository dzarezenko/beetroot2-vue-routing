<template>
  <div class="card">
    <div class="card-header">
      User
    </div>
    <div class="card-body">
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>
