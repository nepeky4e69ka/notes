<script setup lang="ts">
import { computed } from 'vue'
const emit = defineEmits(['toggle']);
const toggle = () => emit('toggle')
const props = defineProps({ 
  value: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    reqiured: true,
  }
})
const classes = computed(() => !!props.value ? ['--checked'] : '')
const id = props.id?.toString()
</script>
<template>
  <div class="ui-checkbox" @click.prevent="toggle">
    <input 
      type="checkbox" 
      :id="id" 
      :name="id" 
      :value="value" 
      :class="classes"
    >
    <label :for="id"></label>
  </div>
</template>
