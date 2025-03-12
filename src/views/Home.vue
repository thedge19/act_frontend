<template>
    <main>
        <Navbar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
                <h2 class="text-center mb-3">Создать акт</h2>
<!--                <form @submit.prevent="addAct">-->
<!--                    &lt;!&ndash;name&ndash;&gt;-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12 form-group mb-3">-->
<!--                            <label for="name" class="form-label">Наименование</label>-->
<!--                            <input id="name" type="text" name="name" class="form-control" placeholder="наименование"-->
<!--                                   required v-model="material.name">-->
<!--                        </div>-->
<!--                    </div>-->


<!--                    &lt;!&ndash;Email&ndash;&gt;-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12 form-group mb-3">-->
<!--                            <label for="units" class="form-label">Ед. изм.</label>-->
<!--                            <input id="units" type="text" name="units" class="form-control" placeholder="ед. изм."-->
<!--                                   required v-model="material.units">-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash;Phone Number&ndash;&gt;-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12 form-group mb-3">-->
<!--                            <label for="pNo" class="form-label">Паспорта сертификаты</label>-->
<!--                            <input id="documents" type="text" name="documents" class="form-control"-->
<!--                                   placeholder="Паспорта сертификаты" required v-model="material.documents">-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    &lt;!&ndash;Gender&ndash;&gt;-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-12 form-group mb-3">-->
<!--                            <label for="pNo" class="form-label">ГОСТ, ТУ</label>-->
<!--                            <input id="documents" type="text" name="documents" class="form-control"-->
<!--                                   placeholder="ГОСТ, ТУ" required v-model="material.standard">-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="row">-->
<!--                        <div class="col-md-12 form-group">-->
<!--                            <input class="btn btn-primary w-100" type="submit" value="Submit">-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div>-->

<!--                    </div>-->
<!--                </form>-->

            </div>
        </div>
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'AddMaterial',
    components: {
        Navbar
    },

    // data() {
    //     return {
    //         material: {
    //             name: '',
    //             units: '',
    //             documents: '',
    //             standard: ''
    //         }
    //     }
    // },
    //
    // methods: {
    //     addAct() {
    //         fetch('http://localhost:8080/materials', {
    //             mode: 'no-cors',
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(this.patient)
    //         })
    //             .then(data => {
    //                 console.log(data)
    //                 this.$router.push("/");
    //             })
    //     }
    // },

}


</script>