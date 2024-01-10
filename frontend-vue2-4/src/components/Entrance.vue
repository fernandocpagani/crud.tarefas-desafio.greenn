<template>
    <div>
        <div class="main-content">

            <h3 class="title">Entrada</h3>

            <div v-for="task in tasks" :key="task.id">

                <div class="tasks">

                    <div class="task">

                        <div>
                            <input type="checkbox" id="checkbox-task">
                        </div>

                        <div class="task-field">

                            <label class="title-task">
                                <!-- <ModalViewTask /> -->
                                <Modal />
                            </label>
                            <p class="description">{{ task.description }}</p>
                            <div class="date-counter">
                                <div class="date">
                                    <img src="../../public/datavermelho.svg" alt=""> {{ task.finishdate }}
                                </div>
                                <div class="counter">
                                    0/2
                                </div>
                            </div>
                        </div>

                        <div class="menu-tasks">
                            <button><img src="../../public/lapis.svg" alt="editar"></button>
                            <button><img src="../../public/calendario.svg" alt="calendario"></button>
                            <button @click="deleteTask(task.id)"><img src="../../public/lixeiracinza.svg"
                                    alt="excluir"></button>
                        </div>

                    </div>

                    <div v-for="subtask in subtasks" :key="subtask.id">
                        <div v-if="subtask.task_id == task.id">
                            <div class="sub-task-content">

                                <div class="sub-task">
                                    <div>
                                        <input type="checkbox" id="sub-checkbox-task">
                                    </div>
                                    <div>
                                        <label class="title-task">{{ subtask.stitle }}</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="add-task">

                    </div>

                    <div>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script>
// import ModalNewTask from './../components/ModalNewTask.vue'
// import ModalViewTask from './../components/ModalViewTask.vue'
 import Modal from './../components/Modal.vue'
import axios from 'axios'

export default {
    name: "Entrance",
    components: {
        // ModalNewTask,
        // ModalViewTask,
        Modal,

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
    },

    methods: {
        async deleteTask(id) {
            axios.delete(`http://localhost:8000/api/task/${id}/delete`)
                .then((response) => {
                    this.msg = "Tarefa removido com sucesso!"
                    this.lista()
                    setTimeout(() => this.msg = "", 3000);
                })
        },     
    },  
}

</script>

<style scoped>
.main-content {
    box-sizing: border-box;
    padding: 50px 144px 50px 165px;
    background-color: #ffffff;
}

.title {
    font-size: 24px;
    font-weight: 800;
    line-height: 29px;
    margin-bottom: 30px;
}

.tasks {
    margin-bottom: 20px;
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

input {
    all: unset;
    border: 2px solid #e5e5e5;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    display: inline-block;
}

input:checked {
    background-color: #000;
    width: 16px;
    height: 16px;
    border: 2px solid #000;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
}

.task-field {
    width: 447px;
}

.title-task {
    font-size: 18px;
    font-weight: 400;
    margin-left: 20px;
    line-height: normal;
    color: #000;
}

.description {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #81858e;
    padding-top: 7px;
    padding-bottom: 10px;
    width: 200px;
}

.date {
    font-size: 14px;
    color: #d31408;
    background-color: #d314081a;
    padding: 4px 7px;
    width: 125px;
}

.date-counter {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
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
    ;
    border-top: none;
    padding: 10px 65px;
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
}

.task:hover {
    background-color: #fafafa;
}

.task:hover .menu-tasks button {
    display: block;
}
</style>