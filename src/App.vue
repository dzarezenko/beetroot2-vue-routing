<template>
  <div id="app">
    <header>
      <h1>Some header</h1>
    </header>

    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link tag="a" class="nav-link" :to="{ name: 'home-page' }" active-class="active" exact>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/user" active-class="active">User</router-link>
      </li>
    </ul>

    <section>
      <router-view></router-view>
    </section>
 
  </div>
</template>

<style>
h1 {
  margin-left: 50px;
}
ul {
  margin-left: 50px;
}
div.card {
  margin: 50px;
}
</style>
