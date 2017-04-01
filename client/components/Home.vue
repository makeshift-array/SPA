<template>
  <div>
    <h1>Hello, {{name}}!</h1>
    <ul>
      <router-link :to="{ name: 'login' }" tag="li"><a>Login</a></router-link>
      <router-link :to="{ name: 'register' }" tag="li"><a>Register</a></router-link>

      <!-- only show once logged in -->
      <router-link :to="{ name: 'dashboard' }" tag="li"><a>Dashboard</a></router-link>
      <router-link :to="{ name: 'profile' }" tag="li"><a>My Profile</a></router-link>
    </ul>
    
  </div>
</template>
<script>
export default {
  name: 'home',
  data: () => ({
    name: 'World'
  })
}
</script>

<style>
  
</style>
