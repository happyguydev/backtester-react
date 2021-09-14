/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StrategySelectQuery
// ====================================================

export interface StrategySelectQuery_frontend_indicators {
  __typename: "FrontendIndicator";
  name: string | null;
}

export interface StrategySelectQuery_frontend_operators {
  __typename: "FrontendOperator";
  name: string | null;
}

export interface StrategySelectQuery_frontend {
  __typename: "Frontend";
  indicators: (StrategySelectQuery_frontend_indicators | null)[] | null;
  operands: (string | null)[] | null;
  operators: (StrategySelectQuery_frontend_operators | null)[] | null;
}

export interface StrategySelectQuery {
  frontend: StrategySelectQuery_frontend | null;
  strategyCount: number;
}
