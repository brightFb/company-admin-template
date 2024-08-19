<script setup lang="ts">
import { onMounted } from 'vue';
import { NDataTable, NSpace } from 'naive-ui';
import dayjs from 'dayjs';
import MainCard from '@/components/custom/main-card.vue';
import { fetchDirectNumberPool } from '@/service/api';
import { useTable } from '@/hooks/common/table';

const { columns, data, loading, mobilePagination } = useTable({
  apiFn: fetchDirectNumberPool,
  showTotal: true,
  immediate: true,
  apiParams: {
    page: 1,
    limit: 30
  },
  columns: () => [
    {
      type: 'selection',
      align: 'center',
      width: 50
    },
    {
      key: 'index',
      title: '序号',
      width: 50
    },
    {
      key: 'title',
      title: '任务名称',
      minWidth: 150
    },
    {
      key: 'leader_names',
      title: '负责人',
      minWidth: 200
    },
    {
      key: 'time',
      title: '任务时间',
      minWidth: 200,
      render: (row: Record<string, unknown>) => {
        return `${dayjs(row.start_time as number).format('YYYY-MM-DD')}-${dayjs(row.end_time as number).format('YYYY-MM-DD')}`;
      }
    },
    {
      key: 'member_count',
      title: '成员',
      minWidth: 80
    }
  ]
});
onMounted(async () => {});
</script>

<template>
  <MainCard>
    <NSpace vertical>
      <NDataTable
        :columns="columns"
        :data="data"
        size="small"
        :scroll-x="730"
        :loading="loading"
        remote
        :row-key="row => row.id"
        :pagination="mobilePagination"
      />
    </NSpace>
  </MainCard>
</template>
