<template>
    <div>
      <b-button v-b-modal.modal-prevent-closing><img  src="../../public/lapis.svg"
                alt="lapis"></b-button>
  
      <div class="mt-3">
        Submitted Names:
        <div v-if="submittedNames.length === 0">--</div>
        <ul v-else class="mb-0 pl-3">
          <li v-for="name in submittedNames">{{ name }}</li>
        </ul>
      </div>
  
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Submit Your Name"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label=""
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          name: '',
          nameState: null,
          submittedNames: []
        }
      },
      methods: {
        checkFormValidity() {
          const valid = this.$refs.form.checkValidity()
          this.nameState = valid
          return valid
        },
        resetModal() {
          this.name = ''
          this.nameState = null
        },
        handleOk(bvModalEvent) {
          // Prevent modal from closing
          bvModalEvent.preventDefault()
          // Trigger submit handler
          this.handleSubmit()
        },
        handleSubmit() {
          // Exit when the form isn't valid
          if (!this.checkFormValidity()) {
            return
          }
          // Push the name to submitted names
          this.submittedNames.push(this.name)
          // Hide the modal manually
          this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
          })
        }
      }
    }
  </script>

<style scoped>
.button-add-task {
    background-color: transparent;
    border: none;
    font-weight: 400;
    color: #81858e;
    font-size: 15px;
    cursor: pointer;
}

.button-add-task:hover {
    background-color: transparent; 
}

.nav-add {
    height: 14px;
    width: 14px;
    margin-right: 10px;
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
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    margin-top: 21px;
    margin-left: 25px;
    border: none;
}

#task-description {
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


.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 55px;
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
    margin-left: 370px;
    text-decoration: none;
}

.white-button:hover {
    background-color: transparent; 
    background-color: #f7f7f7;
     color: #000;
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