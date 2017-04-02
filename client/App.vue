<template>
  <div id="app">

    <!-- TODO: breakout -->
    <header id="header">
      <div class="container">
        <nav>
          <ul>
            <router-link :to="{ name: 'home' }" tag="li"><a>Home</a></router-link>
            <router-link v-if="!authenticated" :to="{ name: 'login' }" tag="li"><a>Login</a></router-link>
            <router-link v-if="!authenticated" :to="{ name: 'register' }" tag="li"><a>Register</a></router-link>
            <router-link v-if="authenticated" :to="{ name: 'dashboard' }" tag="li"><a>Dashboard</a></router-link>
            <router-link v-if="authenticated" :to="{ name: 'profile' }" tag="li"><a>My Profile</a></router-link>
            <li v-if="authenticated"  @click="logout"><a href="#">Logout</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- TODO: Nice transition effect -->
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: mapState('auth', ['authenticated']),
  methods: mapActions('auth', ['logout'])
}
</script>

<style lang="sass">
// Global Styles
@import './scss/app';

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAJElEQVQYV2O8ffv2f1VVVUYGJADmoEvAVSBLoGiDSaAIwowCABOSE5aZfPWHAAAAAElFTkSuQmCC');
}

// TODO: Breakout
#header {
  background: $white;
  box-shadow: 0 0 1rem $light-gray;

  nav {

  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {

  }

  a {
    display: inline-block;
    margin: 0 5rem;
    padding: 2rem 0;
  }
}
</style>
