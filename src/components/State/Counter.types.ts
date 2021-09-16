export type CounterState = {
  count: number;
};

type ResetAction = {
  type: "reset";
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

export type CounterAction = UpdateAction | ResetAction;
