<template>
    <div>

        <div class="main-content">

            <h3 class="title">Entrada</h3>

            <div class="tasks">

                <div class="task">

                    <div>
                        <input type="checkbox" id="checkbox-task">
                    </div>

                    <div class="task-field">
                        <label class="title-task"><ModalViewTask/></label>
                        <p class="description">Fazer compra semanal</p>
                        <div class="date-counter">
                            <div class="date">
                                <img src="../../public/datavermelho.svg" alt=""> 25/08/2023
                            </div>
                            <div class="counter">
                                0/2
                            </div>
                        </div>
                    </div>

                    <div class="menu-tasks">
                        <button><img src="../../public/lapis.svg" alt="editar"></button>
                        <button><img src="../../public/calendario.svg" alt="calendario"></button>
                        <button><img src="../../public/lixeiracinza.svg" alt="excluir"></button>
                    </div>

                </div>

                <div class="sub-task-content">

                    <div class="sub-task">
                        <div>
                            <input type="checkbox" id="sub-checkbox-task">
                        </div>
                        <div>
                            <label class="title-task">Arroz</label>
                        </div>
                    </div>

                    <div class="sub-task">
                        <div>
                            <input type="checkbox" id="sub-checkbox-task">
                        </div>
                        <div>
                            <label class="title-task">Arroz</label>
                        </div>
                    </div>

                </div>

                <div class="add-task">
                    <img src="../../public/adicionar.jpg" alt="adicionar"><ModalNewTask/>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import ModalNewTask from './../components/ModalNewTask.vue'
import ModalViewTask from './../components/ModalViewTask.vue'

export default {
    name: "Entrance",
    components: {
        ModalNewTask,
        ModalViewTask
    }
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

.task-field{
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
    width: 120px;
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

.menu-tasks{
    display: flex;
    padding-left: 36px;
    align-items: center;
}

.menu-tasks button{
    border: none;
    padding-left: 30px;
    display: none;
    background-color: #fafafa;
    cursor: pointer;
}

.sub-task-content {
    box-sizing: border-box;
    border: solid 1px #e5e5e5;;
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