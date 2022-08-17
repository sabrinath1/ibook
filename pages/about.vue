<template>
  <AboutTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import AboutTemplate from '~/components/templates/AboutTemplate.vue'

export default Vue.extend({
  layout: 'ibook',
  components: { AboutTemplate },
})
</script>
