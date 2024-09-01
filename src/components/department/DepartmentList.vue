<template>
  <div>
    <div class="form-group row mb-2">
      <label for="department" class="col-sm-2 col-form-label"><h6>Bölüm</h6></label>
      <div class="col-sm-6">
        <select
          v-model="internalSelectedDepartmentId"
          class="form-control"
          @change="onDepartmentChange"
        >
          <option value="" disabled>Fakülte Seçiniz</option>
          <option
            v-for="department in filteredDepartments"
            :key="department.id"
            :value="department.id"
          >
            {{ department.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'

interface Department {
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
    const departments = ref<Department[]>([])
    const internalSelectedDepartmentId = ref<number | null>(props.modelValue)
    const searchQuery = ref<string>('')

    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/department/all')
        departments.value = response.data
      } catch (error) {
        console.error('Error fetching departments:', error)
      }
    }

    const filteredDepartments = computed(() => {
      if (!searchQuery.value) {
        return departments.value
      }
      return departments.value.filter((department) =>
        department.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    watch(
      () => props.modelValue,
      (newValue) => {
        internalSelectedDepartmentId.value = newValue
      }
    )

    const onDepartmentChange = () => {
      const selectedDepartment = departments.value.find(
        (department) => department.id === internalSelectedDepartmentId.value
      )
      emit('update:modelValue', internalSelectedDepartmentId.value)
      emit('update:selectedDepartmentName', selectedDepartment ? selectedDepartment.name : '')
    }

    onMounted(() => {
      fetchDepartments()
    })

    return {
      departments,
      internalSelectedDepartmentId,
      searchQuery,
      filteredDepartments,
      onDepartmentChange
    }
  }
})
</script>

<style scoped>
/* Add any additional styles here */
</style>
