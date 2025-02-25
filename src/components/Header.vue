<template>
  <div class="header__wrapper">
    <div class="header__inner">
      <router-link to="/">
        <div>
          <n-flex>
            <img src="../assets/img/deckhand-glyph.svg" />
            <h1>deckhand</h1>
          </n-flex>
        </div></router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  @import (reference) './../assets/css/imports.less';

  .header {
    &__wrapper {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      width: 100dvw;
      height: 88px;
      background-color: @dark-bg;
    }

    &__inner {
      position: relative;
      width: 100%;
      max-width: 1120px;
      height: 100%;

      a {
        text-decoration: none;
      }

      h1 {
        font-family: 'Montserrat', 'sans-serif';
        font-size: 32px;
        font-weight: 600;
        color: @dark-text-primary;
        letter-spacing: 4px;
        transform: translateY(9px);
        margin-left: 8px;
      }
    }
  }
</style>
