<template>
    <main>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-24">
                    <h1 class="text-center">Работы</h1>
                    <!--Add button -->
                    <a href="/addAct" class="btn btn-primary">Добавить акт</a>
                    <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true"
                         style="position: relative">
                        <table class="table table-striped mb-0">
                            <thead style="background-color: #002d72;">
                            <tr style="color: red;">
                                <th scope="col" style="color: black;">Class name</th>
                                <th scope="col" style="color: black;">Type</th>
                                <th scope="col" style="color: black;">Hours</th>
                                <th scope="col" style="color: black;">Trainer</th>
                                <th scope="col" style="color: black;">Spots</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Like a butterfly</td>
                                <td>Boxing</td>
                                <td>9:00 AM - 11:00 AM</td>
                                <td>Aaron Chapman</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Mind &amp; Body</td>
                                <td>Yoga</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Adam Stewart</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Crit Cardio</td>
                                <td>Gym</td>
                                <td>9:00 AM - 10:00 AM</td>
                                <td>Aaron Chapman</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Wheel Pose Full Posture</td>
                                <td>Yoga</td>
                                <td>7:00 AM - 8:30 AM</td>
                                <td>Donna Wilson</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Playful Dancer's Flow</td>
                                <td>Yoga</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Donna Wilson</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Zumba Dance</td>
                                <td>Dance</td>
                                <td>5:00 PM - 7:00 PM</td>
                                <td>Donna Wilson</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Zumba Dance</td>
                                <td>Dance</td>
                                <td>5:00 PM - 7:00 PM</td>
                                <td>Donna Wilson</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Zumba Dance</td>
                                <td>Dance</td>
                                <td>5:00 PM - 7:00 PM</td>
                                <td>Donna Wilson</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Zumba Dance</td>
                                <td>Dance</td>
                                <td>5:00 PM - 7:00 PM</td>
                                <td>Donna Wilson</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Cardio Blast</td>
                                <td>Gym</td>
                                <td>5:00 PM - 7:00 PM</td>
                                <td>Randy Porter</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Pilates Reformer</td>
                                <td>Gym</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Randy Porter</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Supple Spine and Shoulders</td>
                                <td>Yoga</td>
                                <td>6:30 AM - 8:00 AM</td>
                                <td>Randy Porter</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Yoga for Divas</td>
                                <td>Yoga</td>
                                <td>9:00 AM - 11:00 AM</td>
                                <td>Donna Wilson</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Virtual Cycle</td>
                                <td>Gym</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Randy Porter</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Like a butterfly</td>
                                <td>Boxing</td>
                                <td>9:00 AM - 11:00 AM</td>
                                <td>Aaron Chapman</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Mind &amp; Body</td>
                                <td>Yoga</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Adam Stewart</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Crit Cardio</td>
                                <td>Gym</td>
                                <td>9:00 AM - 10:00 AM</td>
                                <td>Aaron Chapman</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Wheel Pose Full Posture</td>
                                <td>Yoga</td>
                                <td>7:00 AM - 8:30 AM</td>
                                <td>Donna Wilson</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Playful Dancer's Flow</td>
                                <td>Yoga</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Donna Wilson</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Zumba Dance</td>
                                <td>Dance</td>
                                <td>5:00 PM - 7:00 PM</td>
                                <td>Donna Wilson</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Cardio Blast</td>
                                <td>Gym</td>
                                <td>5:00 PM - 7:00 PM</td>
                                <td>Randy Porter</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Pilates Reformer</td>
                                <td>Gym</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Randy Porter</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Supple Spine and Shoulders</td>
                                <td>Yoga</td>
                                <td>6:30 AM - 8:00 AM</td>
                                <td>Randy Porter</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Yoga for Divas</td>
                                <td>Yoga</td>
                                <td>9:00 AM - 11:00 AM</td>
                                <td>Donna Wilson</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Virtual Cycle</td>
                                <td>Gym</td>
                                <td>8:00 AM - 9:00 AM</td>
                                <td>Randy Porter</td>
                                <td>20</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="mx-auto w-128" style="max-width:100%;">
                <section class="intro">
                    <div class="bg-image" style="background-color: #f5f7fa;">
                        <div class="mask d-flex align-items-center">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-12">
                                        <div class="card-body p-0">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
<style scoped>
html,
body,
.intro {
    height: 100%;
}

table td,
table th {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

thead th {
    color: #fff;
}

.card {
    border-radius: .5rem;
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
