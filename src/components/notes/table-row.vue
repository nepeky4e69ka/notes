<script setup lang="ts">
import { TProp } from '@/store'
import { toNote } from '@/utils';
const emit = defineEmits(['completed', 'edit', 'remove']);
defineProps<TProp>();
</script>
<template>
  <tr :class="{'--completed': row.completed }">
    <td>{{ row.id }}</td>
    <td>{{ row.title }}</td>
    <td>
      <ui-checkbox
        :id="row.id" 
        :value="row.completed"
        @toggle="emit('completed', row)"
      />
    </td>
    <td><i-edit @click="emit('edit')"/></td>
    <td><i-remove @click="emit('remove')"/></td>
    <td>
      <router-link :to="toNote(row)">
        <i-info/>
      </router-link>
    </td>
  </tr>
</template>
