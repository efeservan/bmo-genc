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
              id="update-tab"
              data-bs-toggle="pill"
              href="#update-panel"
              role="tab"
              aria-controls="update-panel"
              aria-selected="true"
              style="color: red"
              >Bilgi Güncelle</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="internship-tab"
              data-bs-toggle="pill"
              href="#vinternship-panel"
              role="tab"
              aria-controls="internship-panel"
              aria-selected="false"
              style="color: red"
              >Staj İşlemleri</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="group-tab"
              data-bs-toggle="pill"
              href="#group-panel"
              role="tab"
              aria-controls="group-panel"
              aria-selected="false"
              style="color: red"
              >Bmo Grup ve Komisyon İşlemleri</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="mentor-tab"
              data-bs-toggle="pill"
              href="#mentor-panel"
              role="tab"
              aria-controls="mentor-panel"
              aria-selected="false"
              style="color: red"
              >Mentörlük İşlemleri</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="event-tab"
              data-bs-toggle="pill"
              href="#event-panel"
              role="tab"
              aria-controls="event-panel"
              aria-selected="false"
              style="color: red"
              >Etkinlik ve Duyurular</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="settings-tab"
              data-bs-toggle="pill"
              href="#settings-panel"
              role="tab"
              aria-controls="settings-panel"
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
              id="update-panel"
              role="tabpanel"
              aria-labelledby="update-tab"
            >
              <UpdateStudent />
            </div>
            <div
              class="tab-pane fade"
              id="internship-panel"
              role="tabpanel"
              aria-labelledby="internship-tab"
            >
              <InternshipApply />
            </div>
            <div
              class="tab-pane fade"
              id="group-panel"
              role="tabpanel"
              aria-labelledby="group-tab"
            >
              <StudentGroup />
            </div>
            <div
              class="tab-pane fade"
              id="mentor-panel"
              role="tabpanel"
              aria-labelledby="mentor-tab"
            >
              <StudentMentor />
            </div>
            <div
              class="tab-pane fade"
              id="event-panel"
              role="tabpanel"
              aria-labelledby="event-tab"
            >
              <StudentEvent />
            </div>
            <div
              class="tab-pane fade"
              id="settings-panel"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <StudentSettings />
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
import StudentApp from '../adminpanel/StudentApp.vue'
import UpdateStudent from '../student/UpdateStudent.vue'
import StudentGroup from '../student/StudentGroup.vue';

export default {
  name: 'StudentDashboard',

  components: {
    UpdateStudent,
    StudentApp,
    InternshipApply,
    StudentGroup,
    FooterApp
  }
}
</script>

<style></style>
