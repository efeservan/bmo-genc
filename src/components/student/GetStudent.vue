<template>
  <div>
    <div class="form-group row mb-2">
      <label for="student" class="col-sm-2 col-form-label">
        <h6>TC No</h6>
      </label>
      <div class="col-sm-6">
        <input
          v-model="tcNo"
          placeholder="TC No Giriniz"
          class="form-control mb-2"
          @keydown.enter.prevent="fetchStudent"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface Student {
  id: number;
  tcNo: string;
  bmoId: number;
  name: string;
  surname: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  homeTown: string;
  selectedUniversityId: string;
  selectedUniversityName: string;
  selectedFacultyName: string;
  selectedDepartmentName: string;
  studentNo: number;
  classDegree: number;
  city: string;
  phoneNumber: number;
  email: string;
  communicationPreference: string;
}

export default defineComponent({
  setup(_, { emit }) {
    const tcNo = ref<string>("");
    const student = ref<Student | null>(null);

    const fetchStudent = async () => {
      try {
        const response = await axios.get<Student>(
          `http://localhost:8080/api/student/${tcNo.value}`
        );
        student.value = response.data;
        emit("studentFetched", student.value); 
        console.log(student.value);
      } catch (error) {
        console.error("Error fetching student:", error);
        student.value = null; // Clear the student if there's an error
      }
    };

    onMounted(() => {
      if (tcNo.value) {
        fetchStudent();
      }
    });

    return {
      tcNo,
      student,
      fetchStudent,
    };
  },
});
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
