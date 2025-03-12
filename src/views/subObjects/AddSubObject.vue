<template>
    <main>
        <Navbar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
                <h2 class="text-center mb-3">Add SubObject</h2>
                <form @submit.prevent="addSubObject">
                    <!--name-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="name" class="form-label">Наименование</label>
                            <input id="name" type="text" name="name" class="form-control" placeholder="наименование"
                                   required v-model="subObject.name">
                        </div>
                    </div>


                    <!--Email-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="units" class="form-label">Аббревиатура</label>
                            <input id="units" type="text" name="units" class="form-control" placeholder="ед. изм."
                                   required v-model="subObject.title">
                        </div>
                    </div>

                    <!--Phone Number-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="pNo" class="form-label">Объект</label>
                            <input id="documents" type="text" name="documents" class="form-control"
                                   placeholder="Паспорта сертификаты" required v-model="subObject.project">
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
    name: 'AddSubObject',
    components: {
        Navbar
    },

    data() {
        return {
            subObject: {
                name: '',
                title: '',
                project: '',
            }
        }
    },

    methods: {
        addSubObject() {
            fetch('http://localhost:8080/subObjects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.subObject)
            })
                .then(data => {
                    console.log(data)
                    this.$router.push("/subObjects");
                })
        }
    }
}


</script>