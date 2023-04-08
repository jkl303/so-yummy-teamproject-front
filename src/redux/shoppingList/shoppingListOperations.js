import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { instance } from '../auth/authOperations';

export const fetchShoppingListThunkOperation = createAsyncThunk(
  'shoppingList/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        'http://localhost:3000/api/users/shopping-list/'
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const addShoppingListItemThunkOperation = createAsyncThunk(
//   "shoppingList/addShoppingListItem",
//   async (newItem, { rejectWithValue, getState }) => {
//     try {
//       // !!!!! recieving ingredients from recipe state so we can find the one that has to be  added
//       const state = getState();
//       console.log(state);

//       // тут буде забор массиву об"єктів з інгрідієнтами, щоб знайти потрібний
//       //   const currentContacts = state.contacts.contacts;

//       // частина з дз08
//       // trying to find it in the array of contacts by name
//       //   const foundDuplicate = currentContacts.find(
//       //     (contact) => contact.name === newContact.name
//       //   );
//       //   if (foundDuplicate) {
//       //     toast.error(`Oops, ${newContact.name} is already in your phonebook`);
//       //     // rejecting promise if the contact exists
//       //     return rejectWithValue(
//       //       "Oops, this contact is already in your phonebook"
//       //     );
//       //   }

//       // adding new shoppingListItem if it has cleared all the checks above
//       const response = await addShoppingListItem(newItem);
//       if (response) {
//         toast.success("sucessfully added!");
//       }
//       return response;
//     } catch (error) {
//       if (error) {
//         toast.error(error.message);
//       }
//       return rejectWithValue(error);
//     }
//   }
// );

export const deleteShoppingListItemThunkOperation = createAsyncThunk(
  'shoppingList/deleteShoppingListItem',
  async (id, { rejectWithValue }) => {
    console.log(id);

    try {
      const { data } = await instance.delete(
        `http://localhost:3000/api/users/shopping-list/`,
        {
          data: { id: id },
        }
      );
      console.log(data);
      if (data) {
        toast.success('sucessfully deleted!');
      }
      return data;
    } catch (error) {
      if (error) {
        toast.error(error.message);
      }
      return rejectWithValue(error);
    }
  }
);
