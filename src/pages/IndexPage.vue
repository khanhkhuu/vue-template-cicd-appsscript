<template>
    <q-page>
      <q-card class="q-mx-auto q-mb-lg" flat>
        <q-card-section class="q-py-lg q-px-lg">
          <q-input v-model="thamSo1" label="Tham số 1" filled type="number" />
  
          <q-input v-model="thamSo2" label="Tham số 2" filled type="number" />
  
          <q-btn label="Tính tổng" @click="tinhTong" />
  
          <q-banner v-if="result" class="bg-primary text-white">
            {{ result }}
          </q-banner>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const thamSo1 = ref(0);
  const thamSo2 = ref(0);
  
  const result = ref("");
  
  function tinhTong() {
    const sum = thamSo1.value + thamSo2.value;
    result.value = `Kết quả của phép toán: ${thamSo1.value} + ${thamSo2.value} là ${sum}`;
    thamSo1.value = 0;
    thamSo2.value = 0;
  }
  </script>
  