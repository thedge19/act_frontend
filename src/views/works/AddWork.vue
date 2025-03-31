<template>
  <main>
    <Navbar/>
    <div class="my-5">
      <div class="mx-auto w-25 " style="max-width:100%;">
        <h2 class="text-center mb-3">Добавить работы</h2>
        <form @submit.prevent="addWork">
          <!--name-->
          <div class="d-flex">
            <label class="radio mr-1">
              <input type="radio" @change="onChangeProject()" name="add" :value="4"
                     v-model="projectId"
                     checked>
              <span> <i class="fa fa-user"></i> Грушовая </span>
            </label>
            <label class="radio m-lg-auto">
              <input type="radio" @change="onChangeProject()" name="add" :value="5"
                     v-model="projectId">
              <span> <i class="fa fa-plus-circle"></i> Шесхарис </span>
            </label>
          </div>

          <div class="input-group mb-3 mt-3">
            <label class="input-group-text" for="inputGroupSelect01">Подобъекты</label>
            <select class="form-select" id="inputGroupSelect01"
                    v-model="work.subObjectId">
              <option selected>Choose...</option>
              <option style="width: min-content"
                      v-for="subObject in subObjects" :value="subObject.id">{{ subObject.name }}
              </option>
            </select>
          </div>

          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="name" class="form-label">Наименование</label>
              <input id="name" type="text" name="name" class="form-control" placeholder="наименование"
                     required v-model="work.name">
            </div>
          </div>


          <!--Units-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="units" class="form-label">Ед. изм.</label>
              <input id="units" type="text" name="units" class="form-control" placeholder="ед. изм."
                     required v-model="work.units">
            </div>
          </div>

          <!--Quantity-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="pNo" class="form-label">Количество</label>
              <input id="quantity" type="number" step="0.01" name="quantity" class="form-control"
                     placeholder="Количество" required v-model="work.quantity">
            </div>
          </div>

          <!--Standard-->
          <div class="input-group mb-3 mt-3">
            <label class="input-group-text" for="inputGroupSelect01">СП:</label>
            <select class="form-select" id="inputGroupSelect01"
                    v-model="work.standardId">
              <option selected>Choose...</option>
              <option style="width: min-content"
                      v-for="standard in standards" :value="standard.id">{{ standard.name }}
              </option>
            </select>
          </div>

          <div class="row">
            <div class="col-md-12 form-group">
              <input class="btn btn-primary w-100" type="submit" value="Submit">
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>


<script>
import Navbar from '../../components/Navbar.vue';

export default {
  name: 'AddWork',
  components: {
    Navbar
  },

  data() {
    return {
      projectId: 4,

      subObjects: [],
      standards: [],

      work: {
        name: '',
        units: '',
        quantity: '',
        done: 0,
        standardId: '',
        subObjectId: 15
      }
    }
  },

  mounted() {
    this.getSubObjects()
    this.getStandards()
  },

  methods: {

    onChangeProject() {
      this.getSubObjects()
    },

    addWork() {
      fetch('http://localhost:8080/workings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.work)
      })
          .then(data => {
            console.log(data)
            this.$router.push("/works");
          })
    },

    getSubObjects() {
      fetch(`http://localhost:8080/subobjects/${this.projectId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.subObjects = data
          })
    },

    getStandards() {
      fetch(`http://localhost:8080/standards`,
      )
          .then(res => res.json())
          .then(data => {
            this.standards = data
          })
    },
  },

}


</script>