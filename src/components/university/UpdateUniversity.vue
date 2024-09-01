<template>
  <div>
    <h1>Update University</h1>
    <input v-model="id" placeholder="University ID" />
    <input v-model="name" placeholder="New University Name" />
    <button @click="updateUniversity">Update</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'UpdateUniversity',
  setup() {
    const id = ref<number | null>(null)
    const name = ref('')

    const updateUniversity = async () => {
      await axios.put(`/api/university/update/${id.value}`, { name: name.value })
      name.value = ''
    }

    return { id, name, updateUniversity }
  }
})
</script>
