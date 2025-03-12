<template>
    <main>
        <Navbar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
                <h2 class="text-center mb-3">Add Work</h2>
                <form @submit.prevent="addWork">
                    <!--name-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="name" class="form-label">Наименование</label>
                            <input id="name" type="text" name="name" class="form-control" placeholder="наименование"
                                   required v-model="work.name">
                        </div>
                    </div>


                    <!--Email-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="units" class="form-label">Ед. изм.</label>
                            <input id="units" type="text" name="units" class="form-control" placeholder="ед. изм."
                                   required v-model="work.units">
                        </div>
                    </div>

                    <!--Phone Number-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="pNo" class="form-label">Количество</label>
                            <input id="documents" type="number" step="0.01" name="documents" class="form-control"
                                   placeholder="Паспорта сертификаты" required v-model="work.quantity">
                        </div>
                    </div>

                    <!--Standard-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="pNo" class="form-label">ГОСТ, ТУ</label>
                            <input id="documents" type="text" name="documents" class="form-control"
                                   placeholder="ГОСТ, ТУ" required v-model="work.standardId">
                        </div>
                    </div>

                    <!--SubObject-->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="pNo" class="form-label">Подобъект</label>
                            <input id="documents" type="text" name="documents" class="form-control"
                                   placeholder="ГОСТ, ТУ" required v-model="work.subObjectId">
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
    name: 'AddWork',
    components: {
        Navbar
    },

    data() {
        return {
            work: {
                name: '',
                units: '',
                quantity: '',
                done: 0,
                standardId: '',
                subObjectId: ''
            }
        }
    },

    methods: {
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
        }
    },

}


</script>