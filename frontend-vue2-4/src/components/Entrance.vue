<template>
    <div>

        <div class="main-content">

            <h3 class="title">Entrada</h3>

            <div v-for="task in tasks" :key="task.id">

                <div class="tasks">

                    <div class="task">

                        <div>

                        </div>

                        <div>
                            <input type="checkbox" v-model="toggle" true-value="task.status == 'pending'"
                                false-value="task.status == 'completed'">

                            <input type="checkbox" id="checkbox-task" class="checkbox-input" v-model="task.status">
                            <!-- jogar o ifternario na função e chamar no onclick -->
                            <!-- <button class="checkbutton" @click= "checkTask()">
                                <div v-if="task.status == 'pending'">
                                    <img src="../../public/checkvazio.svg" alt="check">
                                </div>
                                <div v-else>
                                    <img src="../../public/checkcheio.svg" alt="check">
                                </div>
                            </button> -->
                        </div>

                        <div class="task-field">

                            <router-link :to="'/modalviewtask/' + task.id" class="title-task">{{ task.title }}</router-link>

                            <p class="description">{{ task.description }}</p>
                            <div class="date-counter">

                                <div class="red-date">
                                    <img src="../../public/datavermelho.svg" alt="">
                                    {{ moment(finishdate).format('DD/MM/YYYY') }}
                                </div>
                                <div class="green-date">
                                    <img src="../../public/dataverde.svg" alt="">
                                    {{ moment(finishdate).format('DD/MM/YYYY') }}
                                </div>

                                <!-- verifyDate será uma função que irá retornar o nome da classe que deve ser aplicada. Se a data já tiver passado, será uma classe, se não, será outra classe -->
                                <!-- textDate irá retonar o texto que deve ser mostrado. Se a data for igual a data atual, ele mostra "Hoje", caso contrário ele formata a data com o moment -->
                                <!-- <div :class="verifyDate(task.finishdate)">{{ textDate(task.finishdate) }}</div> -->

                                <div class="counter">
                                    {{ subtasks.filter(sub => sub.task_id == task.id && sub.status == true).length }}/{{
                                        subtasks.filter(sub => sub.task_id == task.id).length }}
                                </div>
                            </div>
                        </div>

                        <div class="menu-tasks">

                            <button> <router-link :to="'/updatetask/' + task.id" class="title-task"><img
                                        src="../../public/lapis.svg" alt="lapis"></router-link></button>

                            <button><router-link :to="'/updatedate/' + task.id" class="title-task"><img
                                        src="../../public/calendario.svg" alt="lapis"></router-link></button>

                            <button @click="deleteTask(task.id)"><img src="../../public/lixeiracinza.svg"
                                    alt="excluir"></button>
                        </div>

                    </div>

                    <div class="main-subtask-content">

                        <div v-for="subtask in subtasks.filter(sub => sub.task_id == task.id)" :key="subtask.id">

                            <div class="sub-task-content">

                                <div class="sub-task">

                                    <div>
                                        <input type="checkbox" class="sub-checkbox-task">
                                    </div>

                                    <div class="subtask-text">

                                        <b-button v-b-toggle.collapse-2 class="m-1"
                                            style="padding: 0; background-color: transparent; border: none; height: 20px;"><label
                                                class="title-task">{{ subtask.stitle
                                                }}</label></b-button>

                                        <b-collapse id="collapse-2" style="padding-top: 0;">
                                            <b-card
                                                style="padding: 0; background-color: transparent; border: none; height: 20px;">
                                                <p class="description-subtask">{{ subtask.sdescription }}</p>
                                            </b-card>
                                        </b-collapse>

                                    </div>
                                </div>

                                <div class="menu-subtasks">
                                    <button><router-link :to="'/updatesubtask/' + task.id" class="title-task"><img
                                                src="../../public/lapis.svg" alt="lapis"></router-link></button>

                                    <button> <img src="../../public/lixeiracinza.svg" alt="excluir"
                                            @click="deleteSubTask(subtask.id)"></button>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="add-task">

                    <router-link :to="'/modalnewsubtask/' + task.id" class="subtask-text"><img
                            src="../../public/adicionarcinza.svg" alt="adicionar">Criar subtarefa</router-link>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import UpdateTask from './../components/UpdateTask.vue'
import moment from 'moment'
import axios from 'axios'

export default {
    name: "Entrance",
    components: {
        UpdateTask,
    },

    data() {

        return {
            tasks: [],
            subtask: null,
            subtasks: [],
            stitle: null,
            id: null,
            title: null,
            description: null,
            date: null,
            status: null,
            sstatus: null,
        }
    },

    async mounted() {
        {
            axios
                .get('http://127.0.0.1:8000/api/task')
                .then((response) => {
                    this.tasks = response.data
                    this.moment = moment;
                })
        }
        {
            axios
                .get('http://localhost:8000/api/subtask')
                .then((response) => {
                    this.subtasks = response.data
                    this.moment = moment;
                })
        }
        {

            const result = await axios.get(`http://localhost:8000/api/task/` + this.$route.params.id)

            this.title = result.data.title
            this.description = result.data.description
        }
    },

    methods: {
        // async checkTask() {
        //     const result = await axios.put(`http://localhost:8000/api/task/` + this.$route.params.id + `/update`,
        //         {
        //             status: this.status,
        //             // data:{ task.status == 'pending' ? task.status = 'completed' : task.status = 'pending'}

        //         });
        // },

        async deleteTask(id) {
            axios.delete(`http://localhost:8000/api/task/${id}/delete`)
                .then(() => {
                    window.location = window.location + '#loaded';
                    window.location.reload();
                })
        },

        async deleteSubTask(id) {
            axios.delete(`http://localhost:8000/api/subtask/${id}/delete`)
                .then(() => {
                    window.location = window.location + '#loaded';
                    window.location.reload();
                })
        },

        async updateTask() {

            const result = await axios.put(`http://localhost:8000/api/task/` + this.$route.params.id + `/update`,
                {
                    title: this.title,
                    description: this.description,
                });
            if (result.status == 200) {
                this.$router.push({ name: 'dashboard' });
            }
        },


    },
}

</script>

<style scoped>
.main-content {
    box-sizing: border-box;
    padding: 50px 144px 50px 165px;
    background-color: #ffffff;
    margin-top: 70px;
    margin-left: 293px;
}

.title {
    font-size: 24px;
    font-weight: 800;
    line-height: 29px;
    margin-bottom: 30px;
}

.task {
    width: 678px;
    border: solid 1px #e5e5e5;
    box-sizing: border-box;
    padding: 15px 25px;
    display: flex;
    flex-direction: row;
    transition: .5;
}

.checkbutton {
    border: none;
    background-color: transparent;
}

.checkbox-input,
.sub-checkbox-task {
    all: unset;
    border: 2px solid #e5e5e5;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-top: 8px;
}

.checkbox-input:checked,
.sub-checkbox-task:checked {
    background-color: #000;
    width: 16px;
    height: 16px;
    border: 2px solid #000;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}

.task-field {
    width: 427px;
    margin-left: 20px;
}

.title-task {
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    color: #000;
    text-decoration: none;
}

.description-subtask {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #81858e;
    padding-bottom: 0px;
    width: 200px;
    margin-bottom: 0px;
}

.menu-subtasks button {
    padding-left: 30px;
    border: none;
    background-color: transparent;
    display: none;
}

.sub-task-content:hover .menu-subtasks button {
    display: block;
}

.menu-subtasks {
    display: flex;
    align-items: center;
}

.description {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #81858e;
    padding-top: 7px;
    width: 200px;
}

.red-date {
    font-size: 14px;
    color: #d31408;
    background-color: #d314081a;
    padding: 4px 7px;
    width: 125px;
}

.red-date img {
    margin-right: 10px;
}

.green-date {
    font-size: 14px;
    color: #009488;
    background-color: #e5f4f3;
    padding: 4px 7px;
    width: 125px;
}

.green-date img {
    margin-right: 10px;
}

.date-counter {
    display: flex;
    flex-direction: row;
}

.date img {
    width: 13px;
    height: 14.44px;
    margin-right: 10px;
}

.counter {
    font-size: 14px;
    font-weight: 400;
    color: #81858e;
    padding: 4px 10px;
}

.menu-tasks {
    display: flex;
    padding-left: 36px;
    align-items: center;
}

.menu-tasks button {
    border: none;
    padding-left: 30px;
    display: none;
    background-color: transparent;
    cursor: pointer;
}

.main-subtask-content:hover{
    background-color: #fafafa;
}

.sub-task-content {
    box-sizing: border-box;
    border-left: solid 1px #e5e5e5;
    border-right: solid 1px #e5e5e5;
    border-top: none;
    padding-left: 65px;
    padding-right: 25px;
    display: flex;
    flex-direction: row;

}

.sub-task {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px 0;
    align-items: center;
    align-content: center;
}

.add-task {
    padding: 15px 25px;
    box-sizing: border-box;
    border: solid 1px #e5e5e5;
    color: #81858e;
    font-size: 15px;
    margin-bottom: 20px;
}


.add-task:hover {
    background-color: #fafafa;
}

.task:hover {
    background-color: #fafafa;
}

.task:hover .menu-tasks button {
    display: block;
}

.subtask-text {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
    color: #81858E;
    width: 450px;
    margin-left: 20px
}

.card-body {
    padding: 0;
}

.subtask-text img {
    margin-right: 10px;
}</style>