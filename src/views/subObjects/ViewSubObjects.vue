<template>
    <main>
        <Navbar />

        <!-- Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">Подобъекты</h1>
                    <!--Add button -->
                    <a href="/addSubObject" class="btn btn-primary">Добавить подобъект</a>
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Наименование</th>
                            <th scope="col">Обозначение</th>
                            <th scope="col">Объект</th>
                            <th scope="col" style="width:15%">Действие</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="subObject in subObjects" :key="subObject.id">
                            <th scope="row">{{subObject.id}}</th>
                            <td>{{subObject.name}}</td>
                            <td>{{subObject.title}}</td>
                            <td>{{subObject.project.name}}</td>
                            <td>
                              <a class="btn btn-primary" :href="`/editSubObject/${subObject.id}`">Edit</a>
                              <button class="btn btn-danger mx-2" @click="deleteSubObject(subObject.id)">Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>

    </main>
</template>


<script>
import Navbar from '../../components/Navbar.vue'

    export default {
        name: 'ViewSubObjects',
        components: {
            Navbar
        },
        data() {
            return {
                subObjects: []
            }
        },

        beforeMount(){
            this.getSubObjects()
        },

        methods: {
            getSubObjects(){
                fetch('http://localhost:8080/subobjects',

                )
                .then(res => res.json())
                .then(data => {
                    this.subObjects = data
                    console.log(data)
                })
            },
            deleteSubObject(id){
                fetch(`http://localhost:8080/subobjects/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getSubObjects()
                })
            }
        }
    }

</script>