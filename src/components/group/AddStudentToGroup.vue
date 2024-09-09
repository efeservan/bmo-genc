<template>
  <div class="container">
    <div class="mb-3">
      <label for="groupSelect" class="form-label">Grubu Seçiniz: </label>
      <select v-model="selectedGroup" class="form-select" id="groupSelect">
        <option v-for="group in groups" :key="group.id" :value="group.name">{{ group.name }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="bmoIdInput" class="form-label">BMO Sicil No Giriniz: </label>
      <input
        v-model="bmoId"
        @blur="fetchStudentName"
        type="text"
        class="form-control"
        id="bmoIdInput"
        placeholder="BMO Sicil No"
        @keydown.enter.prevent="fetchStudentName"
      />
    </div>

    <div class="mb-3">
      <label for="studentName" class="form-label">Öğrencinin Adı: </label>
      <input
        v-model="studentName"
        type="text"
        class="form-control"
        id="studentName"
        readonly
      />
    </div>
    <button @click="addStudentToGroup" class="btn btn-primary">Gruba Ekle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const groups = ref<Array<{ id: number, name: string }>>([]);
    const selectedGroup = ref<string>('');
    const bmoId = ref<string>('');
    const studentName = ref<string>('');

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/group/all');
        groups.value = response.data;
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    });

    const fetchStudentName = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/student/name/${bmoId.value}`);
        studentName.value = response.data;
        console.log("student " ,response.data);
      } catch (error) {
        console.error('Error fetching student name:', error);
        studentName.value = 'Not found';
      }
    };

    const addStudentToGroup = async () => {
      try {
        const response = await axios.post(`http://localhost:8080/api/group/student/${bmoId.value}`);
      } catch (error) {
        console.error('Error adding student to a group:', error);
      }
    };

    return {
      groups,
      selectedGroup,
      bmoId,
      studentName,
      fetchStudentName,
      addStudentToGroup,
    };
  },
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.form-label {
  font-weight: bold;
}
</style>
