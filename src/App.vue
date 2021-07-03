<template>
  <div class="w-8/12 h-2/3 m-auto shadow-lg px-5 pt-1 pb-3 border-t-2 border-gray-300 mt-5">
    <div class="overflow-hidden border-blue-100 border-b-2 mb-2 ">
      <h5 class="text-green-500 text-2xl text-center p-2 float-left">
        Your Timer
      </h5>
      <router-link :to="{path: '/'}" class="float-right px-2 py-1 border-blue-100 border-b-2 shadow-lg transition-all  hover:border-green-500">
        New Timer
      </router-link>
    </div>
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>

</script>