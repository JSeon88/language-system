<template>
  <input
    v-model="model"
    :type="props.type"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :class="['border px-3 py-2 rounded', props.className]"
  />
</template>

<script setup lang="ts">
  type Props = {
    placeholder?: string;
    disabled?: boolean;
    type?: 'text' | 'password' | 'email' | 'number';
    className?: string;
  };

  defineOptions({
    name: 'TextInput',
  });

  const props = withDefaults(defineProps<Props>(), {
    placeholder: '입력하세요',
    disabled: false,
    type: 'text',
  });

  const model = defineModel<string>({ required: false });
</script>
