<template>
  <section class="section profile">
    <div class="container">
      <h1>Welcome, {{name}}</h1>
      <ul>
        <li>Your id is: {{id}}</li>
        <li>Your email is: {{email}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'profile',
  computed: mapState('user', ['id', 'email', 'name'])
}
</script>

<style>
  
</style>
