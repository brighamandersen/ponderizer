<template>
<div class="login">
    <form class="card default-form half-section" @submit.prevent="register">
      <fieldset>
        <legend>Register for an account</legend>
        <div class="flex-parent form-section">
          <label class="flex-child">First Name</label>
          <input type="text" class="flex-child" placeholder="First Name" autofocus required v-model="firstName">
        </div>
        <div class="flex-parent form-section">
          <label class="flex-child">Last Name</label>
          <input type="text" class="flex-child" placeholder="Last Name" autofocus required v-model="lastName">
        </div>
        <div class="flex-parent form-section">
          <label class="flex-child">Username</label>
          <input type="text" class="flex-child" placeholder="Username" autofocus required v-model="username">
        </div>
        <div class="flex-parent form-section">
          <label class="flex-child">Password</label>
          <input type="password" class="flex-child" placeholder="Password" autofocus required v-model="password">
        </div>
        <div class="flex-parent btn-wrapper">
          <button class="flex-child" type="submit">Register</button>
        </div>
      </fieldset>
      <p v-if="error" class="error">{{error}}</p>
    </form>
    <form class="card default-form half-section" @submit.prevent="login">
      <fieldset>
        <legend>Login</legend>
        <div class="flex-parent form-section">
          <label class="flex-child">Username</label>
          <input type="text" class="flex-child" placeholder="Username" autofocus required v-model="usernameLogin">
        </div>
        <div class="flex-parent form-section">
          <label class="flex-child">Password</label>
          <input type="password" class="flex-child" placeholder="Password" autofocus required v-model="passwordLogin">
        </div>
        <div class="flex-parent btn-wrapper">
          <button class="flex-child" type="submit">Login</button>
        </div>
      </fieldset>
      <p v-if="errorLogin" class="error">{{errorLogin}}</p>
    </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
    }
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.username || !this.password)
        return;
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin)
        return;
      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  justify-content: center;
}

.half-section {
  flex: 1;
}

fieldset {
  padding: 2rem;
}

.error {
  margin-top: 20px;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: white;
}
</style>