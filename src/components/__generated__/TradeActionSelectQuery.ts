/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TradeActionSelectQuery
// ====================================================

export interface TradeActionSelectQuery_frontend {
  __typename: "Frontend";
  tradeActions: (string | null)[] | null;
}

export interface TradeActionSelectQuery_comboStrategies {
  __typename: "ComboStrategy";
  indicator: string | null;
  operand: string | null;
  operator: string | null;
}

export interface TradeActionSelectQuery {
  frontend: TradeActionSelectQuery_frontend | null;
  comboStrategies: (TradeActionSelectQuery_comboStrategies | null)[];
}
