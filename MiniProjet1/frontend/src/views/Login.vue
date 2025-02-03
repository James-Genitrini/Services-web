<template>
  <div class="login">
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn-login">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Utilisateur:', this.username);
      console.log('Mot de passe:', this.password);

      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push('/');
      } else {
        alert('Identifiants incorrects');
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h1 {
  text-align: center;
  font-size: 2em;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 1.1em;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
}

.btn-login {
  width: 100%;
  padding: 10px;
  font-size: 1.1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #45a049;
}
</style>
