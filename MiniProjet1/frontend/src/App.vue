<!-- App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Bienvenue dans mon Application</h1>
    </header>
    <router-view></router-view>  
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Style global de ton application */
#app {
  text-align: center;
}
header {
  background-color: #4CAF50;
  padding: 10px;
  color: white;
}
</style>
