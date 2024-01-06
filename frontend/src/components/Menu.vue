<template>
    <div class="main-content">
        <div class="menu">
            <button class="first-menu-button"><img src="../../public/entrada.svg" alt="">Entrada</button>
            <button class="menu-button"><img src="../../public/tarefasdehoje.svg" alt="">Tarefas de hoje</button>
            <button class="menu-button"><img src="../../public/vencidos.svg" alt="">Vencidos</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "Menu",
}

</script>

<style scoped>

.menu{
        background-color: gray;
        width: 293px;
        height: 100vh;
    }
    
    .first-menu-button{
        background-color:gray;
        border: none;
        font-size: 15px;
        font-weight: 600px;
        line-height: 18.29px;
        margin-left: 46px;
        margin-top: 63px;
    }

    .first-menu-button img{
        margin-right: 20px;
    }
    
    .menu-button{
        background-color:gray;
        border: none;
        font-size: 15px;
        font-weight: 600px;
        line-height: 18.29px;
        margin-left: 46px;
        margin-top: 45px;
    }

    .menu-button img{
        margin-right: 20px;
    }
</style>