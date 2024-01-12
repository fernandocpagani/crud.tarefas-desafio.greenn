<template>
  <div>
    <a href="#modal_3" class="btn"><label class="nav-add-text">Criar tarefa</label></a>

    <div id="modal_3" class="modal">
      <div class="modal__content">

        <form id="form">

          <div>
            <input type="name" id="task-name" name="task-name" placeholder="Nome da tarefa" maxlength="30" required
              v-model="title">
          </div>

          <div>
            <input type="name" id="task-description" name="task-description" maxlength="50" placeholder="Descrição"
              required v-model="description">
          </div>

          <div class="button-date">
            <img src="../../public/calendario.svg" alt="">
            <input placeholder="Data de vencimento" class="date" type="text" onfocus="(this.type='date')"
              onblur="(this.type='text')" id="date" v-model="date">
          </div>

          <div class="buttons">
            <a href="#" class="white-button">Cancelar</a>
            <div class="button" @click="createTask()">
              <input type="button" class="black-button" value="Criar tarefa">
            </div>
          </div>

        </form>
      </div>
    </div>

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
      date: null,
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
        finishdate: this.date,
        users_id: user.user.id,
      }

      axios.post('http://localhost:8000/api/task/register', data)
        .then(function (response) {
          console.log(response);
          window.location = window.location + '#loaded';
          window.location.reload();
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  }
}

</script> 

<style scoped>
body {
  min-height: 100vh;
  display: grid;
  place-content: center;
}

a {
  text-decoration: none;
}

.btn {
  border: none;
  color: #81858e;
  font-size: 15px;  
}

.btn img {
  font-size: 14px;
  margin-right: 10px;
}

.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000000ab;
  display: grid;
  place-content: center;
  visibility: hidden;
  opacity: 0;
  transition: .3s;
}

.modal:target {
  opacity: 1;
  visibility: visible;
}

.modal__content {
  background-color: #fff;
  width: 678px;
  height: 216px;
}

.nav-add {
  height: 14px;
  width: 14px;
  margin-right: 10px;
}

.nav-add-text {
  color: #fff;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000000ab;
  display: grid;
  place-content: center;
  visibility: hidden;
  opacity: 0;
  transition: .3s;

}

#form {
  width: 678px;
  height: 216px;
  background-color: #fff;
}

#task-name {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 21px;
  margin-left: 25px;
  border: none;
}

#task-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
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
  display: flex;
  flex-direction: row;
}

.button-date img {
  height: 14px;
  width: 14px;
  margin: 13px 14px 10px 13px;
}

.date {
  border: none;
  font-size: 14px;
}


.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.white-button {
  width: 122px;
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
  padding: 12px 0;
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