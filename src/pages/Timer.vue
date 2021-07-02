<template>
  <template v-if="IsNew">
    <TimerSetup @start:timer="StartTimer"/>
  </template>
  <template v-else>
    <TimerDisplay :to="TimerTo"/>
  </template>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, ref, watch} from 'vue';
import TimerSetup from "../components/TimerSetup.vue";
import TimerDisplay from "../components/TimerDisplay.vue";

const route = useRoute();
const router = useRouter();
const TimerTo = ref(null);
const IsNew = computed(() => TimerTo.value === null);
const StartTimer = ($event) => {
  router.push("/" + btoa($event));
};

function DisplayTimer() {
  const hash = route.params.hash;
  console.log(hash);
  if (hash.length) {
    const to = atob(hash[0]);
    TimerTo.value = to;
  } else {
    TimerTo.value = null;
  }
}

onMounted(() => DisplayTimer());
watch(() => route.params, (toParams) => {
  DisplayTimer();
});

</script>