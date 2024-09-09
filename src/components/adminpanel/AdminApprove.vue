<template>
  <div>
    <b-table
      :items="formattedStudents"
      :fields="fields"
      striped
      hover
      responsive
      @row-clicked="goToUpdateStudent"
    >
    </b-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

interface Student {
  id: number; // Replace with the actual type of ID
  tcNo: string; // Adjust the type if necessary
  bmoId: number;
  name: string;
  surname: string;
  recordDate: string; // Adjust the type if necessary
  university: { name: string };
  faculty: { name: string };
  department: { name: string };
}

export default defineComponent({
  name: 'AdminApprove',
  setup() {
    const students = ref<Student[]>([]);
    const fields = ref([
      { key: 'tcNo', label: 'TC Kimlik No' },
      { key: 'bmoId', label: 'BMO Sicil No' },
      { key: 'name', label: 'Ad' },
      { key: 'surname', label: 'Soyad' },
      { key: 'recordDate', label: 'Üyelik Tarihi' },
      { key: 'university.name', label: 'Üniversite' },
      { key: 'faculty.name', label: 'Fakülte' },
      { key: 'department.name', label: 'Bölüm' },
    ]);

    const router = useRouter(); // Use the router

    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/student/approved');
        students.value = await response.json();
        console.log('Approved Students : ', students.value);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    const goToUpdateStudent = (student: Student) => {
      // Redirect to UpdateStudent with the selected student's id
      router.push({ name: 'UpdateStudent', params: { tcNo: student.tcNo } }); // Use router
    };

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    // Computed property to format dates in the students array
    const formattedStudents = computed(() => {
      return students.value.map(student => ({
        ...student,
        recordDate: formatDate(student.recordDate),
      }));
    });

    // Fetch students when the component is mounted
    fetchStudents();

    return {
      students,
      fields,
      goToUpdateStudent,
      formattedStudents,
    };
  },
});
</script>

<style scoped>
.table {
  cursor: pointer;
}
</style>
