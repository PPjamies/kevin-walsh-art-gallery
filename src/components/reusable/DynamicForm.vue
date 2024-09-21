<script>
export default {
  props: {
    fields: {
      type: Array,
      default: null
    },
    buttons: {
      type: Array,
      default: null
    }
  }
}
</script>

<template>
  <div class="dynamic-form">
    <form>
      <div v-for="(field, index) in fields" :key="index">
        <div class="form-item">
          <label :for="field.id">{{ field.id }}</label>
          <component :is="field.component.type" v-bind="field.component.props"/>
        </div>
      </div>
    </form>

    <span>
        <button v-for="(button, index) in buttons" :key="index" v-bind="button.props" @click="button.onClick">{{button.label}}</button>
    </span>
  </div>
</template>

<style scoped>

</style>