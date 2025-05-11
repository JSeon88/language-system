<template>
  <div class="mt-5">
    <h1 class="text-2xl font-semibold mb-6">대량 등록</h1>

    <div class="flex gap-4">
      <div class="w-[400px]">
        <v-file-input
          label="File input"
          density="comfortable"
          variant="outlined"
        ></v-file-input>
      </div>
      <div class="flex">
        <SharedVButton
          label="업로드"
          color="primary"
          height="50"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
