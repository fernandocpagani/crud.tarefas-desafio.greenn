<!-- <script setup>
import { ref } from 'vue'

const open = ref(false)
</script> -->

<template>
  <!-- <button @click="open = true" class="button-add-task"><img class="nav-add" src="../../public/adicionarcinza.svg" alt="adicionar">Criar tarefa</button> -->
  <!-- 
  <div v-if="open" class="modal"> -->

  <div class="modal">

    <form id="form">

      <div>
        <input type="name" id="task-name" name="task-name" placeholder="Nome da tarefa" maxlength="30" required
          v-model="title">
      </div>

      <div>
        <input type="name" id="task-description" name="task-description" maxlength="60" placeholder="Descrição" required
          v-model="description">
      </div>

      <div class="button-date">
        <img src="../../public/calendario.svg" alt="">
        <input placeholder="Data de vencimento" class="date" type="text" onfocus="(this.type='date')"
          onblur="(this.type='text')" id="date" v-model="fishdate">
      </div>
      <!-- 
      <button class="button-date"><img src="../../public/calendario.svg" alt=""></button> -->


      <div class="buttons">
        <router-link to="/dashboard">
          <button class="white-button">Cancelar</button>
        </router-link>
        <div class="button" @click="createTask()">
          <input type="button" class="black-button" value="Adicionar post">
        </div>
      </div>

    </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ModalNewTask",

  data() {
    return {
      title: null,
      description: null,
      finishdate: null,
      users_id: null,
    }
  },

  computed: {
    isLogged() {
      if (localStorage.getItem("user-info")) {
        return true
      } else {
        return this.$router.push({ name: "login" })
      }
    }
  },

  methods: {

    async createTask() {

      const user = JSON.parse(localStorage.getItem("user-info"))

      const data = {
        title: this.title,
        description: this.description,
        finishdate: this.finishdate,
        users_id: user.user.id,
      }

      axios.post('http://localhost:8000/api/task/register', data)
        .then(function (response) {
          console.log(response);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          console.error(error);
        });
      console.log(data);

      // setTimeout(() =>this.$router.push({ name: "dashboard" }), 1000);
    }
  }
}

</script> 

<style scoped>
.button-add-task {
  background-color: transparent;
  border: none;
  font-weight: 400;
  color: #81858e;
  font-size: 15px;
  cursor: pointer;
}

.nav-add {
  height: 14px;
  width: 14px;
  margin-right: 10px;
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


#form {
  width: 678px;
  height: 216px;
  background-color: #fff;
}

#task-name {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-top: 21px;
  margin-left: 25px;
  border: none;
}

#task-description {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  margin-top: 15px;
  margin-left: 25px;
  margin-bottom: 20px;
  border: none;
}

.button-date {
  margin-left: 25px;
  width: 199px;
  height: 40px;
  box-sizing: border-box;
  border: solid 1px #e5e5e5;
  background-color: #fff;
  margin-bottom: 15px;
}

.date {
  margin-left: 10px;
  border: none;
}


.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
}

.white-button {
  width: 102px;
  height: 40px;
  border: none;
  background-color: #f7f7f7;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.07px;
  cursor: pointer;
  text-align: center;
  font-style: Montserrat;
  margin-left: 380px;
}

.black-button {
  width: 122px;
  height: 40px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17.07px;
  cursor: pointer;
  margin-left: 15px;
}

.buttons {
  border-top: solid 1px #e5e5e5;
  padding: 14px 25px;
}
</style>