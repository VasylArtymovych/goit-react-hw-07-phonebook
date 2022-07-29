import { getItems, addItem, deleteItem } from './contactsOperations';
import { createSlice } from '@reduxjs/toolkit';
// import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import { changeFilterAction } from './contactsActions';

// Option with createSlice:
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    addLoader: false,
    loader: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [getItems.pending]: (state, _) => ({ ...state, loader: true }),
    [getItems.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      loader: false,
    }),
    [getItems.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      loader: false,
    }),

    [addItem.pending]: (state, _) => ({ ...state, addLoader: true }),
    [addItem.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [payload, ...state.items],
      addLoader: false,
    }),
    [addItem.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      addLoader: false,
    }),

    [deleteItem.pending]: (state, _) => ({ ...state, loader: true }),
    [deleteItem.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload),
      loader: false,
    }),
    [deleteItem.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      loader: false,
    }),
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

// Option with createReducer:

// const items = createReducer([], {
//   [getItems.fulfilled]: (_, { payload }) => payload,
//   [addItem.fulfilled]: (state, { payload }) => [payload, ...state],
//   [deleteItem.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const loader = createReducer(false, {
//   [getItems.pending]: (_, action) => true,
//   [getItems.fulfilled]: (_, action) => false,
//   [getItems.rejected]: (_, action) => false,
//   [addItem.pending]: (_, action) => true,
//   [addItem.fulfilled]: (_, action) => false,
//   [addItem.rejected]: (_, action) => false,
//   [deleteItem.pending]: (_, action) => true,
//   [deleteItem.fulfilled]: (_, action) => false,
//   [deleteItem.rejected]: (_, action) => false,
// });

// const error = createReducer('', {
//   [getItems.rejected]: (_, { payload }) => payload,
//   [addItem.rejected]: (_, { payload }) => payload,
//   [deleteItem.rejected]: (_, { payload }) => payload,
// });

// const filter = createReducer('', {
//   [changeFilterAction]: (_, { payload }) => payload,
// });

// export const contactsReducer = combineReducers({
//   items,
//   filter,
//   loader,
//   error,
// });
