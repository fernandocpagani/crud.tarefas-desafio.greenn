<template>
    <div id=padding-page>
        <div id="main-container">

            <div class="left-content">

                <div class="hand">🤘</div>

                <section class="left-text">
                    <h3 class="title-left-content">A fortuna fica ao lado daquele que ousa.</h3>
                    <p class="text-left-content">Todo progresso ocorre fora da zona de conforto.</p>
                </section>

                <div class="images">
                    <div class="degrade"></div>
                    <div class="image"></div>
                </div>
            </div>

            <div class="right-content">

                <h3 class="title-right-content">Login</h3>

                <form>

                    <input type="hidden" name="type" value="login">

                    <div class="form-group">
                        <label for="email">Endereço de e-mail:</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="email@email.com.br">
                    </div>

                    <div class="form-group">
                        <label for="password">Senha de acesso:</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="********">
                    </div>

                    <div class="buttons">
                        <router-link to="/createuser">
                            <button class="white-button">Não tenho conta</button>
                        </router-link>
                        <button class="black-button">Acessar</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>

<style scoped>
#padding-page {
    padding: 4.6vh 4.758vw 4.6vh 2.35vw;
    height: 100vh;
    width: 100vw;
    justify-items: center;
}

#main-container {
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.left-content {
    width: 47.57vw;
    height: 90.8vh;
    margin-right: 3.4vw;
    background-color: #f7f7f7;
    transition: 0.5;
}

.hand {
    padding-top: 9.13vh;
    margin-left: 5.08vw;
    font-size: 48px;
    border: none;
}

.left-text {
    padding-top: 23.11vh;
    margin: 0 auto;
    width: 40vw;
}

.title-left-content {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 2.3vh;
    transition: 0.5;
}

p {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}

.images {
    margin-top: 14vh;
    margin-left: 3.5vw;
    display: flex;
    flex-direction: row;
}

.image {
    margin-left: -135px;
    height: 100px;
    width: 135px;
    background-image: url(./../../public/img3.jpg);
    transition: 0.5;
}

.degrade {
    height: 100px;
    width: 235px;
    background: linear-gradient(270deg, #000 30%, #fff);
}

.right-content {
    display: flex;
    flex-direction: column;
    width: 41.78vw;
    background-color: #fff;
    justify-content: center;
    box-sizing: border-box;
}

.title-right-content {
    font-size: 27px;
    color: #000E1F;
    font-style: normal;
    font-weight: 800;
    line-height: 180%;
    margin-bottom: 3vh;
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
    line-height: 180%;
    margin-top: 3vh;
}

input {
    height: 55px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    margin-top: 1.37vh;
    border: 1px solid #e5e5e5;
    padding-left: 20px;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5.3vh;
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

.left-content:hover {
    background-color: #000;
}

.left-content:hover .text-left-content,
.left-content:hover .title-left-content {
    color: #fff;
}

.left-content:hover .hand {
    padding-top: 14.3vh;
}

.left-content:hover .image {
    background-image: url(./../../public/img4.jpg);
}

.left-content:hover .degrade {
    background: linear-gradient(90deg, #000 30%, #fff);
}

.left-content:hover .left-text {
    padding-top: 17.6vh;
}

.left-content:hover .images {
    margin-top: 14.33vh;
    ;
}
</style>