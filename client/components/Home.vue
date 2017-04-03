<template>
  <section class="section home">
    <div class="container">
      <h1>Hello, {{name}}!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, qui ut! Deserunt laboriosam ipsam ullam, repellat quae dolore accusantium, doloribus, provident voluptas eaque minus et quo rem aliquam ipsa officia!</p>
    </div>
  </section>
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
