<script setup lang="ts">
import { toNotes } from '@/utils'
</script>
<template>
  <router-link :to="toNotes()" class="ui-back">
    <i-arrow-left/>
    <b>Вернуться назад</b>
  </router-link>
</template>
