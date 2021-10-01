// store.js
import { writable } from 'svelte/store';

export const user = writable({
  Nombre: "",
  Telefono: "",
  Apellido: ""
})

