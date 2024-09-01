<template>
  <div id="app">
    <div class="d-flex w-100">
      <div class="sidebar bg-light flex-shrink-0 p-5">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="/src/assets/bmologo.png" width="90" height="90" alt="" />
          </a>
        </nav>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
              style="color: red"
              >Bilgi Güncelle</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              style="color: red"
              >Staj İşlemleri</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              style="color: red"
              >Bmo Grup ve Komisyon İşlemleri</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              style="color: red"
              >Mentörlük İşlemleri</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              style="color: red"
              >Etkinlik ve Duyurular</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              style="color: red"
              >Ayarlar</a
            >
          </li>
        </ul>
      </div>
      <div class="container-fluid">
        <div class="container-header"></div>
        <div class="container-body">
          <div class="tab-content flex-grow-1 p-5" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <UpdateStudent />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <InternshipApply />
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <StudentApp />
            </div>
          </div>
          <div class="container-footer text-muted"></div>
        </div>
      </div>
    </div>
  </div>
  <FooterApp />
</template>

<script lang="ts">
import FooterApp from '../main/FooterApp.vue'
import InternshipApply from '../student/InternshipApply.vue'
import StudentApp from '../panel/StudentApp.vue'
import UpdateStudent from '../student/UpdateStudent.vue'

export default {
  name: 'StudentDashboard',

  components: {
    UpdateStudent,
    StudentApp,
    InternshipApply,
    FooterApp
  }
}
</script>

<style></style>
