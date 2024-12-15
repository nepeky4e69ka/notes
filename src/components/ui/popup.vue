<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from "@/store"
const userStore = useUserStore()
const { popup } = storeToRefs(userStore);
const close = () => userStore.togglePopup({ state: false })
</script>
<template>
  <div class="ui-popup" v-if="popup.active">
    <div class="ui-popup-backdrop" :class="{'--show': popup.show }" @click="close"></div>
    <div class="ui-popup-wrapper" :class="{'--show': popup.show }" >
       <component :is="popup.type"/>
    </div>
  </div>
</template>
