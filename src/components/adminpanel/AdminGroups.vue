<template>
  <div class="container">
      <div class="d-flex align-items-center">
          <input v-model="newGroup.name" placeholder="Grup adı" class="form-control me-2" />
          <button @click="addGroup" class="btn btn-primary">Grup Ekle</button>
      </div>
  </div>
  <div class="container">
      <div class="d-flex align-items-center">
          <input v-model="deleteGroup.name" placeholder="Grup adı" class="form-control me-2" />
          <button @click="delGroup" class="btn btn-danger">Grup Sil</button>
      </div>
  </div>
  <div class="container">
      <AddStudentToGroup />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import AddStudentToGroup from '../group/AddStudentToGroup.vue';

export default defineComponent({
  components: {
    AddStudentToGroup, 
  },
  setup(_, { emit }) {
      const newGroup = ref < { name: string } > ({ name: '' })
      const deleteGroup = ref < { name: string } > ({ name: '' })

      const addGroup = async () => {
          try {
              await axios.post('http://localhost:8080/api/group/add', newGroup.value)
              alert('University added successfully!')
              newGroup.value.name = '' // Clear the input
              emit('groupAdded')
          } catch (error) {
              console.error('There was an error adding the group:', error)
          }
      }

      const delGroup = async () => {
          try {
              await axios({
                  method: 'delete',
                  url: 'http://localhost:8080/api/group/delete',
                  data: { name: deleteGroup.value.name },
              });
              alert('University added successfully!')
              deleteGroup.value.name = '' // Clear the input
          } catch (error) {
              console.error('There was an error deleting the group:', error)
          }
      }

      return {
          newGroup,
          addGroup,
          delGroup,
          deleteGroup
      }
  }
})
</script>

<style scoped>
.d-flex {
  margin-top: 10px;
}

input {
  flex: 1;
  /* Make input take the available space */
}
</style>
