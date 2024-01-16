<template>
  <div>
    
    <b-button v-b-modal="'myModal' + id"><img src="../../public/lapis.svg" alt="lapis"></b-button>

    <b-modal :id="'myModal' + task.id">
    <form id="form">

<div>
    <input type="name" id="task-name" name="task-name" placeholder="Nome da tarefa" maxlength="30" required
        v-model="title">
</div>

<div>
    <input type="name" id="task-description" name="task-description" maxlength="50" placeholder="Descrição"
        required v-model="description">
</div>

<div class="buttons">
    <router-link :to="'/dashboard'"><button class="white-button">Cancelar</button></router-link>               
    <div class="button" @click="updateTask()">
        <input type="button" class="black-button" value="Atualizar tarefa">
    </div>
</div>

</form>
  </b-modal>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: "ModalUpdateTask",

    data() {
        return {
            title: null,
            description: null,   
        }
    },

    methods: {

        async updateTask() {

            const result = await axios.put(`http://localhost:8000/api/task/` + this.$route.params.id + `/update`,
                {
                    title: this.title,
                    description: this.description,
                });
            if (result.status == 200) {
                this.$router.push({ name: 'dashboard' });
            }
        }
    },


    async mounted() {

        const result = await axios.get(`http://localhost:8000/api/task/` + this.$route.params.id)
        console.log(result.data)

        this.title = result.data.title
        this.description = result.data.description
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

.btn,
.btn-secondary {
  background-color: transparent;
}

.btn:hover,
.btn-secondary:hover {
  background-color: transparent;
}

.modal-content {
  background-color: transparent;
}
</style>