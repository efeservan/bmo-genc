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
              id="student-tab"
              data-bs-toggle="pill"
              href="#student-panel"
              role="tab"
              aria-controls="student-panel"
              aria-selected="true"
              style="color: red"
              >Öğrenci İşlemleri</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="university-tab"
              data-bs-toggle="pill"
              href="#university-panel"
              role="tab"
              aria-controls="university-panel"
              aria-selected="false"
              style="color: red"
              >Üniversite İşlemleri</a
            >
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              id="groups-tab"
              data-bs-toggle="pill"
              href="#groups-panel"
              role="tab"
              aria-controls="groups-panel"
              aria-selected="false"
              style="color: red"
              >Öğrenci Grupları</a
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
              >Mentörlük</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="internship-tab"
              data-bs-toggle="pill"
              href="#internship-panel"
              role="tab"
              aria-controls="internship-panel"
              aria-selected="false"
              style="color: red"
              >Staj/Stajyer İşlemleri</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="camping-tab"
              data-bs-toggle="pill"
              href="#camping-panel"
              role="tab"
              aria-controls="camping-panel"
              aria-selected="false"
              style="color: red"
              >Bmo-Kamp İşlemleri</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="reports-tab"
              data-bs-toggle="pill"
              href="#reports-panel"
              role="tab"
              aria-controls="reports-panel"
              aria-selected="false"
              style="color: red"
              >Raporlar</a
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
              id="student-panel"
              role="tabpanel"
              aria-labelledby="student-tab"
            >
              <AdminStudent />
            </div>
            <div
              class="tab-pane fade"
              id="university-panel"
              role="tabpanel"
              aria-labelledby="university-tab"
            >
              <AdminUniversity />
            </div>
            <div
              class="tab-pane fade"
              id="groups-panel"
              role="tabpanel"
              aria-labelledby="groups-tab"
            >
              <AdminGroups />
            </div>
            <div
              class="tab-pane fade"
              id="mentor-panel"
              role="tabpanel"
              aria-labelledby="mentor-tab"
            >
              <AdminMentor />
            </div>
            <div
              class="tab-pane fade"
              id="internship-panel"
              role="tabpanel"
              aria-labelledby="internship-tab"
            >
              <AdminInternship />
            </div>
            <div
              class="tab-pane fade"
              id="camping-panel"
              role="tabpanel"
              aria-labelledby="camping-tab"
            >
              <AdminCamp />
            </div>
            <div
              class="tab-pane fade"
              id="reports-panel"
              role="tabpanel"
              aria-labelledby="reports-tab"
            >
              <AdminReports />
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
import FooterApp from './FooterApp.vue'
import AdminStudent from '../panel/AdminStudent.vue'
import AdminUniversity from '../panel/AdminUniversity.vue'
import AdminGroups from '../panel/AdminGroups.vue'
import AdminMentor from '../panel/AdminMentor.vue'
import AdminInternship from '../panel/AdminInternship.vue'
import AdminCamp from '../panel/AdminCamp.vue'
import AdminReports from '../panel/AdminReports.vue'

export default {
  name: 'AdminDashboard',

  components: {
    AdminStudent,
    AdminUniversity,
    AdminGroups,
    AdminMentor,
    AdminInternship,
    AdminCamp,
    AdminReports,
    FooterApp
  }
}
</script>

<style></style>
