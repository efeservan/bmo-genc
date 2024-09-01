<template>
  <div>
    <div class="form-group row mb-2">
      <label for="university" class="col-sm-2 col-form-label"><h6>Üniversite</h6></label>
      <div class="col-sm-6">
        <select
          v-model="internalSelectedUniversityId"
          class="form-control"
          @change="onUniversityChange"
        >
          <option value="" disabled>Üniversite Seçiniz</option>
          <option
            v-for="university in filteredUniversities"
            :key="university.id"
            :value="university.id"
          >
            {{ university.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'

interface University {
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
    const universities = ref<University[]>([])
    const internalSelectedUniversityId = ref<number | null>(props.modelValue)
    const searchQuery = ref<string>('')

    const fetchUniversities = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/university/all')
        universities.value = response.data
      } catch (error) {
        console.error('Error fetching universities:', error)
      }
    }

    const filteredUniversities = computed(() => {
      if (!searchQuery.value) {
        return universities.value
      }
      return universities.value.filter((university) =>
        university.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    watch(
      () => props.modelValue,
      (newValue) => {
        internalSelectedUniversityId.value = newValue
      }
    )

    const onUniversityChange = () => {
      const selectedUniversity = universities.value.find(
        (university) => university.id === internalSelectedUniversityId.value
      )
      emit('update:modelValue', internalSelectedUniversityId.value)
      emit('update:selectedUniversityName', selectedUniversity ? selectedUniversity.name : '')
    }

    onMounted(() => {
      fetchUniversities()
    })

    return {
      universities,
      internalSelectedUniversityId,
      searchQuery,
      filteredUniversities,
      onUniversityChange
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>
