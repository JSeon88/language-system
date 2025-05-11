<template>
  <div
    class="select-container"
    :style="containerStyle"
  >
    <label
      v-if="props.label"
      class="select-label"
      >{{ props.label }}</label
    >
    <select
      v-model="model"
      class="custom-select"
      :class="props.variant"
      :style="selectStyle"
    >
      <option
        v-for="option in props.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  type Props = {
    options: {
      value: string;
      label: string;
    }[];
    variant?: 'outlined' | 'filled' | 'plain';
    label?: string;
    width?: string;
  };

  defineOptions({
    name: 'SelectBox1',
  });

  const props = withDefaults(defineProps<Props>(), {
    options: () => [
      {
        value: '',
        label: '전체',
      },
    ],
    variant: 'outlined',
  });

  // width 스타일을 위한 계산된 속성
  const containerStyle = computed(() => {
    return props.width ? { width: props.width } : {};
  });

  const selectStyle = computed(() => {
    return props.width ? { width: '100%' } : {};
  });

  const model = defineModel<string>({ required: false });

  onMounted(() => {
    model.value = props.options[0].value;
  });
</script>

<style scoped>
  .select-container {
    position: relative;
    /* 기본 width는 100%이지만 props로 덮어쓸 수 있음 */
    width: 100%;
  }

  .select-label {
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
    color: #333;
  }

  .custom-select {
    width: 100%;
    height: 38px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
  }

  .custom-select:focus {
    outline: none;
  }

  /* 테마 변형 */
  .outlined {
    border: 1px solid #ccc;
  }

  .filled {
    border: none;
    background-color: #f5f5f5;
  }

  .plain {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
  }
</style>
