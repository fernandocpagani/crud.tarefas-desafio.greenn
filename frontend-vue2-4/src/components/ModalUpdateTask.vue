<template>
  <div>
    <b-button v-b-modal.modal-sm variant="primary">sm modal</b-button>
    <b-modal id="modal-sm" size="sm" title="Small Modal">
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
    name: "UpdateTask",

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