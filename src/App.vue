<template>
  <n-config-provider :theme-overrides="THEME_CONFIG">
    <div class="deckhand__wrapper">
      <div v-if="$route.path !== '/'" class="deckhand__header">
        <Header />
      </div>
      <div class="deckhand__content">
        <router-view />
      </div></div
  ></n-config-provider>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import {
    // NThemeEditor,
    NConfigProvider,
  } from 'naive-ui';

  import THEME_CONFIG from './assets/theme-overrides';
</script>

<style lang="less">
  @blue-1: #112b44;
  @blue-2: #12375b;
  @blue-3: #3d5a80;
  @blue-4: #546a9b;
  @blue-5: #a5bed4;

  .deckhand {
    &__wrapper {
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 100dvw;
      height: 100dvh;
      margin: 0;
      padding: 0;
    }

    &__content {
      position: relative;
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
      max-width: 1120px;
      padding-top: 24px;
    }
  }
</style>
