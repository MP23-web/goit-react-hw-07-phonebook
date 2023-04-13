import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://6437fe7dc1565cdd4d635880.mockapi.io/contacts',
});

export const getContacts = async () => (await contactsAPI.get()).data;

export const deleteContact = async id => (await contactsAPI.delete(id)).data;

export const addContact = async contact =>
  (await contactsAPI.post('', contact)).data;