import { createSlice } from '@reduxjs/toolkit';

// import of all the thunk operations
import {
  fetchShoppingListThunkOperation,
  addShoppingListItemThunkOperation,
  deleteShoppingListItemThunkOperation,
} from '../shoppingList/shoppingListOperations';

const shoppingListInitialState = {
  items: [],
  error: null,
  isLoading: false,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: shoppingListInitialState,
  extraReducers: {
    // fetch reducers
    [fetchShoppingListThunkOperation.pending](state) {
      state.isLoading = true;
    },
    [fetchShoppingListThunkOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      state.items = action.payload.data.data.result[0].list;
      console.log(state.items);
    },
    [fetchShoppingListThunkOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    //     // add  reducers
    [addShoppingListItemThunkOperation.pending](state) {
      state.isLoading = true;
    },
    [addShoppingListItemThunkOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // console.log(action.payload.data.result.list[0]);
      state.items.push(action.payload.data.result.list[0]);
    },
    [addShoppingListItemThunkOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // deleteReducers
    [deleteShoppingListItemThunkOperation.pending](state) {
      state.isLoading = true;
    },
    [deleteShoppingListItemThunkOperation.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteShoppingListItemThunkOperation.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
