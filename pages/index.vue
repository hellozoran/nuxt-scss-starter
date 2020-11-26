<template>
  <div class="container">
    <div>
      <Logo />
      <Heading :level="1" class="my-5">Nuxt + Tailwind + SCSS starter</Heading>
      <Btn :to="{ name: 'index' }">
        Button example
      </Btn>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>