<template>
  <div>
    Timer To: {{ TimerTo }}
    <hr />
    <div class="overflow-hidden w-1/2 pt-2">
      <VueCountdown :time="timeDiff" v-slot="{ days, hours, minutes, seconds }">
        <clock-number-display :number="days.toString().padStart(2, '0')[0]" />
        <clock-number-display :number="days.toString().padStart(2, '0')[1]" />
        <div class="float-left mr-2 py-2">-</div>
        <clock-number-display :number="hours.toString().padStart(2, '0')[0]" />
        <clock-number-display :number="hours.toString().padStart(2, '0')[1]" />
        <div class="float-left mr-2 py-2">-</div>
        <clock-number-display
          :number="minutes.toString().padStart(2, '0')[0]"
        />
        <clock-number-display
          :number="minutes.toString().padStart(2, '0')[1]"
        />
        <div class="float-left mr-2 py-2">-</div>
        <clock-number-display
          :number="seconds.toString().padStart(2, '0')[0]"
        />
        <clock-number-display
          :number="seconds.toString().padStart(2, '0')[1]"
        />
      </VueCountdown>
    </div>
    <button
      class="
        px-4
        py-1
        mt-2
        border-blue-100
        shadow-lg
        clear-both
        font-bold
        border-2
      "
      @click.prevent="copyToClipboard"
    >
      Share
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import clipboardCopy from "clipboard-copy";
import VueCountdown from "@chenfengyuan/vue-countdown";
import ClockNumberDisplay from "./ClockNumberDisplay.vue";

const props = defineProps({
  to: {
    required: true,
  },
});
const TimerTo = computed(() => props.to);
const timeDiff = computed(() => new Date(TimerTo.value) - new Date());
const copyToClipboard = async () => {
  const url = window.location.host + "#/" + btoa(TimerTo.value);
  await clipboardCopy(url);
  alert("URL Copied to clipboard");
};
</script>
