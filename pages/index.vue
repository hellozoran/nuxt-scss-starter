<template>
  <div class="home">
    <div>
      <Heading :level="1" class="my-5">i18n + Tailwind</Heading>
      <Btn :to="localePath('sample')" class="mb-4">
        {{ $t('welcome') }}
      </Btn>
      <p>color preference: {{ $colorMode.preference }}</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.home {
  @apply flex items-center justify-center flex-col text-center min-h-screen;
}
</style>