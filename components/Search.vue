<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">검색</h1>
    <form @submit.prevent="onSubmit">
      <div class="flex flex-wrap gap-4 mb-4">
        <div class="flex-1 min-w-[200px]">
          <SharedLabel label="서비스" />
          <SharedSelectBox
            v-model="service"
            :items="serviceItems"
            width="100%"
          />
          <span
            v-if="errors.service"
            class="text-red-600 text-xs mt-1 block"
            >{{ errors.service }}</span
          >
        </div>

        <div class="flex-1 min-w-[200px]">
          <SharedLabel label="환경" />
          <SharedSelectBox
            v-model="env"
            :items="envItems"
            width="100%"
          />
          <span
            v-if="errors.env"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.env }}</span
          >
        </div>
        <div class="flex-1 min-w-[500px]">
          <SharedLabel label="다국어 키" />
          <v-text-field
            v-model="searchText"
            placeholder="검색어를 입력하세요"
            type="text"
          />
          <span
            v-if="errors.searchText"
            class="text-red-600 text-xs mt-0 block"
            >{{ errors.searchText }}</span
          >
        </div>
      </div>

      <div class="flex justify-end mt-5 gap-4">
        <SharedVButton
          label="검색"
          color="grey"
        />
        <SharedVButton
          label="엑셀 다운로드"
          color="secondary"
          prepend-icon="mdi-file-excel"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

  // 타입 정의
  interface FormValues {
    service: string;
    env: string;
    searchText: string;
  }

  // 간단한 유효성 검사 로직
  const errors = ref<Record<string, string>>({});

  const validateForm = (): boolean => {
    errors.value = {};

    if (!service.value || service.value === '') {
      errors.value.service = '서비스를 선택해주세요';
    }

    if (!searchText.value || searchText.value.length < 2) {
      errors.value.searchText = '검색어는 최소 2자 이상 입력해주세요';
    } else if (searchText.value.length > 50) {
      errors.value.searchText = '검색어는 최대 50자까지 입력 가능합니다';
    }

    return Object.keys(errors.value).length === 0;
  };

  // 옵션 데이터
  const serviceItems = [
    { label: '선택', value: '' },
    { label: '스토어', value: 'store' },
    { label: '스튜디오', value: 'studio' },
  ];
  const envItems = [
    { label: '전체', value: 'all' },
    { label: 'dev', value: 'dev' },
    { label: 'dev2', value: 'dev2' },
    { label: 'qa', value: 'qa' },
    { label: 'qa2', value: 'qa2' },
    { label: 'sandbox', value: 'sandbox' },
    { label: 'live', value: 'live' },
  ];

  // 모델 값
  const service = ref('');
  const env = ref('');
  const searchText = ref('');

  watch(service, (newVal) => {
    if (newVal !== '') {
      validateForm();
    }
  });

  watch(searchText, (newVal) => {
    if (newVal !== '') {
      validateForm();
    }
  });

  // 폼 제출 처리
  const onSubmit = () => {
    if (validateForm()) {
      const values: FormValues = {
        service: service.value,
        env: env.value,
        searchText: searchText.value,
      };

      console.log('검색 실행:', values);
      // API 호출 등 추가 로직
      alert(`검색 조건: ${values.service}, ${values.env}, ${values.searchText}`);
    }
  };
</script>
