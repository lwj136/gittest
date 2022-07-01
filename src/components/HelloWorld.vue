<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div>
    <div class="login-box">
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      <b-form-input v-model="password " placeholder="Enter your password"></b-form-input>
      <b-button variant="outline-primary">Primary</b-button>
    </div>
  </div>
</template>
