<template>
  <button
    type="submit"
    class="px-8 py-2.5 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
    :class="`${props.class} ${color}`"
  >
    {{ props.label }}
  </button>
</template>
<script setup lang="ts">
  type Props = {
    class?: string;
    label: string;
    color?: 'primary' | 'secondary';
  };

  const color = computed(() => {
    switch (props.color) {
      case 'primary':
        return 'bg-blue-600';
      case 'secondary':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  });

  const props = withDefaults(defineProps<Props>(), {});
</script>
