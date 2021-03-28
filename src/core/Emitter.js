export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => listener(...args))
    return true
  }

  // Подписываемся на уведомления
  // Добавляем нового слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('Roman', (data) => console.log('Sub: ', data))
// emitter.emit('Roman', 42)
//
// setTimeout(() => {
//   emitter.emit('Roman', 'after 2 seconds')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('Roman', 'after 4 seconds')
// }, 4000)
