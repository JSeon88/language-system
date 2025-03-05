<template>
  <input
    v-model="model"
    :type="props.type || 'text'"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :class="['border px-3 py-2 rounded', props.className]"
  />
  <br />
  inputText: {{ model }}
</template>

<script setup lang="ts">
  type Props = {
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: 'text' | 'password' | 'email' | 'number';
    className?: string;
  };

  defineOptions({
    name: 'TextInput',
    modelValue: '',
    placeholder: '입력하세요',
    disabled: false,
    type: 'text',
  });

  const props = defineProps<Props>();
  const model = defineModel<string>({ required: false });
</script>
