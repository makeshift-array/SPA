<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from 'components/partials/Header'

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
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
</style>
