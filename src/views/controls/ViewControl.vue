<template>
    <main>
        <Navbar/>

        <!-- Table-->
        <div class="container">
            <div style="position: absolute; top: 0; bottom: 0; left: 0; right: 0;">
                <h1 class="text-center">Входняк</h1>
                <!--Add button -->
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">##</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Материалы</th>
                        <th scope="col">Документы</th>
                        <th scope="col">ГОСТ, ТУ</th>
                        <th scope="col" style="width:15%">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="control in controls" :key="control.id">
                        <th scope="row">{{ control.controlNumber }}</th>
                        <td>{{ control.date }}</td>
                        <td>{{ control.materials }}</td>
                        <td>{{ control.documents }}</td>
                        <td>{{ control.standard }}</td>
                        <td>
                            <a class="btn btn-primary" :href="`/editControl/${control.id}`">Edit</a>
                            <button class="btn btn-danger mx-2" @click="deleteControl(control.id)">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>


<script>
import Navbar from '../../components/Navbar.vue'

export default {
    name: 'ViewControl',
    components: {
        Navbar
    },
    data() {
        return {
            controls: []
        }
    },

    beforeMount() {
        this.getControls()
    },

    methods: {
        getControls() {
            fetch('http://localhost:8080/acts/entrance',
            )
                .then(res => res.json())
                .then(data => {
                    this.controls = data
                    console.log(data)
                })
        },
        deleteControl(id) {
            fetch(`http://localhost:8080/acts/entrance/${id}`, {
                method: 'DELETE'
            })
                .then(data => {
                    console.log(data)
                    this.getControls()
                })
        }
    }
}

</script>