<template>
  <form @submit.prevent="onSubmit">
    <div class="container-fluid">
      <div class="form-group-row">
        <h3>Nüfus Bilgileri</h3>
        <div class="form-group row mb-2">
          <label for="tcNo" class="col-sm-2 col-form-label"><h6>TC Kimlik No</h6></label>
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
          <label for="name" class="col-sm-2 col-form-label"><h6>Adınız</h6></label>
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
          <label for="surname" class="col-sm-2 col-form-label"><h6>Soyadınız</h6></label>
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
          <label for="fatherName" class="col-sm-2 col-form-label"><h6>Baba Adı</h6></label>
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
          <label for="motherName" class="col-sm-2 col-form-label"><h6>Ana Adı</h6> </label>
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
          <label for="birthDate" class="col-sm-2 col-form-label"><h6>Doğum Tarihi</h6> </label>
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
          <label for="homeTown" class="col-sm-2 col-form-label"><h6>Doğum Yeri</h6></label>
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
        <UniversityList v-model="form.selectedUniversityId" ref="universityList" />
        <FacultyList v-model="form.selectedFacultyId" ref="facultyList" />
        <DepartmentList v-model="form.selectedDepartmentId" ref="departmentList" />
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
          <label for="studentNo" class="col-sm-2 col-form-label"><h6>Öğrenci Numarası</h6> </label>
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
            <label for="city" class="col-sm-2 col-form-label"><h6>Adres</h6> </label>
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
            <label for="phoneNumber" class="col-sm-2 col-form-label"><h6>Telefon</h6> </label>
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
            <label for="email" class="col-sm-2 col-form-label"><h6>Email</h6></label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="eposta@xxx.edu.tr"
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="iletisim" class="col-sm-2 col-form-label"><h6>İletişim Tercihi</h6></label>
            <div class="col-sm-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Telefon"
                  id="phoneOption"
                  name="communicationPreference"
                  v-model="communicationPreferences"
                />
                <label class="form-check-label" for="phoneOption"> Telefon</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Email"
                  name="communicationPreference"
                  id="emailOption"
                  v-model="communicationPreferences"
                  checked
                />
                <label class="form-check-label" for="emailOption"> Email </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-danger" :disabled="!isFormValid">Kaydet</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import UniversityList from '../university/UniversityList.vue'
import FacultyList from '../faculty/FacultyList.vue'
import DepartmentList from '../department/DepartmentList.vue'

export default {
  components: {
    UniversityList,
    FacultyList,
    DepartmentList
  },
  data() {
    return {
      form: {
        tcNo: '',
        name: '',
        surname: '',
        fatherName: '',
        motherName: '',
        birthDate: '',
        homeTown: '',
        selectedUniversityId: null,
        selectedUniversityName: '',
        selectedFacultyName: '',
        selectedFacultyId: null,
        selectedDepartmentId: null,
        selectedDepartmentName: '',
        studentNo: '',
        classDegree: '',
        city: '',
        phoneNumber: '',
        email: '',
        communicationPreferences: ''
        //contactPreference: 'phone'
      },
      show: true
    }
  },
  computed: {
    // Validation for TC No
    isTcNoValid() {
      const tcNoPattern = /^\d{11}$/
      return tcNoPattern.test(this.form.tcNo)
    },
    // Form validation (can add other validations if needed)
    isFormValid() {
      return this.isTcNoValid
    }
  },
  methods: {
    async onSubmit() {
      const university = this.getUniversityNameById(this.form.selectedUniversityId)
      const faculty = this.getFacultyNameById(this.form.selectedFacultyId)
      const department = this.getDepartmentNameById(this.form.selectedDepartmentId)

      console.log('University Name:', university)
      console.log('Faculty Name:', faculty)
      console.log('Department Name:', department)

      const payload = {
        tcNo: this.form.tcNo,
        studentNo: this.form.studentNo,
        name: this.form.name,
        surname: this.form.surname,
        email: this.form.email,
        fatherName: this.form.fatherName,
        motherName: this.form.motherName,
        homeTown: this.form.homeTown,
        birthDate: this.form.birthDate,
        city: this.form.city,
        university,
        faculty,
        department,
        classDegree: this.form.classDegree,
        phoneNumber: this.form.phoneNumber,
        communicationPreferences: this.form.communicationPreferences
      }
      console.log('on Submit : ', payload)
      try {
        const response = await axios.post('http://localhost:8080/api/student/add', payload)
        alert('Form submitted successfully!')
        console.log('Server Response:', response.data)
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('There was an error submitting the form. Please try again.')
      }
    },

    getUniversityNameById(id) {
      const university = this.$refs.universityList.universities.find((u) => u.id === id)
      return university ? university.name : ''
    },
    getFacultyNameById(id) {
      const faculty = this.$refs.facultyList.faculties.find((f) => f.id === id)
      return faculty ? faculty.name : ''
    },
    getDepartmentNameById(id) {
      const department = this.$refs.departmentList.departments.find((d) => d.id === id)
      return department ? department.name : ''
    },
    onReset(event) {
      console.log('on Reset : ', this.form)
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.tcNo = null
      this.form.address = ''
    }
  }
}
</script>
