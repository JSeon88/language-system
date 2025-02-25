<template>
  <div>
    default layout
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'DefaultaLayout',
  });
</script>
