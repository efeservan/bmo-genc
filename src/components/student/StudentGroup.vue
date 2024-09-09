<template>
  <div class="container mt-4">
    <div class="row text-center">
      <!-- Container 1: Add Student -->
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'AddStudent'">
          <i class="bi bi-plus-circle" style="font-size: 48px"></i>
          <p>Gruba Kaydol</p>
        </div>
      </div>
      <!-- Container 2: Add Student -->
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'AddStudent'">
          <i class="bi bi-plus-circle" style="font-size: 48px"></i>
          <p>Komisyona Kaydol</p>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'UpdateStudent'">
          <i class="bi bi-pencil-square" style="font-size: 48px"></i>
          <p>Gruplar ve Komisyonlar</p>
        </div>
      </div>
    </div>
    <!-- Display the selected component -->
    <div class="container mt-4">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import AddStudent from '../student/AddStudent.vue'
import UpdateStudent from '../student/UpdateStudent.vue'
import UpdateUniversity from '../university/UpdateUniversity.vue'

export default {
  data() {
    return {
      currentComponent: null // Initially, no component is displayed
    }
  },
  components: {
    AddStudent,
    UpdateStudent,
    UpdateUniversity
  }
}
</script>

<style scoped>
.icon-container {
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.5s;
}

.icon-container:hover {
  background-color: #f0f0f0;
}

.icon-container i {
  display: block;
  margin-bottom: 8px;
}
</style>
