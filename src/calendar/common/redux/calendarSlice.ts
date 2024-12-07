import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITreeNode } from "../../components/tree/common/types";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedEntities: null,
  },
  reducers: {
    setSelectedEntities: (state, action: PayloadAction<ITreeNode>) => {
      state.selectedEntities = action.payload;
    },
  },
});

export const { setSelectedEntities } = calendarSlice.actions;

export default calendarSlice.reducer;
