<template>
  <main>
    <Navbar/>
    <div class="my-5">
      <div class="mx-auto w-25 " style="max-width:100%;">
        <h2 class="text-center mb-3">Add Material</h2>
        <form @submit.prevent="addMaterial">
          <!--name-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="name" class="form-label">Наименование</label>
              <input id="name" type="text" name="name" class="form-control" placeholder="наименование"
                     required v-model="material.name">
            </div>
          </div>


          <!--Email-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="units" class="form-label">Ед. изм.</label>
              <input id="units" type="text" name="units" class="form-control" placeholder="ед. изм."
                     required v-model="material.units">
            </div>
          </div>

          <!--Phone Number-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="pNo" class="form-label">Паспорта сертификаты</label>
              <input id="documents" type="text" name="documents" class="form-control"
                     placeholder="Паспорта сертификаты" required v-model="material.documents">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="pNo" class="form-label">Автор сертификата</label>
              <input id="author" type="text" name="author" class="form-control"
                     placeholder="Автор сертификата" required v-model="material.author">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="numberOfPages" class="form-label">Число страниц в сертификате (паспорте)</label>
              <input id="numberOfPages" type="number" name="numberOfPages" class="form-control"
                     placeholder="0" required v-model="material.numberOfPages">
            </div>
          </div>
          <!--ГОСТ, ТУ-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="pNo" class="form-label">ГОСТ, ТУ</label>
              <input id="documents" type="text" name="documents" class="form-control"
                     placeholder="ГОСТ, ТУ" required v-model="material.standard">
            </div>
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
  name: 'AddMaterial',
  components: {
    Navbar
  },

  data() {
    return {
      material: {
        name: '',
        units: '',
        documents: '',
        author: '',
        standard: '',
        numberOfPages: ''
      }
    }
  },

  methods: {
    addMaterial() {
      fetch('http://localhost:8080/materials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.material)
      })
          .then(data => {
            console.log(data)
            this.$router.push("/materials");
          })
    }
  },

}


</script>