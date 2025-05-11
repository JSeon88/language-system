<template>
  <div class="mt-5">
    <h1 class="text-2xl font-semibold mb-6">목록</h1>
    <v-sheet
      border
      rounded
    >
      <v-data-table
        density="compact"
        :headers="headers"
        :items="books"
        :header-props="{
          class: 'text-subtitle-1 font-weight-bold',
        }"
      >
        <template v-slot:top>
          <div class="d-flex justify-end pa-4 gap-4">
            <v-btn
              color="primary"
              prepend-icon="mdi-plus"
              rounded="lg"
              text="단일 등록"
              border
              @click="add"
            ></v-btn>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="d-flex ga-2 justify-end">
            <v-icon
              color="medium-emphasis"
              icon="mdi-pencil"
              size="small"
              @click="edit(item.id)"
            ></v-icon>

            <v-icon
              color="medium-emphasis"
              icon="mdi-delete"
              size="small"
              @click="remove(item.id)"
            ></v-icon>
          </div>
        </template>

        <template v-slot:no-data> NO DATA </template>
      </v-data-table>
    </v-sheet>

    <v-dialog
      v-model="dialog"
      max-width="700"
    >
      <AddDialog
        :dialog="dialog"
        :is-editing="isEditing"
        :record="record"
        @save="save"
        @cancel="cancel"
      />
    </v-dialog>
  </div>
</template>

<script setup>
  import { onMounted, ref, shallowRef } from 'vue';
  import AddDialog from './add/Dialog.vue';

  const DEFAULT_RECORD = { localeKey: '', env: '', ko: '', en: '', zh_cn: '', zh_tw: '', ja: '' };

  const books = ref([]);
  const record = ref(DEFAULT_RECORD);
  const dialog = shallowRef(false);
  const isEditing = shallowRef(false);

  const headers = [
    { title: '환경', key: 'env', align: 'start' },
    { title: 'Key', key: 'localeKey', align: 'start' },
    { title: '한국어(ko)', key: 'ko' },
    { title: '영어(en)', key: 'en' },
    { title: '중국어 간체(zh_cn)', key: 'zh_cn' },
    { title: '중국어 번체(zh_tw)', key: 'zh_tw' },
    { title: '일본어(ja)', key: 'ja' },
    { title: '-', key: 'actions', align: 'center', sortable: false },
  ];

  onMounted(() => {
    reset();
  });

  function add() {
    isEditing.value = false;
    record.value = DEFAULT_RECORD;
    dialog.value = true;
  }

  function edit(id) {
    isEditing.value = true;

    const found = books.value.find((book) => book.id === id);

    record.value = {
      id: found.id,
      env: found.env,
      localeKey: found.localeKey,
      ko: found.ko,
      en: found.en,
      zh_cn: found.zh_cn,
      zh_tw: found.zh_tw,
      ja: found.ja,
    };

    dialog.value = true;
  }

  function remove(id) {
    const index = books.value.findIndex((book) => book.id === id);
    books.value.splice(index, 1);
  }

  const save = () => {
    if (isEditing.value) {
      const index = books.value.findIndex((book) => book.id === record.value.id);
      books.value[index] = record.value;
    } else {
      record.value.id = books.value.length + 1;
      books.value.push(record.value);
    }

    dialog.value = false;
  };

  const cancel = () => {
    dialog.value = false;
  };

  const reset = () => {
    dialog.value = false;
    record.value = DEFAULT_RECORD;
    books.value = [
      {
        id: 1,
        env: 'dev',
        localeKey: 'store.common.save',
        ko: '저장',
        en: 'Save',
        zh_cn: '保存',
        zh_tw: '保存',
        ja: '保存',
      },
    ];
  };
</script>

<style scoped></style>
