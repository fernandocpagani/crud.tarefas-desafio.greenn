<template>
    <nav>
        <div class="nav-content">
            <div class="hand">🤘</div>

            <div>
                <img class="nav-button" src="../../public/Vector.svg" alt="adicionar">
                <img class="nav-button" src="../../public/interrogacao.svg" alt="interrogacao">
                <img class="nav-button" src="../../public/sino.svg" alt="sino">
                <img class="last-nav-button" src="../../public/circulo.svg" alt="letra nome">
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
}

</script>

<style scoped>
nav {
    background-color: #000;
    width: 100%;    
}

.nav-content{
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

.nav-button {
    margin-right: 45px;
}

.last-nav-button {
    margin-right: 20px;
}
</style>