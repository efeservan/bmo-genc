import { createRouter, createWebHistory } from 'vue-router'
import ListAllUniversities from '../components/university/UniversityList.vue'
import AddUniversity from '../components/university/AddUniversity.vue'
import UpdateUniversity from '../components/university/UpdateUniversity.vue'
import DeleteUniversity from '../components/university/DeleteUniversity.vue'
import StudentDashboard from '@/components/main/StudentDashboard.vue'
import AdminDashboard from '@/components/main/AdminDashboard.vue'
import UpdateStudent from '@/components/student/UpdateStudent.vue';

const routes = [
  { path: '/all', component: ListAllUniversities },
  { path: '/add', component: AddUniversity },
  { path: '/admin', component: AdminDashboard, name: 'AdminDashboard' },
  { path: '/update', component: UpdateUniversity },
  { path: '/delete', component: DeleteUniversity },
  { path: '/ogrenci', component: StudentDashboard, name: 'StudentDashboard' },
  { path: '/admin/update/:tcNo', name: 'UpdateStudent', component:UpdateStudent, props:true,}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
