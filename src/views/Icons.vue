<template>
  <div>
    <h2>deckhand-icons</h2>
    <n-input
      :value="searchQuery"
      @update:value="updateSearch"
      :style="{ width: '100%' }"
      placeholder="Search Icons"
    >
      <template #prefix>
        <n-icon :size="24"><SearchOutlined /></n-icon> </template
    ></n-input>
    <br /><br />

    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen" :x-gap="12" :y-gap="12">
      <n-grid-item v-for="icon in filteredIcons">
        <IconContainer :icon="icon"></IconContainer>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import IconContainer from './../components/IconContainer.vue';
  import ICONS from './../icons';
  import { SearchOutlined } from '@vicons/material';

  const searchQuery = ref<string>('');

  const updateSearch = (newValue: string): void => {
    searchQuery.value = newValue;
  };

  const filteredIcons = computed<string[]>(() => {
    if (!searchQuery.value) return ICONS; // Return all if search is empty
    console.log('update', searchQuery.value);
    const query = searchQuery.value.trim().toLowerCase();
    return query ? ICONS.filter((icon) => icon.toLowerCase().includes(query)) : ICONS;
  });
</script>
