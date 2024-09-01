<template>
  <div>
    <h1>Delete University</h1>
    <input v-model="id" placeholder="University ID" />
    <button @click="deleteUniversity">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'DeleteUniversity',
  setup() {
    const id = ref<number | null>(null)

    const deleteUniversity = async () => {
      await axios.delete(`/api/university/delete/${id.value}`)
    }

    return { id, deleteUniversity }
  }
})
</script>
