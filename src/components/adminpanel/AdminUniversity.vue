<template>
  <div class="container mt-4">
    <div class="row text-center">
      <!-- Container 1: Add Student -->
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'AddUniversity'">
          <i class="bi bi-plus-circle" style="font-size: 48px"></i>
          <p>Ekleme İşlemleri</p>
        </div>
      </div>
      <!-- Container 2: Add Student -->
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'AddStudent'">
          <i class="bi bi-plus-circle" style="font-size: 48px"></i>
          <p>Güncelleme İşlemleri</p>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <!-- Container 3: Update Student -->
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'UpdateStudent'">
          <i class="bi bi-pencil-square" style="font-size: 48px"></i>
          <p>Raporlar</p>
        </div>
      </div>
      <!-- Container 4: View Reports -->
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'UpdateUniversity'">
          <i class="bi bi-bar-chart" style="font-size: 48px"></i>
          <p>Buraya Ne gelecek</p>
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
import UpdateUniversity from '../university/UpdateUniversity.vue'
import AddUniversity from '../university/AddUniversity.vue'

export default {
  data() {
    return {
      currentComponent: null // Initially, no component is displayed
    }
  },
  components: {
    AddUniversity,
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
  transition: background-color 0.3s;
}

.icon-container:hover {
  background-color: #f0f0f0;
}

.icon-container i {
  display: block;
  margin-bottom: 8px;
}
</style>
