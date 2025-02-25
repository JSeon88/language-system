<template>
  <h1>main page</h1>

  <h2>components</h2>
  <SharedInputText
    v-model="inputValue"
    placeholder="이름을 입력하세요"
    type="text"
  />

  <h2>store</h2>

  <v-container>
    <v-btn
      size="small"
      @click="counterStore.increment"
    >
      +
    </v-btn>
    store count: {{ counterStore.count }}<br />
    store doubleCount: {{ counterStore.doubleCount }}<br />
  </v-container>

  <h2>tailwind</h2>
  <div class="w-100 bg-red-50">div</div>

  <h2>vuetify</h2>
  <v-container>
    <v-btn variant="tonal">Button</v-btn>
  </v-container>

  <h2>composable</h2>
  <v-container>
    <v-btn
      size="small"
      @click="counterController.increase"
      >+</v-btn
    >
    count: {{ counterController.count }}
    <v-btn
      size="small"
      @click="counterController.decrease"
    >
      -
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/stores';

  defineOptions({
    name: 'IndexPage',
  });

  useHead({
    title: '메인 페이지',
    meta: [{ name: 'description', content: '메인 페이지 설명' }],
  });

  const counterController = useExample(10);

  const counterStore = useCounterStore();

  const inputValue = ref('');
</script>

<style scoped>
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  h2 {
    margin: 10px 0 0;
    font-size: 16px;
    font-weight: bold;
  }
</style>
