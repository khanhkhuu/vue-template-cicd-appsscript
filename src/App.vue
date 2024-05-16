<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppLeftDrawer from "@/components/AppLeftDrawer.vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <app-header>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      </app-header>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
      class="q-pa-md"
    >
      <app-left-drawer />
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in" name="fade-down">
          <div :key="route.path">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>
