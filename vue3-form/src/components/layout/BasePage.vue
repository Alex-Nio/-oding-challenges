<script setup>
  import Header from '@/components/header/Header.vue';
  import Footer from '@/components/footer/Footer.vue';
</script>

<template>
  <div class="page">
    <Header />
    <div class="page__wrapper">
      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .page {
    background: $bg-page;
  }

  main {
    min-height: 100dvh;
  }
</style>
