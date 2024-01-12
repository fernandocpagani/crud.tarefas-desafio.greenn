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
    
  
    async mounted() { 

        let user = localStorage.getItem('user-info');
    this.name= JSON.parse(user).user.name[0].toUpperCase();
    console.log(this.name)

}
}

</script>

<style scoped>
.main-content {
    width: 293px;
    height: 100%;
    position: fixed;    
}

.menu {
    background-color: #fafafa;
    width: 293px;
    padding: 0;
    margin-top: 70px;
}

.first-menu-button {
    background-color: #fafafa;
    border: none;
    font-size: 15px;
    font-weight: 600px;
    line-height: 18.29px;
    margin-left: 46px;
    margin-top: 63px;
    cursor: pointer;
}

.first-menu-button img {
    margin-right: 20px;
}

.menu-button {
    background-color: #fafafa;
    border: none;
    font-size: 15px;
    font-weight: 600px;
    line-height: 18.29px;
    margin-left: 46px;
    margin-top: 45px;
    cursor: pointer;
}

.menu-button img {
    margin-right: 20px;
}
</style>