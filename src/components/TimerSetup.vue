<template>
  <div class="grid grid-cols-6">
    <input type="datetime-local" class="col-span-2 px-2 py-1 shadow-lg border-blue-100 border-2 mr-2"
           v-model="datetime"
    >
    <button type="button"
            class="px-2 py-1 w-full shadow-lg border-blue-100 border-2 hover:bg-green-500 hover:text-white transition-all"
            @click.prevent="startTimer"
    >
      Start
    </button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const emits = defineEmits([
  'start:timer'
]);

const datetime = ref(null);

const startTimer = () => {
  try {
    if(!datetime.value) throw "Please select time";
    if((new Date(datetime.value) - new Date()) < 0) throw "Please select future time";
    emits("start:timer", datetime.value);
  }
  catch (e) {
    alert(e);
  }
};

</script>

<style scoped>

</style>