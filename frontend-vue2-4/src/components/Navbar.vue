<template>
    <nav>
        <div class="nav-content">
            <div class="hand">🤘</div>

            <div class="menu">
                <img class="nav-add" src="../../public/adicionar.svg" alt="adicionar">
                <button class="hidden">
                    <ModalNewTask />
                </button>
                <img class="nav-button2" src="../../public/interrogacao.svg" alt="interrogacao">
                <img class="nav-button" src="../../public/sino.svg" alt="sino">
                <img class="nav-button" src="../../public/circulo.svg" alt="letra nome">
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
}

</script>

<style scoped>
nav {
    background-color: #000;
    width: 100%;
    position: fixed;
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
    margin-left: 31px;
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

.nav-button2 {
    padding: 0 22.5px 0 35px;
}
</style>