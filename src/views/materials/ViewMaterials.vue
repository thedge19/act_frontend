<template>
    <main>
        <Navbar />

        <!-- Table-->
        <div class="container">
                    <h1 class="text-center">Материалы</h1>
                    <!--Add button -->
                    <a href="/addMaterial" class="btn btn-primary">Добавить материал</a>
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Наименование</th>
                            <th scope="col">Ед. изм.</th>
                            <th scope="col">Документы</th>
                            <th scope="col">Автор</th>
                            <th scope="col">ГОСТ, ТУ</th>
                            <th scope="col">Кол. стр.</th>
                            <th scope="col" style="width:15%">Действие</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="material in materials" :key="material.id">
                            <td>{{material.name}}</td>
                            <td>{{material.units}}</td>
                            <td>{{material.documents}}</td>
                            <td>{{material.author}}</td>
                            <td>{{material.standard}}</td>
                            <td>{{material.numberOfPages}}</td>
                            <td>
                              <a class="btn btn-primary" :href="`/editMaterial/${material.id}`">Edit</a>
                              <button class="btn btn-danger mx-2" @click="deleteMaterial(material.id)">Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
            </div>
    </main>
</template>


<script>
import Navbar from '../../components/Navbar.vue'

    export default {
        name: 'ViewMaterials',
        components: {
            Navbar
        },
        data() {
            return {
                materials: []
            }
        },

        beforeMount(){
            this.getMaterials()
        },

        methods: {
            getMaterials(){
                fetch('http://localhost:8080/materials',

                )
                .then(res => res.json())
                .then(data => {
                    this.materials = data
                    console.log(data)
                })
            },
            deleteMaterial(id){
                fetch(`http://localhost:8080/materials/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getMaterials()
                })
            }
        }
    }

</script>