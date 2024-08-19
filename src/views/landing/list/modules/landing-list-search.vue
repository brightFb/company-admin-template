<script setup lang="ts">
import { $t } from '@/locales';
defineOptions({
  name: 'UserSearch'
});

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const emit = defineEmits<Emits>();

const model = defineModel<Api.Landing.ListSearchParams | any>('model', { required: true });

async function reset() {
  model.value.title = null;
  model.value.status = null;
  emit('reset');
  emit('search');
}

async function search() {
  emit('search');
}
</script>

<template>
  <NSpace>
    <NInput
      v-model:value="model.title"
      v-formwidth="$themeNaiveUIConfig.list.normalWidth"
      placeholder="落地网关名称"
      :size="$themeNaiveUIConfig.list.size"
    />
    <NButton :size="$themeNaiveUIConfig.list.size" @click="reset">
      <template #icon>
        <icon-ic-round-refresh class="text-icon" />
      </template>
      {{ $t('common.reset') }}
    </NButton>
    <NButton type="primary" ghost :size="$themeNaiveUIConfig.list.size" @click="search">
      <template #icon>
        <icon-ic-round-search class="text-icon" />
      </template>
      {{ $t('common.search') }}
    </NButton>
  </NSpace>
</template>

<style scoped></style>
