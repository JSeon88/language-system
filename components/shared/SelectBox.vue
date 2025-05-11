<template>
  <v-select
    v-model="model"
    class="rounded-lg"
    :label="props.label"
    :items="props.items"
    :variant="props.variant"
    item-title="label"
    item-value="value"
  ></v-select>
</template>

<script setup lang="ts">
  type Props = {
    items: { label: string; value: string }[];
    label?: string;
    variant?: 'outlined' | 'underlined' | 'solo' | 'solo-filled' | 'solo-inverted';
  };

  defineOptions({
    name: 'SelectBox',
  });

  const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    variant: 'outlined',
  });

  const model = defineModel<string>({ required: false });

  onMounted(() => {
    model.value = props.items[0].value;
  });
</script>
