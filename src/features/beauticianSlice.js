import { createSlice } from "@reduxjs/toolkit";

const beauticianSlice = createSlice({
  name: "beautician",
  initialState: {
    beauticianList: [],
  },
  reducers: {
    setBeauticianList: (state, action) => {
      state.beauticianList = action.payload;
    },

    // addNewBeautician: (state, action) => {
    //   state.beauticianList.push({ ...action.payload });
    // },
    // addEditedBeautician: (state, action) => {
    //   const editedList = state.beauticianList.map(function (item) {
    //     return item._id == action.payload._id ? action.payload : item;
    //   });
    //   state.beauticianList = editedList;
    // },
    // removeBeautician: (state, action) => {
    //   const updatdbeauticianList = state.beauticianList.filter(
    //     (item) => item._id != action.payload._id
    //   );
    //   state.beauticianList = updatdbeauticianList;
    // },
  },
});

export default beauticianSlice.reducer;

export const { setBeauticianList, 
  // addNewBeautician, addEditedBeautician, removeBeautician
 } =
  beauticianSlice.actions;
