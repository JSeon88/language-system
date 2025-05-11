<template>
  <v-card :title="`${isEditing ? '수정' : '단일 등록'}`">
    <template v-slot:text>
      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <v-text-field
            v-model="record.localeKey"
            label="key"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="record.ko"
            label="한국어(ko)"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="record.en"
            label="영어(en)"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="record.ja"
            label="일본어(ja)"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="record.zh_cn"
            label="중국어 간체(zh_cn)"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="record.zh_tw"
            label="중국어 번체(zh_tw)"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>

    <v-divider></v-divider>

    <v-card-actions class="bg-surface-light">
      <v-btn
        text="Cancel"
        variant="plain"
        @click="cancel"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        text="Save"
        @click="save"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  defineProps<{
    dialog: boolean;
    isEditing: boolean;
    record: Record<string, string>;
  }>();

  const emit = defineEmits<{
    (e: 'save'): void;
    (e: 'cancel'): void;
  }>();

  const save = () => {
    emit('save');
  };

  const cancel = () => {
    emit('cancel');
  };
</script>
