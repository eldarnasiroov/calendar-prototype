import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITreeNode } from "../../components/tree/common/types";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedEntities: null,
    selectedOrderId: null,
  },
  reducers: {
    setSelectedEntities: (state, action: PayloadAction<ITreeNode>) => {
      state.selectedEntities = action.payload;
    },
    setSelectedOrderId: (state, action: PayloadAction<number | null>) => {
      state.selectedOrderId = action.payload;
    },
  },
});

export const { setSelectedEntities, setSelectedOrderId } =
  calendarSlice.actions;

export default calendarSlice.reducer;
