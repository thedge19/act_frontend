<template>
  <main>
    <Navbar/>
    <div class="container">
      <div class="row">
        <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;">
          <h1 class="text-center">Работы</h1>
          <!--Add button -->
          <div class="d-flex justify-content-start">
            <a href="/addAct" class="btn btn-outline-primary">Добавить акт</a>
            <a href="/excel" class="btn btn-outline-success mx-3">Выгрузить в Excel</a>
          </div>
          <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true"
               style="position: relative">
            <table class="table table-striped mb-0">
              <thead style="background-color: #002d72;">
              <tr style="color: red;">
                <th href="#" @click.prevent="filterBySubObject" class="text-center" scope="col" style="color: black; width: 6%">##</th>
                <th class="text-center" scope="col" style="color: black; width: 5%">Дата</th>
                <th class="text-center" scope="col" style="color: black; width: 15%">Объект</th>
                <th class="text-center" scope="col" style="color: black; width: 20%">Выполненные
                  работы
                </th>
                <th class="text-center" scope="col" style="color: black; width: 6%">Начало</th>
                <th class="text-center" scope="col" style="color: black; width: 25%">Материалы</th>
                <th class="text-center" scope="col" style="color: black; width: 20%">Предъявлены
                  документы
                </th>
                <th class="text-center" scope="col" style="color: black; width: 25%">Выполнено в
                  соответствии с
                </th>
                <th class="text-center" scope="col" style="color: black; width: 20%">Разрешается
                  выполнение
                </th>
                <th class="text-center" scope="col" style="color: black; width: 12%">Действие</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="act in acts" :style="act.inRegistry === null ? `font-weight: bold` : ``">
                <td style="width: 6%">{{ act.actNumber }}</td>
                <td style="width: 4%">{{ act.endDate }}</td>
                <td style="width: 15%">{{ act.projectName }}</td>
                <td style="width: 20%">{{ act.works }}</td>
                <td style="width: 6%">{{ act.startDate }}</td>
                <td style="width: 25%">{{ act.materials }}</td>
                <td style="width: 20%">{{ act.submittedDocuments }}</td>
                <td style="width: 25%">{{ act.inAccordWith }}</td>
                <td style="width: 20%">{{ act.nextWorks }}</td>
                <td style="width: 12%">
                  <a class="btn btn-primary" :href="`/editAct/${act.id}`">Edit</a>
                  <button class="btn btn-danger mx-2" @click="deleteAct(act.id)">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  },

  data() {
    return {
      acts: [],
      path: 'http://localhost:8080/acts',
    }
  },

  mounted() {
    this.getActs()
  },

  methods: {
    getActs() {
      fetch(this.path,
      )
          .then(res => res.json())
          .then(data => {
            this.acts = data
            console.log(data)
          })
    },

    deleteAct(id) {
      fetch(`http://localhost:8080/acts/${id}`, {
        method: 'DELETE'
      })
          .then(data => {
            console.log(data)
            this.getActs()
          })
    },

    filterBySubObject() {
      this.path = `http://localhost:8080/acts/filterBySubObject`
      this.getActs()
    },

  },

}
</script>
<style scoped>
html,
body,

table {
  table-layout: fixed;
}


table td,
table th {
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
}

thead th {
  color: #fff;
}

.table-scroll {
  border-radius: .5rem;
}

.table-scroll table thead th {
  font-size: 1.25rem;
}

thead {
  top: 0;
  position: sticky;
}
</style>
