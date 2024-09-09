<template>
  <form @submit.prevent="onSubmit">
    <div class="container-fluid">
      <div class="form-group-row">
        <h3>Nüfus Bilgileri</h3>
        <GetStudent @studentFetched="populateFormData"/>
        <div class="form-group row mb-2">
          <label for="name" class="col-sm-2 col-form-label"><h6>Adı</h6></label>
          <div class="col-sm-6">
            <input
              v-model="form.name"
              type="text"
              class="form-control form-control-sm"
              id="name"
              inputmode="text"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="surname" class="col-sm-2 col-form-label"
            ><h6>Soyadı</h6></label
          >
          <div class="col-sm-6">
            <input
              v-model="form.surname"
              type="text"
              class="form-control form-control-sm"
              id="surname"
              inputmode="text"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="tcNo" class="col-sm-2 col-form-label"
            ><h6>TC Kimlik No</h6></label
          >
          <div class="col-sm-6">
            <input
              v-model="form.tcNo"
              type="text"
              class="form-control form-control-sm"
              id="tcNo"
              :class="{ 'is-invalid': !isTcNoValid }"
              required
            />
            <div v-if="!isTcNoValid" class="invalid-feedback">
              TC Kimlik No 11 rakamdan oluşmalıdır.
            </div>
          </div>
        </div>

        <div class="form-group row mb-2">
          <label for="fatherName" class="col-sm-2 col-form-label"
            ><h6>Baba Adı</h6></label
          >
          <div class="col-sm-6">
            <input
              v-model="form.fatherName"
              type="text"
              class="form-control form-control-sm"
              id="fatherName"
              inputmode="text"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="motherName" class="col-sm-2 col-form-label"
            ><h6>Ana Adı</h6>
          </label>
          <div class="col-sm-6">
            <input
              v-model="form.motherName"
              type="text"
              class="form-control form-control-sm"
              id="motherName"
              inputmode="text"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="birthDate" class="col-sm-2 col-form-label"
            ><h6>Doğum Tarihi</h6>
          </label>
          <div class="col-sm-6">
            <input
              v-model="form.birthDate"
              type="text"
              class="form-control form-control-sm"
              id="birthDate"
              inputmode="text"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="homeTown" class="col-sm-2 col-form-label"
            ><h6>Doğum Yeri</h6></label
          >
          <div class="col-sm-6">
            <input
              v-model="form.homeTown"
              type="text"
              class="form-control form-control-sm"
              id="homeTown"
              inputmode="text"
            />
          </div>
        </div>
      </div>
      <div class="form-group-row">
        <h3>Öğrenim Bilgileri</h3>
        <UniversityList
          v-model="form.selectedUniversityId"
          ref="universityList"
        />
        <FacultyList v-model="form.selectedFacultyId" ref="facultyList" />
        <DepartmentList
          v-model="form.selectedDepartmentId"
          ref="departmentList"
        />
        <div class="form-group row mb-2">
          <label for="classDegree" class="col-sm-2 col-form-label"
            ><h6>Kayıtlı Olduğu Sınıf</h6></label
          >
          <div class="col-sm-6">
            <input
              v-model="form.classDegree"
              type="text"
              class="form-control form-control-sm"
              id="classDegree"
              inputmode="text"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="studentNo" class="col-sm-2 col-form-label"
            ><h6>Öğrenci Numarası</h6>
          </label>
          <div class="col-sm-6">
            <input
              v-model="form.studentNo"
              type="text"
              class="form-control form-control-sm"
              id="studentNo"
              inputmode="text"
            />
          </div>
        </div>

        <div class="form-group-row">
          <label><h3>İletişim Bilgileri</h3></label>
          <div class="form-group row mb-2">
            <label for="city" class="col-sm-2 col-form-label"
              ><h6>Adres</h6>
            </label>
            <div class="col-sm-6">
              <textarea
                v-model="form.city"
                type="text"
                class="form-control form-control-sm"
                id="city"
                inputmode="text"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="phoneNumber" class="col-sm-2 col-form-label"
              ><h6>Telefon</h6>
            </label>
            <div class="col-sm-6">
              <input
                v-model="form.phoneNumber"
                type="text"
                class="form-control form-control-sm"
                id="phoneNumber"
                inputmode="text"
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="email" class="col-sm-2 col-form-label"
              ><h6>Email</h6></label
            >
            <div class="col-sm-6">
              <input
                v-model="form.email"
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="eposta@xxx.edu.tr"
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="communicationPreference" class="col-sm-2 col-form-label"
              ><h6>İletişim Tercihi</h6></label
            >
            <div class="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Telefon"
                  id="phoneOption"
                  name="communicationPreference"
                  v-model="form.communicationPreference"
                />
                <label class="form-check-label" for="phoneOption">
                  Telefon</label
                >
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Email"
                  name="communicationPreference"
                  id="emailOption"
                  v-model="form.communicationPreference"
                  checked
                />
                <label class="form-check-label" for="emailOption">
                  Email
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-danger" :disabled="!isFormValid">
          Kaydet
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import UniversityList from "../university/UniversityList.vue";
import FacultyList from "../faculty/FacultyList.vue";
import DepartmentList from "../department/DepartmentList.vue";
import GetStudent from "./GetStudent.vue";

export default {
  components: {
    UniversityList,
    FacultyList,
    DepartmentList,
    GetStudent,
  },
  data() {
    return {
      form: {
        tcNo: "",
        name: "",
        surname: "",
        fatherName: "",
        motherName: "",
        birthDate: "",
        homeTown: "",
        selectedUniversityId: null,
        selectedUniversityName: "",
        selectedFacultyName: "",
        selectedFacultyId: null,
        selectedDepartmentId: null,
        selectedDepartmentName: "",
        studentNo: "",
        classDegree: "",
        city: "",
        phoneNumber: "",
        email: "",
        communicationPreference: "",
      },
      show: true,
    };
  },
  computed: {
    // Validation for TC No
    isTcNoValid() {
      const tcNoPattern = /^\d{11}$/;
      return tcNoPattern.test(this.form.tcNo);
    },
    // Form validation (can add other validations if needed)
    isFormValid() {
      return this.isTcNoValid;
    },
  },
  methods: {
    populateFormData(student) {
      this.form = {
        ...this.form,
        tcNo: student.tcNo,
        name: student.name,
        surname: student.surname,
        fatherName: student.fatherName,
        motherName: student.motherName,
        birthDate: student.birthDate,
        homeTown: student.homeTown,
        selectedUniversityName: student.university,
        selectedFacultyName: student.faculty,
        selectedDepartmentName: student.department,
        studentNo: student.studentNo,
        classDegree:student.classDegree,
        city: student.city,
        phoneNumber: student.phoneNumber,
        email: student.email,
        communicationPreference: student.communicationPreference,
      };
    },
    async onSubmit() {
      const university = this.getUniversityNameById(
        this.form.selectedUniversityId
      );
      const faculty = this.getFacultyNameById(this.form.selectedFacultyId);
      const department = this.getDepartmentNameById(
        this.form.selectedDepartmentId
      );

      const formattedBirthDate = new Date(this.form.birthDate).toISOString().split("T")[0];

      const payload = {
        tcNo: this.form.tcNo,
        studentNo: this.form.studentNo,
        name: this.form.name,
        surname: this.form.surname,
        email: this.form.email,
        fatherName: this.form.fatherName,
        motherName: this.form.motherName,
        homeTown: this.form.homeTown,
        birthDate: formattedBirthDate,
        city: this.form.city,
        university,
        faculty,
        department,
        classDegree: this.form.classDegree,
        phoneNumber: this.form.phoneNumber,
        communicationPreference: this.form.communicationPreference,
      };
      console.log("on Submit : ", JSON.stringify(payload, null, 2));

      try {
        const response = await axios.put(
          "http://localhost:8080/api/student/update",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Server Response:", response.data);
        this.onReset();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },

    getUniversityNameById(id) {
      const university = this.$refs.universityList.universities.find(
        (u) => u.id === id
      );
      return university ? university.name : "";
    },
    getFacultyNameById(id) {
      const faculty = this.$refs.facultyList.faculties.find((f) => f.id === id);
      return faculty ? faculty.name : "";
    },
    getDepartmentNameById(id) {
      const department = this.$refs.departmentList.departments.find(
        (d) => d.id === id
      );
      return department ? department.name : "";
    },
    onReset(event) {
      console.log("on Reset : ", this.form);
      this.form = {
        tcNo: "",
        name: "",
        surname: "",
        fatherName: "",
        motherName: "",
        birthDate: "",
        homeTown: "",
        selectedUniversityId: null,
        selectedUniversityName: "",
        selectedFacultyName: "",
        selectedFacultyId: null,
        selectedDepartmentId: null,
        selectedDepartmentName: "",
        studentNo: "",
        classDegree: "",
        city: "",
        phoneNumber: "",
        email: "",
        communicationPreference: "",
      };
    },
  },
};
</script>
