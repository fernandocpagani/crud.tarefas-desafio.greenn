<template>
    <div>

        <div class="main-content">

            <h3 class="title">Entrada</h3>

            <div v-for="task in tasks" :key="task.id">


                <div class="tasks">

                    <div class="task">

                        <div>
                            <input type="checkbox" id="checkbox-task" class="checkbox-input">
                        </div>

                        <div class="task-field">

                            <router-link :to="'/modalviewtask/' + task.id" class="title-task">{{ task.title }}</router-link>

                            <p class="description">{{ task.description }}</p>
                            <div class="date-counter">
                                <div class="red-date">
                                    <img src="../../public/datavermelho.svg" alt=""> {{ task.finishdate }}
                                </div>
                                <div class="green-date">
                                    <img src="../../public/dataverde.svg" alt=""> {{ task.finishdate }}
                                </div>
                                <div class="counter">
                                    0/2
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

                    <div v-for="subtask in subtasks" :key="subtask.id">
                        <div v-if="subtask.task_id == task.id">
                            <div class="sub-task-content">

                                <div class="sub-task">
                                    <div>
                                        <input type="checkbox" class="sub-checkbox-task">
                                    </div>
                                    <div class="subtask-text">
                                        <label class="title-task">{{ subtask.stitle }}</label>
                                        <p class="description-subtask">{{ subtask.sdescription }}</p>
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
</div></template>

<script>
import UpdateTask from './../components/UpdateTask.vue'

import axios from 'axios'

export default {
    name: "Entrance",
    components: {
        UpdateTask,
    },

    data: () => ({
        dialog: false,
    }),

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
        }
    },

    async mounted() {
        {
            axios
                .get('http://127.0.0.1:8000/api/task')
                .then((response) => {
                    this.tasks = response.data                    
                })
        }
        {
            axios
                .get('http://localhost:8000/api/subtask')
                .then((response) => {
                    this.subtasks = response.data

                })
        }
        {

            const result = await axios.get(`http://localhost:8000/api/task/` + this.$route.params.id)          

            this.title = result.data.title
            this.description = result.data.description
        }
    },

    methods: {
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
    margin-left:293px;
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

.checkbox-input,
.sub-checkbox-task {
    all: unset;
    border: 2px solid #e5e5e5;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    display: inline-block;
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
    padding-top: 7px;
    padding-bottom: 0px;
    width: 200px;
    margin-bottom: 0px;
    
}

.menu-subtasks button {    
    padding: 20px 0px 20px 30px;
    border: none;
    background-color: transparent;
    display: none;
}

.sub-task-content:hover{
background-color: #fafafa;
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

.green-date {
    font-size: 14px;
    color: #009488;
    background-color: #e5f4f3;
    padding: 4px 7px;
    width: 125px;
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

.sub-task-content {
    box-sizing: border-box;
    border: solid 1px #e5e5e5;
    border-top: none;
    padding: 10px 25px 10px 65px;
    display: flex;
    flex-direction: row;

}

.sub-task {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px 0;
    
}

.add-task {
    padding: 15px 25px;
    box-sizing: border-box;
    border: solid 1px #e5e5e5;
    border-top: none;
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
    margin-left:20px
}

.subtask-text img {
    margin-right: 10px;
}
</style>