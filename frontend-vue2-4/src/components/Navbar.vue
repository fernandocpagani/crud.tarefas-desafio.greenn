<template>
    <nav>
        <div class="nav-content">
            <div class="hand"><img src="../../public/maonavbar.png" alt="mao"></div>

            <div class="menu">
                <img class="nav-add" src="../../public/adicionar.svg" alt="adicionar">
                <button class="hidden">
                    <ModalNewTask />
                </button>
                <img class="nav-button2" src="../../public/interrogacao.svg" alt="interrogacao">
                <img class="nav-button" src="../../public/sino.svg" alt="sino">
                <label class="first-letter">{{ name }}</label>
                <a v-on:click="logout" href="/" class="out-button">Sair</a>
            </div>
        </div>
    </nav>
</template>

<script>

import ModalNewTask from './../components/ModalNewTask.vue'

export default {
    name: "Navbar",
    components: {
        ModalNewTask
    },
    data() {
        return {
            name: null,

        }
    },

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "login" })
        }
    },

    mounted() {

        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).user.name[0].toUpperCase();
        console.log(this.name)

    }
}

</script>

<style scoped>
nav {
    background-color: #000;
    width: 100%;
    position: fixed;
    padding: 0 5px;
}

.nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    margin: 0 auto;
    max-width: 1280px;
}

.hand {
    font-size: 28px;
    margin-left: 26px;
}

.menu {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.menu:hover .hidden {
    display: block;
    padding: 0;
}

.hidden {
    align-items: center;
    background-color: transparent;
    border: none;
    display: none;
    cursor: pointer;
}

.nav-add {
    font-size: 14px;
    padding: 0;
}

.nav-button {
    padding: 0 22.5px;
}

.first-letter {
    margin: 0 22.5px;
    height: 30px;
    width: 30px;
    background-color: #009488;
    text-align: center;
    color: #fff;
    font-weight: bold;
    border-radius: 100%;
    font-size: 20px;
}

.out-button{    
font-size: 15px;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
margin: 0 22.5px;
color: #fff;
text-decoration: none;
}

.nav-button2 {
    padding: 0 22.5px 0 35px;
}

@media(max-width: 490px) {

    * {
        max-width: 489px;
       
    }

    nav {
        max-width: 489px;
        position: fixed;
    }
}
</style>