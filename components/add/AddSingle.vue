<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-wrap gap-4 mb-4">
      <div class="flex-1 min-w-[200px]">
        <div class="mb-4">
          <SharedLabel label="다국어 키" />
          <v-text-field
            v-model="languageKey"
            placeholder="다국어 키를 입력하세요"
            type="text"
            variant="outlined"
          />
          <span
            v-if="errors.languageKey"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.languageKey }}</span
          >
        </div>

        <div class="mb-4">
          <SharedLabel label="한국어(KO)" />
          <v-text-field
            v-model="ko"
            type="text"
            variant="outlined"
          />
          <span
            v-if="errors.ko"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.ko }}</span
          >
        </div>

        <div class="mb-4">
          <SharedLabel label="영어(EN)" />
          <v-text-field
            v-model="en"
            type="text"
            variant="outlined"
          />
          <span
            v-if="errors.en"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.en }}</span
          >
        </div>

        <div class="mb-4">
          <SharedLabel label="일본어(JP)" />
          <v-text-field
            v-model="jp"
            type="text"
            variant="outlined"
          />
          <span
            v-if="errors.jp"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.jp }}</span
          >
        </div>

        <div class="mb-4">
          <SharedLabel label="중국어 번체(ZH-CN)" />
          <v-text-field
            v-model="zhCn"
            type="text"
            variant="outlined"
          />
          <span
            v-if="errors.zhCn"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.zhCn }}</span
          >
        </div>

        <div class="mb-4">
          <SharedLabel label="중국어 간체(ZH_TW)" />
          <v-text-field
            v-model="zhTw"
            type="text"
            variant="outlined"
          />
          <span
            v-if="errors.zhTw"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.zhTw }}</span
          >
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-0">
      <SharedButton
        label="등록"
        color="primary"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
  // 타입 정의
  interface FormValues {
    languageKey: string;
  }

  const languageKey = ref('');
  const ko = ref('');
  const en = ref('');
  const jp = ref('');
  const zhCn = ref('');
  const zhTw = ref('');
  const errors = ref<Record<string, string>>({});

  const validateForm = (): boolean => {
    errors.value = {};

    return Object.keys(errors.value).length === 0;
  };

  // 폼 제출 처리
  const onSubmit = () => {
    if (validateForm()) {
      console.log('저장 실행');
    }
  };
</script>
