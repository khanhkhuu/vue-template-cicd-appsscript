<template>
    <q-page>
      <q-card class="q-mx-auto q-mb-lg" flat>
        <q-card-section class="q-py-lg q-px-lg">
          <q-input v-model="thamSo1" label="Tham số 1" filled type="number" />
  
          <q-input class="q-mt-sm" v-model="thamSo2" label="Tham số 2" filled type="number" />
  
          <q-btn class="q-mt-sm" label="Tính tổng" @click="tinhTong" />
  
          <q-banner v-if="result" class="q-mt-sm bg-primary text-white">
            {{ result }}
          </q-banner>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const thamSo1 = ref('');
  const thamSo2 = ref('');
  
  const result = ref("");
  
  function tinhTong() {
    const sum = Number(thamSo1.value) + Number(thamSo2.value);
    result.value = `Kết quả của phép toán: ${thamSo1.value} + ${thamSo2.value} là ${sum}`;
    thamSo1.value = '';
    thamSo2.value = '';
  }
  </script>
  