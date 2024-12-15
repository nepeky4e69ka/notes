<script setup lang="ts">
import { TProp } from '@/store';
import { isValid } from '@/utils';
const emit = defineEmits(['toggle']);
defineProps<TProp>()
</script>
<template>
 <section class="note">
  <div class="col">
    <label>Заголовок заметки</label>
    <textarea :class="{'-invalid': !isValid(row) }" v-model="row.title" />
  </div>
  <div class="col">
    <label>Статус</label>
    <p>Выполнено
      <ui-checkbox
        :id="row.id" 
        :value="row.completed"
        @toggle="emit('toggle')"
      />
    </p>
  </div>
</section>
</template>
