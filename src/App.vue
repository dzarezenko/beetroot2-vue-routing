<template>
  <div id="app">
    <header>
      <h1>Some header</h1>
    </header>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/user">User</router-link>
    </nav>

    <section>
      <router-view></router-view>
    </section>
 
  </div>
</template>
