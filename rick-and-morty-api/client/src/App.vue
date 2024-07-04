<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

const items = ref<IRickAndIMorty[]>([]);

interface IRickAndIMorty {
  name: string;
  image: string;
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/wabulabudabdab');
    items.value = response.data;

  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
});
</script>

<template>
  <div class="chars">
    <div class="item" v-for="(item, index) in items" :key="index">
      <p>{{ item.name }}</p>
      <img :src="item.image" alt="Изображение">
    </div>
  </div>
</template>

<style scoped>
  .chars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .item {
    display: flex;
    flex-direction: column;
  }
</style>
