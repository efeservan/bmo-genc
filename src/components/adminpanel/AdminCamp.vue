<template>
  <div class="container mt-4">
    <div class="row text-center">
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'AdminGroups'">
          <i class="bi bi-plus-circle" style="font-size: 48px"></i>
          <p>Kamp Sorumlusu Ekleme</p>
        </div>
      </div>
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'AddStudent'">
          <i class="bi bi-plus-circle" style="font-size: 48px"></i>
          <p>Kamp Ders İçeriği Ekleme</p>
        </div>
      </div>
      <div class="col">
        <div class="icon-container" @click="currentComponent = 'AddStudent'">
          <i class="bi bi-plus-circle" style="font-size: 48px"></i>
          <p>Kamp Başvuruları Görüntüleme</p>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import AddStudent from '../student/AddStudent.vue'
import AdminGroups from './AdminGroups.vue';

export default {
  data() {
    return {
      currentComponent: null // Initially, no component is displayed
    }
  },
  components: { AddStudent, AdminGroups }
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
