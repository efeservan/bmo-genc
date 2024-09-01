<template>
  <div>
    <h3>Add a New University</h3>
    <input v-model="newUniversity.name" placeholder="University Name" />
    <button @click="addUniversity">Add University</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  setup(_, { emit }) {
    const newUniversity = ref<{ name: string }>({ name: '' })

    const addUniversity = async () => {
      try {
        await axios.post('http://localhost:8080/api/university/add', newUniversity.value)
        alert('University added successfully!')
        newUniversity.value.name = '' // Clear the input
        emit('universityAdded')
      } catch (error) {
        console.error('There was an error adding the university:', error)
      }
    }

    return {
      newUniversity,
      addUniversity
    }
  }
})
</script>

<style scoped>
input,
button {
  margin-top: 10px;
  padding: 5px;
  display: block;
}
</style>
