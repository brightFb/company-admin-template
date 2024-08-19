<script setup lang="tsx">
import { onMounted } from 'vue';
import { NButton, NDataTable, NSpace, NSwitch } from 'naive-ui';
import MainCard from '@/components/custom/main-card.vue';
import { fetchDirectNumberPool } from '@/service/api';
import { useTable } from '@/hooks/common/table';
import LandingListSearch from './modules/landing-list-search.vue';

const { columns, data, loading, mobilePagination, searchParams, resetSearchParams, getDataByPage } = useTable({
  apiFn: fetchDirectNumberPool,
  showTotal: true,
  immediate: true,
  apiParams: {
    page: 1,
    limit: 30,
    title: null
  },
  columns: () => [
    {
      key: 'index',
      title: '序号',
      width: 50,
      align: 'center'
    },
    {
      key: 'title',
      title: '落地网关名称',
      minWidth: 150,
      align: 'center'
    },
    {
      key: 'leader_names',
      title: '网关ip',
      minWidth: 150,
      align: 'center'
    },
    {
      key: 'dkh',
      title: '端口号',
      minWidth: 100,
      align: 'center'
    },
    {
      key: 'hmsl',
      title: '号码数量',
      minWidth: 120,
      align: 'center'
    },
    {
      key: 'hmfgsf',
      title: '号码覆盖省份',
      minWidth: 100,
      align: 'center'
    },
    {
      key: 'status',
      title: '状态',
      minWidth: 100,
      align: 'center',
      render: () => {
        return <NSwitch size="small" />;
      }
    },
    {
      key: 'operation',
      title: '操作',
      minWidth: 120,
      align: 'center',
      render: () => {
        return (
          <NSpace justify="center">
            <NButton type="primary" size="tiny">
              编辑
            </NButton>
            <NButton type="error" size="tiny">
              删除
            </NButton>
          </NSpace>
        );
      }
    }
  ]
});
onMounted(async () => {});
</script>

<template>
  <MainCard>
    <NSpace vertical>
      <LandingListSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
      <NButton type="primary" :size="$themeNaiveUIConfig.list.size">
        <template #icon>
          <icon-ic-round-add class="text-icon" />
        </template>
        新增落地网关
      </NButton>
      <NDataTable
        :columns="columns"
        :data="data"
        size="small"
        :loading="loading"
        remote
        :row-key="row => row.id"
        :pagination="mobilePagination"
      />
    </NSpace>
  </MainCard>
</template>
