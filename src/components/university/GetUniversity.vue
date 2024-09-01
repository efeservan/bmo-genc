<template>
  <div>
    <h3>Search for a University</h3>
    <input v-model="universityId" placeholder="Enter University ID" />
    <button @click="fetchUniversity">Get University</button>

    <div v-if="university">
      <p><strong>Name:</strong> {{ university.name }}</p>
    </div>
    <div v-else-if="universityId !== ''">
      <p>No university found with the provided ID.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

interface University {
  id: number
  name: string
}

export default defineComponent({
  setup() {
    const universityId = ref<string>('')
    const university = ref<University | null>(null)

    const fetchUniversity = async () => {
      try {
        const response = await axios.get<University>(
          `http://localhost:8080/api/university/${universityId.value}`
        )
        university.value = response.data
      } catch (error) {
        console.error('Error fetching university:', error)
        university.value = null // Clear the university if there's an error
      }
    }

    return {
      universityId,
      university,
      fetchUniversity
    }
  }
})
</script>

<style scoped>
input {
  margin-top: 10px;
  padding: 5px;
  display: block;
}

button {
  margin-top: 10px;
  padding: 5px;
  display: block;
}
</style>
