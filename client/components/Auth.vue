<template>
  <section class="section auth">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'auth'
}
</script>

<style lang="sass">
.auth {
  display: flex;
  flex-grow: 1;
}
</style>
