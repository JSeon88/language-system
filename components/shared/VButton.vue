<template>
  <v-btn
    :color="props.color"
    :prepend-icon="props.prependIcon"
    rounded="lg"
    :text="props.label"
    border
    :height="props.height"
    density="comfortable"
  ></v-btn>
</template>

<script setup lang="ts">
  type Props = {
    class?: string;
    label: string;
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'grey';
    prependIcon?: string;
    height?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    height: '40',
  });
</script>
