<template>
  <div class="container">
    <div>
      <Logo />
      <Heading :level="1" class="my-5">i18n + Tailwind</Heading>
      <Btn :to="localePath('sample')" class="mb-4">
        {{ $t('welcome') }}
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