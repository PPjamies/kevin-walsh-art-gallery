<script>
import DynamicForm from "@/components/reusable/DynamicForm.vue";

export default {
  components: {DynamicForm},
  // props: {
  //   contact: {
  //     firstname: String,
  //     lastname: String,
  //     phone: String,
  //     email: String,
  //     address: String,
  //     url: String,
  //     alt: String,
  //   },
  //   backgroundGallery: {
  //     type: [],
  //     default: null
  //   }
  // },
  methods: {
    submitMessage() {
      console.log("clicked from Contact Me")
    },
    getFormFields() {
      return [
        {
          id: 'firstname',
          label: 'First Name',
          component: {
            type: 'input',
            props: {
              type: 'text',
              placeholder: 'First Name'
            }
          }
        },
        {
          id: 'lastname',
          label: 'Last Name',
          component: {
            type: 'input',
            props: {
              type: 'text',
              placeholder: 'Last Name'
            }
          }
        },
        {
          id: 'email',
          label: 'Email',
          component: {
            type: 'input',
            props: {
              type: 'email',
              placeholder: 'Email'
            }
          }
        },
        {
          id: 'message',
          label: 'Message',
          component: {
            type: 'textarea',
            props: {
              rows: 20,
              cols: 80,
              wrap: 'hard',
              placeholder: 'Message'
            }
          }
        }
      ]
    },
    getFormButtons() {
      return [
        {
          id: 'submit',
          label: 'Submit',
          props: {
            type: 'submit',
            value: 'Submit'
          },
          onClick: () => {
            console.log("Sumbitted!")
          }

        },
        {
          id: 'cancel',
          label: 'Cancel',
          props: {
            type: 'button',
            value: 'Cancel'
          },
          onClick: () => {
            console.log("Cancelled!")
          }
        }
      ]
    }
  }
}
</script>

<template>
  <div class="contact-me-container">
    <DynamicForm :fields="this.getFormFields()" :buttons="this.getFormButtons()"/>
  </div>
</template>

<style scoped>

</style>