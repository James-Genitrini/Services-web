<template>
  <div class="home">
    <h1>Bienvenue sur la page d'accueil !</h1>
    <router-link to="/login" class="login-link">Se connecter</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2.5em;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.login-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.login-link:hover {
  background-color: #45a049;
}
</style>
