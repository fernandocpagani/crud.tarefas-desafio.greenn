<template>
    <div>
        <a href="#modal_1" class="btn"><img class="nav-add" src="../../public/adicionarcinza.svg" alt="adicionar"> <label>Criar subtarefa</label></a>

        <div id="modal_1" class="modal">
            <div class="modal__content">

                <form id="form">
                    <div>
                        <input type="name" id="task-name" name="task-name" placeholder="Nome da subtarefa" maxlength="30" required v-model="title">
                    </div>

                    <div>
                        <input type="name" id="task-description" name="task-description" maxlength="60"
                            placeholder="Descrição" required v-model="description">
                    </div>

                    <div class="buttons">
                        <a href="#" class="white-button">Cancelar</a>
                        <div class="button" @click="createTask()">
                            <input type="button" class="black-button" value="Adicionar post">
                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>
  
<script>

</script>

<style scoped>

a {
    text-decoration: none;
}

.btn {
    border: none;
    color: #81858e;
    font-size: 15px;
}

.btn img {
    font-size: 14px;
    margin-right: 10px;
}

.modal {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #000000ab;
    display: grid;
    place-content: center;
    visibility: hidden;
    opacity: 0;
    transition: .3s;
}

.modal:target {
    opacity: 1;
    visibility: visible;
}

.modal__content {
    background-color: #fff;
    width: 678px;
    height: 216px;      
}

#task-name {  
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
padding: 25px;  
  border: none;
}

#task-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  margin-top: 10;
  margin-left: 25px;
  margin-bottom: 45px;
  border: none;
}

.buttons {
    border-top: solid 1px #e5e5e5;
    padding: 14px 25px;
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
    margin-left: 380px;
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
</style>