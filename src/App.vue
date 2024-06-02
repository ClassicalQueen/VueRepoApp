<template>
  <ErrorBoundary>
    <router-view />
  </ErrorBoundary>
</template>

<script setup>
import ErrorBoundary from './components/ErrorBoundary.vue';
</script>

<style src="./style.css"></style>
