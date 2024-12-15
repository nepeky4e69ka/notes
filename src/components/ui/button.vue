<script setup lang="ts">
const emit = defineEmits(['click'])
defineProps({
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  value: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  loadingClass: {
    type: String,
    required: false,
  },
  classes: {
    type: Array<string>,
    required: false,
    default: () => [],
  }
});
</script>
<template>
  <div 
    class="ui-button" 
    :class="[...classes, icon? '--icon': '', loading ? '--loading': '' ]"
    @click="emit('click')"
    >
    <div class="ui-button-wrap">
      <ui-loading :class="[loadingClass]" v-if="loading"/>
      <button>{{ value }}</button>
    </div>
    <div v-if="icon" class="ui-button-icon">
      <component :is="icon"/>
    </div>
  </div>
</template>
