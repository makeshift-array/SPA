<template>
  <div class="login">
    <div class="control-group">
      <label for="email" class="control-label">Email</label>
      <input type="text" id="email" class="control" v-model="email">
    </div>

    <div class="control-group">
      <label for="password" class="control-label">Password</label>
      <input type="password" id="password" class="control" v-model="password">
    </div>

    <div class="control-group">
      <button class="btn" @click="login({ email, password })">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: mapActions('auth', ['login'])
}
</script>

<style lang="sass">
@import '~scss/variables';

.login {
  max-width: 32rem;
  margin: auto;
  padding: 2rem;
  background: $white;
  box-shadow: 0 0.2rem 0.5rem $light-gray;
}
</style>
