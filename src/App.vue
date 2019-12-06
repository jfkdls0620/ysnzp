<template>
  <div id="app">
    <header>
      <h1><router-link to="/">main</router-link></h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

</style>
