<template>
    <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
      <div class="container flex flex-col items-center">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span class="sr-only">Error 404!</span>
          </h2>
          <p class="text-2xl md:text-3xl dark:text-gray-300">
            Oops! This page could not be found.
          </p>
          <router-link
            to="/"
            class="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
          >
            Back to home
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .h-screen {
    height: 100vh;
  }
  .p-16 {
    padding: 4rem;
  }
  .bg-gray-50 {
    background-color: #f9fafb;
  }
  .dark\:bg-gray-700 {
    background-color: #374151;
  }
  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .flex-col {
    flex-direction: column;
  }
  .gap-6 {
    gap: 1.5rem;
  }
  .max-w-md {
    max-width: 28rem;
  }
  .text-center {
    text-align: center;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .text-9xl {
    font-size: 6rem;
  }
  .text-gray-600 {
    color: #4b5563;
  }
  .dark\:text-gray-100 {
    color: #f3f4f6;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .text-2xl {
    font-size: 1.5rem;
  }
  .md\:text-3xl {
    font-size: 1.875rem;
  }
  .dark\:text-gray-300 {
    color: #d1d5db;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .text-xl {
    font-size: 1.25rem;
  }
  .font-semibold {
    font-weight: 600;
  }
  .rounded {
    border-radius: 0.375rem;
  }
  .bg-purple-600 {
    background-color: #8b5cf6;
  }
  .text-gray-50 {
    color: #f9fafb;
  }
  .hover\:text-gray-200:hover {
    color: #e5e7eb;
  }
  </style>
  