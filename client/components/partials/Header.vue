<template>
  <header id="header">
    <div class="container">
      <nav>
        <ul>
          <router-link :to="{ name: 'home' }" tag="li"><a>Home</a></router-link>
          <router-link v-if="!authorized" :to="{ name: 'auth.login' }" tag="li"><a>Login</a></router-link>
          <router-link v-if="!authorized" :to="{ name: 'auth.register' }" tag="li"><a>Register</a></router-link>
          <router-link v-if="authorized" :to="{ name: 'dashboard' }" tag="li"><a>Dashboard</a></router-link>
          <router-link v-if="authorized" :to="{ name: 'profile' }" tag="li"><a>My Profile</a></router-link>
          <li v-if="authorized"  @click="logout"><a>Logout</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'header',
  computed: mapState('auth', ['authorized']),
  methods: mapActions('auth', ['logout'])
}
</script>

<style lang="sass">
@import '~scss/variables';

#header {
  background: $white;
  box-shadow: 0 0 1rem $light-gray;

  nav {}

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {}

  a {
    display: inline-block;
    margin: 0 5rem;
    padding: 2rem 0;
    cursor: pointer;
  }
}
</style>
