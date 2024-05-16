<template>
  <div v-if="!done">Đang kiểm tra quyền truy cập...</div>
  <div v-else>
    <slot v-if="isAuthorized"></slot>
    <div v-else>Không có quyền truy cập</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const done = ref(false);
const isAuthorized = ref(false);

onMounted(() => {
    if (import.meta.env.DEV) {
        isAuthorized.value = true;
        done.value = true;
        return;
    }

    google.script.run.withSuccessHandler((result: boolean) => {
        isAuthorized.value = result;
        done.value = true;
    }).auth_CheckAuth();
})
</script>
