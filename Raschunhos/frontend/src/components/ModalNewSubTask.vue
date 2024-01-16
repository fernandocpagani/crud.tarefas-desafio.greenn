<template>


    <form id="form">

      <div>
        <input type="name" id="task-name" name="task-name" placeholder="Nome da subtarefa" required>
      </div>

      <div>
        <input type="name" id="task-description" name="task-description" placeholder="Descrição" required>
      </div>    

      <div class="buttons">
        <button class="white-button">Cancelar</button>

        <button class="black-button">Criar subtarefa</button>
      </div>
    </form>

 
</template>

<style scoped>
.button-add-task {
  background-color: transparent;
  border: none;
  font-weight: 400;
  color: #81858e;
  font-size: 15px;
  cursor: pointer;
  margin-left: 10px
}

.button-add-task img {
  color: #81858e;
}

.button-add-task img {
  width: 20px;
  padding-right: 10px;
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

#task-name {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-top: 21px;
  margin-left: 25px;
  border: none;
}

#task-description {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  margin-top: 15px;
  margin-left: 25px;
  margin-bottom: 20px;
  border: none;
}

.button-date {
  margin-left: 25px;
  width: 199px;
  height: 40px;
  box-sizing: border-box;
  border: solid 1px #e5e5e5;
  background-color: #fff;
  margin-bottom: 15px;
}

.date {
  margin-left: 10px;
  border: none;
}

.white-button {
  width: 102px;
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
  font-style: Montserrat;
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

.buttons {
  border-top: solid 1px #e5e5e5;
  padding: 14px 25px;
}
</style>