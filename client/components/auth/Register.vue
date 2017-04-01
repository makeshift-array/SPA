<template>
  <div class="auth register">
    <div class="control-group">
      <label for="name">Name</label>
      <input type="text" id="name" class="control" v-model="name">
    </div>

    <div class="control-group">
      <label for="email">Email</label>
      <input type="text" id="email" class="control" v-model="email">
    </div>

    <div class="control-group">
      <label for="password">Password</label>
      <input type="text" id="password" class="control" v-model="password">
    </div>

    <div class="control-group">
      <button @click="register({name, email, password})">Register</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data: () => ({
    name: '',
    email: '',
    password: ''
  }),
  methods: mapActions('auth', ['register'])
}
</script>

<style>
  
</style>
