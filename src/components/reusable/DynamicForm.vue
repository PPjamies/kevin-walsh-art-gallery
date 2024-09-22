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
  <div class="dynamic-form-container">
    <form>
      <div v-for="field in fields" :key="field.id">
        <div class="form-item">
          <label :for="field.id">{{ field.label }}</label>
          <component :is="field.component.type" v-bind="field.component.props"/>
        </div>
      </div>

      <span>
        <button class="form-buttons" v-for="button in buttons" :key="button.id"
                v-bind="button.props"
                @click="button.onClick">
          {{ button.label }}
        </button>
      </span>
    </form>
  </div>
</template>

<style scoped>

form {
  padding: var(--p-1);
}

.form-item {
  display: flex;
  flex-direction: column;
  padding: var(--p-0);
}

.form-item input, textarea {
  padding: var(--p-1);
  border-style: none;
  border-radius: var(--border-round-0);
  background-color: var(--gray-200);
}

.form-buttons {
  padding: var(--p-0);
}
</style>