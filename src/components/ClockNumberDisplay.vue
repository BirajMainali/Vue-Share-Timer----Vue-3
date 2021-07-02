<template>
<div class="bg-black p-2 text-white float-left mr-1">
  {{props.number}}
</div>
</template>

<script setup>
const props = defineProps({
  number: {
    required: true
  }
});
</script>

<style scoped>

</style>