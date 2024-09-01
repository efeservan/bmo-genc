<template>
  <form @submit.prevent="onSubmit">
    <div class="container-fluid">
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
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div class="form-group row mb-2">
            <label for="email" class="col-sm-2 col-form-label"><h6>İletişim Tercihi</h6></label>
            <div class="col-sm-6">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault"> Telefon</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked"> Email </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-danger">Kaydet</button>
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
        email: ''
        //contactPreference: 'phone'
      },
      show: true
    }
  },
  methods: {
    async onSubmit() {
      const universityName = this.getUniversityNameById(this.form.selectedUniversityId)
      const facultyName = this.getFacultyNameById(this.form.selectedFacultyId)
      const departmentName = this.getDepartmentNameById(this.form.selectedDepartmentId)

      console.log('University Name:', universityName)
      console.log('Faculty Name:', facultyName)
      console.log('Department Name:', departmentName)

      const payload = {
        ...this.form,
        universityName,
        facultyName,
        departmentName
      }
      console.log('on Submit : ', this.form.tcNo, ' ', this.form.classDegree)
      console.log('on Submit : ', this.form.name)
      console.log('on Submit : ', this.form.surname)
      console.log('on Submit : ', this.form.selectedUniversityName)
      console.log('on Submit : ', this.form.selectedFacultyName)
      console.log('on Submit : ', this.form.selectedDepartmentName)
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
    },
    validateForm() {
      const tcNoPattern = /^\d{11}$/
      if (!tcNoPattern.test(this.tcNo)) {
        alert('Please enter a valid 11-digit number.')
      } else {
        alert('Form submitted successfully!')
      }
    }
  }
}
</script>
