<script setup lang="ts">
import { TProps } from '@/store';
const emit = defineEmits(['completed', 'edit', 'remove', 'toggleFilter']);
defineProps<TProps>();
</script>
<template>
 <table class="n-table">
  <thead>
    <tr>
      <th>№</th>
      <th>Название</th>
      <th 
        class="-filter"
        :class="{'-active': isActive }"
        @click="emit('toggleFilter')">
        Выполнено
      </th>
      <th>Редактировать</th>
      <th>Удалить</th>
      <th>Детали</th>
    </tr>
  </thead>
  <tbody>
    <n-table-row 
      v-for="row in rows" 
      :key="row.id" 
      :row="row"
      @completed="emit('completed', row.id)"
      @remove="emit('remove', row)"
      @edit="emit('edit', row)"
    />
  </tbody>
</table>
</template>
