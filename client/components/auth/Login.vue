<template>
  <div class="auth login">
    <div class="control-group">
      <label for="email">Email</label>
      <input type="text" id="email" class="control" v-model="email">
    </div>

    <div class="control-group">
      <label for="password">Password</label>
      <input type="text" id="password" class="control" v-model="password">
    </div>

    <div class="control-group">
      <button @click="login({email, password})">Login</button>
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

<style>
  
</style>
