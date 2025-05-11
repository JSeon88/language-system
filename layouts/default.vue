<template>
  <div class="max-w-6xl mx-auto p-5">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'DefaultLayout',
  });
</script>
