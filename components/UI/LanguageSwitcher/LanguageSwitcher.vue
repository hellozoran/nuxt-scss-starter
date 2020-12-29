<template lang="html">
  <div class="class">
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>