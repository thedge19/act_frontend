<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
<template>
  <main>
    <Navbar/>
    <div class="mx-auto w-50" style="max-width:100%;">
      <div class="px-1 py-4">
        <form @submit.prevent="checkForm">
          <h6 class="card-title mb-3">Объект</h6>
          <div v-if="errors.length">
            <b class="text-danger">Исправьте следующие ошибки:</b>
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
          </div>
          <div class="d-flex">
            <label class="radio mr-1">
              <input type="radio" @change="onChangeProject()" name="add" :value="4"
                     v-model="projectId"
                     checked>
              <span> <i class="fa fa-user"></i> Грушовая </span>
            </label>
            <label class="radio">
              <input type="radio" @change="onChangeProject()" name="add" :value="5"
                     v-model="projectId">
              <span> <i class="fa fa-plus-circle"></i> Шесхарис </span>
            </label>
          </div>
          <h6 class="information mt-4">Выбор подобъекта</h6>
          <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Options</label>
            <select class="form-select" @change="onChangeSubObject()" id="inputGroupSelect01"
                    v-model="subObjectId">
              <option selected>Choose...</option>
              <option style="width: min-content"
                      v-for="subObject in subObjects" :value="subObject.id">{{ subObject.name }}
              </option>
            </select>
          </div>

          <h6 class="information mt-4">Выбор работ</h6>
          <div class="input-group mb-3">
            <div class="d-flex justify-content-between">
              <select class="form-select" style="width: 50%" id="inputGroupSelect02"
                      v-model="workId" @change="onChangeWork()">
                <option selected>Choose...</option>
                <option v-for="work in works" :value="work.id">
                  {{ work.name }}
                </option>

              </select>
              <!--                            <div v-if="this.workId">-->
              <label class="pt-3" style="width: 3%">{{ currentWork.units }}</label>
              <label class="pt-3" style="width: 3%">{{ currentWork.finalQuantity }}</label>
              <!--                            </div>-->
              <input style="width: 35%" class="form-control" type="number" step="0.001"
                     v-model="workDone">
            </div>
          </div>
          <div>
            <div class="space-y-2 d-flex justify-content-start align-items-center">
              <div>
                <label class="input-group-text">Дата начала работ</label>
                <VDatePicker :attributes="attributes" v-model="startDate" mode="date"/>
              </div>
              <div class="m-lg-2">
                <label class="input-group-text">Дата окончания работ</label>
                <VDatePicker :attributes="attributes" v-model="endDate" :model-value="setFirstEndDate" mode="date"/>
              </div>
            </div>
            <div>
              <div>Количество применённых материалов: {{ materialQuantity }}</div>
              <div>Дата входного контроля: {{ setControlDate.toDateString() }}</div>
              <div>
                <input type="radio" id="zero" class="m-lg-3" value="0" v-model="materialQuantity"/>
                <label for="zero">0</label>

                <input type="radio" id="one" class="m-lg-3" value="1" v-model="materialQuantity"/>
                <label for="one">1</label>

                <input type="radio" id="two" class="m-lg-3" value="2" v-model="materialQuantity"/>
                <label for="two">2</label>

                <input type="radio" id="three" class="m-lg-3" value="3" v-model="materialQuantity"/>
                <label for="three">3</label>

                <input type="radio" id="four" class="m-lg-3" value="4" v-model="materialQuantity"/>
                <label for="four">4</label>

                <input type="radio" id="five" class="m-lg-3" value="5" v-model="materialQuantity"/>
                <label for="five">5</label>
              </div>
            </div>

            <div v-if="materialQuantity > 0" class="d-flex justify-content-between">
              <select class="form-select" style="width: 50%" id="inputGroupSelect02"
                      v-model="firstMaterialId" @change="onChangeFirstMaterial()">
                <option selected>Choose...</option>
                <option v-for="material in materials" :value="material.id">{{
                    material.name
                  }}
                </option>

              </select>
              <div>
                <label class="pt-3" style="width: 3%">{{ firstMaterial.units }}</label>
              </div>
              <input style="width: 35%" class="form-control" type="number" step="0.001"
                     v-model="firstMaterial.quantity">
            </div>

            <div v-if="materialQuantity > 1" class="d-flex justify-content-between">
              <select class="form-select" style="width: 50%" id="inputGroupSelect02"
                      v-model="secondMaterialId" @change="onChangeSecondMaterial()">
                <option selected>Choose...</option>
                <option v-for="material in materials" :value="material.id">{{
                    material.name
                  }}
                </option>

              </select>
              <div>
                <label class="pt-3" style="width: 3%">{{ secondMaterial.units }}</label>
              </div>
              <input style="width: 35%" class="form-control" type="number" step="0.01"
                     v-model="secondMaterial.quantity">
            </div>

            <div v-if="materialQuantity > 2" class="d-flex justify-content-between">
              <select class="form-select" style="width: 50%" id="inputGroupSelect02"
                      v-model="thirdMaterialId" @change="onChangeThirdMaterial()">
                <option selected>Choose...</option>
                <option v-for="material in materials" :value="material.id">{{
                    material.name
                  }}
                </option>
              </select>
              <div>
                <label class="pt-3" style="width: 3%">{{ thirdMaterial.units }}</label>
              </div>
              <input style="width: 35%" class="form-control" type="number" step="0.01"
                     v-model="thirdMaterial.quantity">
            </div>

            <div v-if="materialQuantity > 3" class="d-flex justify-content-between">
              <select class="form-select" style="width: 50%" id="inputGroupSelect02"
                      v-model="fourthMaterialId" @change="onChangeFourthMaterial()">
                <option selected>Choose...</option>
                <option v-for="material in materials" :value="material.id">{{
                    material.name
                  }}
                </option>
              </select>
              <div>
                <label class="pt-3" style="width: 3%">{{ fourthMaterial.units }}</label>
              </div>
              <input style="width: 35%" class="form-control" type="number" step="0.01"
                     v-model="fourthMaterial.quantity">
            </div>

            <div v-if="materialQuantity > 4" class="d-flex justify-content-between">
              <select class="form-select" style="width: 50%" id="inputGroupSelect02"
                      v-model="fifthMaterialId" @change="onChangeFifthMaterial()">
                <option selected>Choose...</option>
                <option v-for="material in materials" :value="material.id">{{
                    material.name
                  }}
                </option>

              </select>
              <div>
                <label class="pt-3" style="width: 3%">{{ fifthMaterial.units }}</label>
              </div>
              <input style="width: 35%" class="form-control" type="number" step="0.001"
                     v-model="fifthMaterial.quantity">
            </div>

            <div>
              <div>Исполнительная схема: {{ executiveSchema }}</div>
              <div>
                <input type="radio" id="zero" class="m-lg-3" value="Нет" v-model="executiveSchema"/>
                <label for="zero">Нет</label>

                <input type="radio" id="one" class="m-lg-3" value="Есть" v-model="executiveSchema"/>
                <label for="one">Есть</label>
              </div>
            </div>
          </div>
          <h6 class="information mt-4">Разрешается производство работ</h6>
          <div class="input-group mb-3">
            <div class="d-flex justify-content-between">
              <select class="form-select" style="width: 50%" id="inputGroupSelect02"
                      v-model="nextWorkId">
                <option selected></option>
                <option v-for="work in works" :value="work.id">{{
                    work.name
                  }}
                </option>
              </select>
            </div>
          </div>

          <input class="btn btn-primary btn-block confirm-button" type="submit" value="Сохранить">
        </form>
        <div class="mt-2">
          <button class="btn bg-danger-subtle" @click.prevent="getSomething">Жми</button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>

export default {
  name: "AddAct",

  data() {
    return {
      subObjects: [],
      works: [],
      materials: [],
      errors: [],

      currentWork: {
        units: "т",
        finalQuantity: 0.1
      },

      projectId: 4,
      subObjectId: 8,
      workId: null,
      nextWorkId: null,
      workDone: "",
      startDate: new Date(),
      endDate: this.startDate,
      controlDate: this.setControlDate,
      materialQuantity: 0,
      executiveSchema: "Нет",

      firstMaterial: {
        units: "-",
        quantity: null
      },

      secondMaterial: {
        units: "-",
        quantity: null
      },

      thirdMaterial: {
        units: "-",
        quantity: null
      },

      fourthMaterial: {
        units: "-",
        quantity: null
      },

      fifthMaterial: {
        units: "-",
        quantity: null
      },

      firstMaterialId: null,
      secondMaterialId: null,
      thirdMaterialId: null,
      fourthMaterialId: null,
      fifthMaterialId: null,

      attributes: {
        highlight: true,
        dates: this.setFirstEndDate,
      }
    }
  },

  mounted() {
    this.getSubObjects()
    this.getWorks()
    this.getMaterials()
  },

  methods: {

    checkForm: function (e) {

      this.errors = [];

      if (this.materialQuantity !== 0 && this.controlDate > this.startDate) {
        this.errors.push('Дата входного контроля не должна быть позднее, чем дата начала работ.');
      }

      if (this.workDone === '') {
        this.errors.push('Заполните объём работ.');
      }

      if (this.workId === null || this.workId === undefined) {
        this.errors.push("Укажите работы.")
      }

      if (this.materialQuantity !== this.addMaterials().length) {
        this.errors.push("Добавьте материалы")
      }

      if (this.errors.length === 0) {
        this.addAct();
      }

      e.preventDefault();
    },


    getSomething() {
      console.log(this.workDone === '');
    },

    onChangeProject() {
      this.getSubObjects()
    },

    onChangeSubObject() {
      this.getWorks()
    },

    onChangeWork() {
      this.getWork()
    },

    onChangeFirstMaterial() {
      this.getFirstMaterial()
      console.log(this.firstMaterial)
    },

    onChangeSecondMaterial() {
      this.getSecondMaterial()
      console.log(this.secondMaterial)
    },

    onChangeThirdMaterial() {
      this.getThirdMaterial()
      console.log(this.thirdMaterial)
    },

    onChangeFourthMaterial() {
      this.getFourthMaterial()
      console.log(this.fourthMaterial)
    },

    onChangeFifthMaterial() {
      this.getFifthMaterial()
      console.log(this.fifthMaterial)
    },


    getSubObjects() {
      fetch(`http://localhost:8080/subobjects/${this.projectId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.subObjects = data
          })
    },
    getWorks() {
      fetch(`http://localhost:8080/workings/undone/${this.subObjectId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.works = data
            console.log(data)
          })
    },

    getWork() {
      fetch(`http://localhost:8080/workings/working/${this.workId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.currentWork = data
            console.log(data)
          })
    },

    getMaterials() {
      fetch(`http://localhost:8080/materials`,
      )
          .then(res => res.json())
          .then(data => {
            this.materials = data
            console.log(data)
          })
    },

    getFirstMaterial() {
      fetch(`http://localhost:8080/materials/${this.firstMaterialId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.firstMaterial = data;
            console.log(data);
          })
    },

    getSecondMaterial() {
      fetch(`http://localhost:8080/materials/${this.secondMaterialId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.secondMaterial = data;
            console.log(data);
          })
    },

    getThirdMaterial() {
      fetch(`http://localhost:8080/materials/${this.thirdMaterialId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.thirdMaterial = data;
            console.log(data);
          })
    },

    getFourthMaterial() {
      fetch(`http://localhost:8080/materials/${this.fourthMaterialId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.fourthMaterial = data;
            console.log(data);
          })
    },

    getFifthMaterial() {
      fetch(`http://localhost:8080/materials/${this.fifthMaterialId}`,
      )
          .then(res => res.json())
          .then(data => {
            this.fifthMaterial = data;
            console.log(data);
          })
    },

    addMaterials() {
      let materialsArray = [this.firstMaterial, this.secondMaterial, this.thirdMaterial, this.fourthMaterial, this.fifthMaterial];
      let addingMaterialsArray = [];

      for (let i = 0; i < this.materialQuantity; i++) {
        addingMaterialsArray.push(materialsArray[i])
      }
      return addingMaterialsArray;
    },

    addAct() {
      fetch('http://localhost:8080/acts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          projectId: this.projectId,
          subObjectId: this.subObjectId,
          workId: this.workId,
          nextWorkId: this.nextWorkId,
          workDone: this.workDone,
          startDate: this.startDate.toDateString(),
          endDate: this.endDate.toDateString(),
          controlDate: this.setControlDate.toDateString(),
          actMaterials: this.addMaterials(),
          executiveSchema: this.executiveSchema
        })
      })
          .then(data => {
            console.log(data)
            this.$router.push("/");
          })
    },
  },

  computed: {
    setControlDate() {
      let controlDate = new Date(this.startDate.getFullYear() + "." + (this.startDate.getMonth() + 1) + "." + 1);
      if (controlDate.getDay() === 6) {
        controlDate.setDate(controlDate.getDate() + 2);
      } else if (controlDate.getDay() === 0) {
        controlDate.setDate(controlDate.getDate() + 1);
      }
      return controlDate;
    },

    setFirstEndDate() {
      return this.startDate
    }
  }
}
</script>
<style scoped>
body {
  background-color: #FFEBEE
}

label.radio {
  cursor: pointer;
  width: 100%
}

label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none
}

label.radio span {
  padding: 7px 14px;
  border: 2px solid #eee;
  display: inline-block;
  color: #039be5;
  border-radius: 10px;
  width: 100%;
  height: 48px;
  line-height: 27px
}

label.radio input:checked + span {
  border-color: #039BE5;
  background-color: #81D4FA;
  color: #fff;
  border-radius: 9px;
  height: 48px;
  line-height: 27px
}

.form-control {
  margin-top: 10px;
  height: 48px;
  border: 2px solid #eee;
  border-radius: 10px
}

.form-control:focus {
  box-shadow: none;
  border: 2px solid #039BE5
}

.confirm-button {
  height: 50px;
  border-radius: 10px
}
</style>