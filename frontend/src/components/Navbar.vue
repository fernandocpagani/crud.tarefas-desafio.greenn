<template>
    <nav>
        <div class="nav-content">
            <div class="hand">🤘</div>

            <div class="menu">

                <div class="hidden">
                    <div><img class="nav-add" src="../../public/Vector.svg" alt="adicionar"></div>
                    <div class="modal">
                        <ModalNewTask />
                    </div>
                </div>
                <img class="second-nav-button" src="../../public/interrogacao.svg" alt="interrogacao">
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

.hidden{
    align-items: center;
}


.nav-add {
    transition: 0.5s;
}

.modal {
    background-color: #000;
    display: none;
    transition: 0.5s;
}

.hidden:hover .modal {
    margin-left: 10px;
    display: block;
    align-items: center;
}

.hidden:hover .menu {    
    align-items: center;
}

.second-nav-button {
    padding: 0 22.5px 0 45px;
}

.nav-button {
    padding: 0 22.5px;
}
</style>