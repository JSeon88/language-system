<template>
  <label
    class="block font-medium mb-1.5 text-gray-700"
    :class="props.className"
    >{{ props.label }}</label
  >
</template>

<script setup lang="ts">
  type Props = {
    label: string;
    className?: string;
  };

  const props = defineProps<Props>();
</script>
