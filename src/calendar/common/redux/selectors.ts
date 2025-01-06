import { createSelector } from "@reduxjs/toolkit";

export const getCalendar = (state) => state.calendar;

export const getSelectedEntities = createSelector(
  getCalendar,
  (calendar) => calendar.selectedEntities
);

export const getSelectedOrderId = createSelector(
  getCalendar,
  (calendar) => calendar.selectedOrderId
);
