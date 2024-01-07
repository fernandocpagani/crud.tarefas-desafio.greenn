<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true" class="button-add-task">Ir ao mercado</button>

  <div v-if="open" class="modal">


    <main-container id="main-container">

      <nav>
        <div class="date">
          <img src="../../public/dataverde.svg" alt=""> <Label>No prazo</Label>
        </div>
        <div class="buttons-nav-right">
          <img src="../../public/3pontos.svg" alt="3pontos">
          <img class="x" src="../../public/x.svg" alt="x">
        </div>
      </nav>


      <div class="task">

        <div>
          <input type="checkbox" id="checkbox-task">
        </div>

        <div class="task-field">
          <label class="title-task">Ir ao mercado</label>
          <p class="description">Fazer compra semanal</p>

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

    </main-container>

  </div>
</template>

<style scoped>
.button-add-task {
  background-color: transparent;
  border: none;
  font-weight: 400;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

#main-container {
  width: 819px;
  height: 613px;
  background-color: #fff;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  border: solid 1px #d9d9d9;
  align-items: center;
}

.date {
  padding: 4px 8px;
  width: 103px;
  background-color: #e5f4f3;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  color: #009488
}

.buttons-nav-right {
  align-items: center;
}

.x {
  margin-left: 35px;
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

.sub-task-content {
    box-sizing: border-box;  
    border-top: none; 
    padding: 10px 65px;  
}

.sub-task {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 10px 0;
}









</style>