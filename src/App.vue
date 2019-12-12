<template>
  <div id="app">
    <header>
      <h1><router-link to="/">main</router-link></h1>
    </header>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

