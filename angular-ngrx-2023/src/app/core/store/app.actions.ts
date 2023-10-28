import { createAction, props } from "@ngrx/store";
const emptyLabel = '[Empty Action] empty action get';
export const emptyAction = createAction(
  emptyLabel
  );
