import { reactive } from 'vue'

export const eventBus = reactive({
  listeners: {},

  emit(event, value) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((callback) => callback(value))
    }
  },

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }
})
