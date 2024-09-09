<template>
  <div>
    <div class="form-group row mb-2 align-items-center">
      <label for="tcNo" class="col-sm-2 col-form-label">TC No Giriniz:</label>
      <div class="col-sm-6">
        <input
          v-model="tcNo"
          type="text"
          id="tcNo"
          placeholder="TC No Giriniz"
          class="form-control mb-2"
        />
      </div>
      <div class="col-sm-4">
        <button class="btn btn-primary" @click="fetchStudent">Ara</button>
      </div>
    </div>

    <div v-if="student !== null">
      <table class="table table-striped table-bordered table-hover">
        <tbody>
          <tr v-for="(item, index) in tableItems" :key="index">
            <td>
              <strong>{{ item.label }}</strong>
            </td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import axios from "axios";

interface Student {
  id: number;
  tcNo: number;
  bmoId: number | null;
  name: string;
  surname: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  recordDate: string;
  homeTown: string;
  classDegree: number;
  studentNo: number;
  city: string;
  phoneNumber: number;
  email: string;
  approvement: boolean;
  communicationPreference: string;
  kvkk: boolean;
  university: { name: string };
  faculty: { name: string };
  department: { name: string };
  groups: Array<{ id: number; name: string }>;
}

export default defineComponent({
  name: "StudentInfo",
  setup() {
    const tcNo = ref<string>("");
    const student = ref<Student | null>(null);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const fetchStudent = async () => {
      if (!tcNo.value) {
        error.value = "Please enter a TC No";
        return;
      }
      loading.value = true;
      error.value = null;
      try {
        const response = await axios.get<Student>(
          `http://localhost:8080/api/student/${tcNo.value}`
        );
        student.value = response.data;
      } catch (err) {
        console.error("Error fetching student data:", err);
        error.value =
          "Error fetching student data. Please check the TC No and try again.";
        student.value = null;
      } finally {
        loading.value = false;
      }
    };

    const tableItems = ref<{ label: string; value: any }[]>([]);

    const updateTableItems = () => {
      if (student.value) {
        tableItems.value = [
          { label: "TC No", value: student.value.tcNo },
          { label: "BMO Sicil No", value: student.value.bmoId },
          { label: "Adı", value: student.value.name },
          { label: "Soyadı", value: student.value.surname },
          { label: "Baba Adı", value: student.value.fatherName },
          { label: "Ana Adı", value: student.value.motherName },
          { label: "Doğum Tarihi", value: formatDate(student.value.birthDate) },
          {
            label: "Oda Kayıt Tarihi",
            value: formatDate(student.value.recordDate),
          },
          { label: "Doğum Yeri", value: student.value.homeTown },
          { label: "Sınıf", value: student.value.classDegree },
          { label: "Öğrenci No", value: student.value.studentNo },
          { label: "Şehir", value: student.value.city },
          { label: "Telefon Numarası", value: student.value.phoneNumber },
          { label: "Email", value: student.value.email },
          {
            label: "Üyelik Onayı",
            value: student.value.approvement ? "Onaylandı" : "Onaylanmadı",
          },
          {
            label: "İletişim Tercihi",
            value: student.value.communicationPreference,
          },
          {
            label: "KVKK",
            value: student.value.kvkk ? "Onaylandı" : "Onaylanmadı",
          },
          { label: "Üniversite Adı", value: student.value.university.name },
          { label: "Fakülte Adı", value: student.value.faculty.name },
          { label: "Bölüm Adı", value: student.value.department.name },
          {
            label: "Üye Olduğu Gruplar",
            value: student.value.groups.map((group) => group.name).join(", "),
          },
        ];
      }
    };

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };

    watch(student, (newStudent) => {
      if (newStudent) {
        updateTableItems();
      }
    });

    return {
      tcNo,
      student,
      fetchStudent,
      formatDate,
      loading,
      error,
      tableItems,
    };
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

input,
button {
  margin-top: 10px;
  display: block;
}
</style>
