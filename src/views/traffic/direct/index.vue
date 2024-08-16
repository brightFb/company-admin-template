<script setup lang="ts">
import { onMounted } from 'vue';
import MainCard from '@/components/custom/main-card.vue';
import { fetchDirectNumberPool } from '@/service/api';

onMounted(async () => {
  const { data } = await fetchDirectNumberPool();
  console.log(data);
});
</script>

<template>
  <MainCard>
    <div>1111</div>
  </MainCard>
</template>
