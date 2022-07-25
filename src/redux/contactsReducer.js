import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getItems,
  addItem,
  deleteItem,
  changeFilter,
} from './contactsOperations';

const items = createReducer([], {
  [getItems.fulfilled]: (_, { payload }) => payload,
  [addItem.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteItem.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loader = createReducer(false, {
  [getItems.pending]: (_, { payload }) => true,
  [getItems.fulfilled]: (_, { payload }) => false,
  [getItems.rejected]: (_, { payload }) => false,
  [addItem.pending]: (_, { payload }) => true,
  [addItem.fulfilled]: (_, { payload }) => false,
  [addItem.rejected]: (_, { payload }) => false,
  [deleteItem.pending]: (_, { payload }) => true,
  [deleteItem.fulfilled]: (_, { payload }) => false,
  [deleteItem.rejected]: (_, { payload }) => false,
});

const error = createReducer('', {
  [getItems.rejected]: (_, { payload }) => payload,
  [addItem.rejected]: (_, { payload }) => payload,
  [deleteItem.rejected]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
  loader,
  error,
});
