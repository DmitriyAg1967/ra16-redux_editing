import { CHANGE_INPUT_VALUE, ADD_SERVICE, REMOVE_SERVICE, RESET_FORM, EDIT_SERVICE, SET_FORM } from './actionTypes'

export const changeInputValue = (name, value) => {
  return { type: CHANGE_INPUT_VALUE, payload: { name, value } }
}

export const addService = (name, price) => {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export const resetForm = () => {
  return { type: RESET_FORM };
}

export const removeService = (id) => {
  return { type: REMOVE_SERVICE, payload: { id } }
}

export const editService = (name, price, id) => {
  return { type: EDIT_SERVICE, payload: { name, price, id } };
}

export const setForm = (name, price, id) => {
  return { type: SET_FORM, payload: { name, price, clickedId: id } }
}