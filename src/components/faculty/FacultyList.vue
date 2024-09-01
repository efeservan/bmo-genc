<template>
  <div>
    <div class="form-group row mb-2">
      <label for="faculty" class="col-sm-2 col-form-label"><h6>Fakülte</h6></label>
      <div class="col-sm-6">
        <select v-model="internalSelectedFacultyId" class="form-control" @change="onFacultyChange">
          <option value="" disabled>Fakülte Seçiniz</option>
          <option v-for="faculty in filteredFaculties" :key="faculty.id" :value="faculty.id">
            {{ faculty.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'

interface Faculty {
  id: number
  name: string
}

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: false,
      default: null
    }
  },
  setup(props, { emit }) {
    const faculties = ref<Faculty[]>([])
    const internalSelectedFacultyId = ref<number | null>(props.modelValue)
    const searchQuery = ref<string>('')

    const fetchFaculties = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/faculty/all')
        faculties.value = response.data
      } catch (error) {
        console.error('Error fetching faculties:', error)
      }
    }

    const filteredFaculties = computed(() => {
      if (!searchQuery.value) {
        return faculties.value
      }
      return faculties.value.filter((faculty) =>
        faculty.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    watch(
      () => props.modelValue,
      (newValue) => {
        internalSelectedFacultyId.value = newValue
      }
    )

    const onFacultyChange = () => {
      const selectedFaculty = faculties.value.find(
        (faculty) => faculty.id === internalSelectedFacultyId.value
      )
      emit('update:modelValue', internalSelectedFacultyId.value)
      emit('update:selectedFacultyName', selectedFaculty ? selectedFaculty.name : '')
    }

    onMounted(() => {
      fetchFaculties()
    })

    return {
      faculties,
      internalSelectedFacultyId,
      searchQuery,
      filteredFaculties,
      onFacultyChange
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>
