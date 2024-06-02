<template>
    <div>
      <slot v-if="!hasError"></slot>
      <div v-else class="error-container">
        <h1 class="error-title">Something went wrong!</h1>
        <p class="error-message">An error occurred: {{ error.message }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineComponent } from 'vue';
  
  const hasError = ref(false);
  const error = ref(null);
  
  defineComponent({
    errorCaptured(err) {
      error.value = err;
      hasError.value = true;
      return false;
    },
  });
  </script>
  
  <style scoped>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8d7da;
    color: #721c24;
  }
  
  .error-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .error-message {
    font-size: 18px;
  }
  </style>
  