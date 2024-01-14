<template>
    <div id=padding-page>

        <Message :msg="msg" v-show="msg" />

        <div id="main-container">

            <div class="left-content">

                <h3 class="title-left-content">Inscreva-se</h3>

                <form>

                    <input type="hidden" name="type" value="login">

                    <div class="form-group">
                        <label for="name">Nome completo:</label>
                        <input type="name" class="form-control" id="name" name="name" placeholder="Nome completo" v-model="name">
                    </div>

                    <div class="form-group">
                        <label for="email">Endereço de e-mail:</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="email@email.com.br" v-model="email">
                    </div>

                    <div class="form-group">
                        <label for="password">Senha de acesso:</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Min. 6 caracteres" v-model="password" minlength="6">
                    </div>

                    <div class="buttons">
                        <router-link to="/">
                            <button class="white-button">Já tenho conta</button>
                        </router-link>

                        <div  @click="createUser()">                            
                            <button class="black-button">Cadastrar</button>
                        </div>

                    </div>

                </form>

            </div>

            <div class="right-content">

                <div class="hand"><img src="../../public/maopng.png" alt="mao"></div>

                <section class="right-text">
                    <h3 class="title-right-content">A fortuna fica ao lado daquele que ousa.</h3>
                    <p class="text-right-content">Todo progresso ocorre fora da zona de conforto.</p>
                </section>

                <div class="images">
                    <div class="degrade"></div>
                    <div class="image"></div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Message from '../components/Message.vue'

export default {
    name: "CreateUser",
    components: {
        Message
    },

    data() {
        return {
            email: null,
            name: null,
            password: null,
            msg: null,
        }
    },

    methods: {

        async createUser() {

            const data = {
                email: this.email,
                name: this.name,
                password: this.password,
            }

            // if (email.value !== password_confirmation.value) {

            //     this.msg = `Email já cadastrado`
            //     setTimeout(() => this.msg = "", 3000);

            // } else {

                axios.post('http://127.0.0.1:8000/api/auth/register', data)
                    .then(function (response) {
                        console.log(response);

                    })
                    .catch(function (error) {
                        console.error(error);
                        this.msg = `Não foi possível cadastrar`
                        setTimeout(() => this.msg = "", 3000);
                    });

                    setTimeout(() =>this.msg = "Usuário cadastrado com sucesso!", this.$router.push({ name: "login" }), 3000);
            }
        }
    }
// }
</script>

<style scoped>
#padding-page {
    padding: 31px 61px 27px 31px;
    height: 657px;
    width: 1280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#main-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.left-content {
    display: flex;
    flex-direction: column;
    width: 535px;
    background-color: #fff;
    justify-content: center;
    box-sizing: border-box;
}

.title-left-content {
    font-size: 27px;
    color: #000E1F;
    font-style: normal;
    font-weight: 800;
    line-height: 180%;
    margin-bottom: 10px;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    color: #000E1F;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 20px;
    line-height: 29px;
    text-align: left;
}

input {
    height: 55px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    margin-top: 9px;
    border: 1px solid #e5e5e5;
    padding-left: 20px;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 35px;
}

.white-button {
    width: 171px;
    height: 55px;
    border: none;
    background-color: #fff;
    color: #81858E;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 180%;
    cursor: pointer;
    text-align: start;
}

.black-button {
    width: 171px;
    height: 55px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 180%;
    cursor: pointer;
}

.right-content {
    width: 609px;
    height: 599px;
    margin-left: 44px;
    background-color: #f7f7f7;
    transition: 0.5;
}

.hand {
    padding-top: 60px;
    margin-left: 65px;
    font-size: 48px;
    border: none;
}

.right-text {
    padding-top: 152px;
    margin: 0 auto;
    width: 513px;
}

.title-right-content {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 15px;
    transition: 0.5;
    text-align: left;
}

p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
}

.images {
    margin-top: 93px;
    margin-left: 45px;
    display: flex;
    flex-direction: row;
}

.image {
    margin-left: 35px;
    height: 100px;
    width: 100px;
    background-image: url(./../../public/img3.jpg);
    transition: 0.5;
    border: none;
}

.degrade {
    height: 100px;
    width: 100px;
    background: linear-gradient(270deg, #0000005b 1%, #fff );
}
</style>