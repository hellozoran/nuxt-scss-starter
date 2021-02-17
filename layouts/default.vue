<template>
  <div>
    <AnnouncementBar />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
html {
  transition: all 150ms ease;
}
.light-mode {
  @apply bg-white text-gray-800;
}
.dark-mode {
  @apply bg-gray-800 text-white;
}
</style>