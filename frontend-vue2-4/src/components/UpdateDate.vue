<template>
  <div class="modal">

      <form id="form">

        <div class="button-date">
            <img src="../../public/calendario.svg" alt="">
            <input placeholder="Data de vencimento" class="date" type="text" onfocus="(this.type='date')"
              onblur="(this.type='text')" id="date" v-model="date">
          </div>

          <div class="buttons">
              <router-link :to="'/dashboard'"><button class="white-button">Cancelar</button></router-link>               
              <div class="button" @click="updateDate()">
                  <input type="button" class="black-button" value="Atualizar data">
              </div>
          </div>

      </form>
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
          date: null,
      }
  },

  methods: {

      async updateDate() {

          const result = await axios.put(`http://localhost:8000/api/task/` + this.$route.params.id + `/updatedate`,
              {
                finishdate: this.date,                
              });
          if (result.status == 200) {
              this.$router.push({ name: 'dashboard' });
          }
      }
  },


  async mounted() {

      const result = await axios.get(`http://localhost:8000/api/task/` + this.$route.params.id)
      this.date = result.data.finishdate     
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

.button-date {
  margin-top: 93px;
margin-left: 25px;
width: 200px;
height: 40px;
box-sizing: border-box;
border: solid 1px #e5e5e5;
background-color: #fff;
margin-bottom: 15px;
font-size: 14px;
}

.button-date img {
  height: 14px;
  width: 14px;
  margin: 13px 14px 10px 13px;
}

.date {
border: none;
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
margin-left: 370px;
text-decoration: none;
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