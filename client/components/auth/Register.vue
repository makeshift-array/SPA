<template>
  <div class="register">
    <div class="control-group">
      <label for="name" class="control-label">Name</label>
      <input type="text" id="name" class="control" v-model="name">
    </div>

    <div class="control-group">
      <label for="email" class="control-label">Email</label>
      <input type="text" id="email" class="control" v-model="email">
    </div>

    <div class="control-group">
      <label for="password" class="control-label">Password</label>
      <input type="password" id="password" class="control" v-model="password">
    </div>

    <div class="control-group">
      <button class="btn" @click="register({ name, email, password })">Register</button>
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

<style lang="sass">
@import '~scss/variables';

.register {
  max-width: 32rem;
  margin: auto;
  padding: 2rem;
  background: $white;
  box-shadow: 0 0.2rem 0.5rem $light-gray;
}
</style>
