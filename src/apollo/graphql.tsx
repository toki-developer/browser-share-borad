import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamptz: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "borad" */
export type Borad = {
  __typename?: 'borad';
  connect_num: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  delete_date?: Maybe<Scalars['date']>;
  delete_flag: Scalars['Int'];
  id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "borad" */
export type Borad_Aggregate = {
  __typename?: 'borad_aggregate';
  aggregate?: Maybe<Borad_Aggregate_Fields>;
  nodes: Array<Borad>;
};

/** aggregate fields of "borad" */
export type Borad_Aggregate_Fields = {
  __typename?: 'borad_aggregate_fields';
  avg?: Maybe<Borad_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Borad_Max_Fields>;
  min?: Maybe<Borad_Min_Fields>;
  stddev?: Maybe<Borad_Stddev_Fields>;
  stddev_pop?: Maybe<Borad_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Borad_Stddev_Samp_Fields>;
  sum?: Maybe<Borad_Sum_Fields>;
  var_pop?: Maybe<Borad_Var_Pop_Fields>;
  var_samp?: Maybe<Borad_Var_Samp_Fields>;
  variance?: Maybe<Borad_Variance_Fields>;
};


/** aggregate fields of "borad" */
export type Borad_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Borad_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Borad_Avg_Fields = {
  __typename?: 'borad_avg_fields';
  connect_num?: Maybe<Scalars['Float']>;
  delete_flag?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "borad". All fields are combined with a logical 'AND'. */
export type Borad_Bool_Exp = {
  _and?: Maybe<Array<Borad_Bool_Exp>>;
  _not?: Maybe<Borad_Bool_Exp>;
  _or?: Maybe<Array<Borad_Bool_Exp>>;
  connect_num?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete_date?: Maybe<Date_Comparison_Exp>;
  delete_flag?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "borad" */
export enum Borad_Constraint {
  /** unique or primary key constraint */
  BoradPkey = 'borad_pkey'
}

/** input type for incrementing numeric columns in table "borad" */
export type Borad_Inc_Input = {
  connect_num?: Maybe<Scalars['Int']>;
  delete_flag?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "borad" */
export type Borad_Insert_Input = {
  connect_num?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delete_date?: Maybe<Scalars['date']>;
  delete_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Borad_Max_Fields = {
  __typename?: 'borad_max_fields';
  connect_num?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delete_date?: Maybe<Scalars['date']>;
  delete_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Borad_Min_Fields = {
  __typename?: 'borad_min_fields';
  connect_num?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delete_date?: Maybe<Scalars['date']>;
  delete_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "borad" */
export type Borad_Mutation_Response = {
  __typename?: 'borad_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Borad>;
};

/** on conflict condition type for table "borad" */
export type Borad_On_Conflict = {
  constraint: Borad_Constraint;
  update_columns?: Array<Borad_Update_Column>;
  where?: Maybe<Borad_Bool_Exp>;
};

/** Ordering options when selecting data from "borad". */
export type Borad_Order_By = {
  connect_num?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  delete_date?: Maybe<Order_By>;
  delete_flag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: borad */
export type Borad_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "borad" */
export enum Borad_Select_Column {
  /** column name */
  ConnectNum = 'connect_num',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeleteDate = 'delete_date',
  /** column name */
  DeleteFlag = 'delete_flag',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "borad" */
export type Borad_Set_Input = {
  connect_num?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delete_date?: Maybe<Scalars['date']>;
  delete_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Borad_Stddev_Fields = {
  __typename?: 'borad_stddev_fields';
  connect_num?: Maybe<Scalars['Float']>;
  delete_flag?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Borad_Stddev_Pop_Fields = {
  __typename?: 'borad_stddev_pop_fields';
  connect_num?: Maybe<Scalars['Float']>;
  delete_flag?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Borad_Stddev_Samp_Fields = {
  __typename?: 'borad_stddev_samp_fields';
  connect_num?: Maybe<Scalars['Float']>;
  delete_flag?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Borad_Sum_Fields = {
  __typename?: 'borad_sum_fields';
  connect_num?: Maybe<Scalars['Int']>;
  delete_flag?: Maybe<Scalars['Int']>;
};

/** update columns of table "borad" */
export enum Borad_Update_Column {
  /** column name */
  ConnectNum = 'connect_num',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeleteDate = 'delete_date',
  /** column name */
  DeleteFlag = 'delete_flag',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Borad_Var_Pop_Fields = {
  __typename?: 'borad_var_pop_fields';
  connect_num?: Maybe<Scalars['Float']>;
  delete_flag?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Borad_Var_Samp_Fields = {
  __typename?: 'borad_var_samp_fields';
  connect_num?: Maybe<Scalars['Float']>;
  delete_flag?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Borad_Variance_Fields = {
  __typename?: 'borad_variance_fields';
  connect_num?: Maybe<Scalars['Float']>;
  delete_flag?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "borad" */
  delete_borad?: Maybe<Borad_Mutation_Response>;
  /** delete single row from the table: "borad" */
  delete_borad_by_pk?: Maybe<Borad>;
  /** insert data into the table: "borad" */
  insert_borad?: Maybe<Borad_Mutation_Response>;
  /** insert a single row into the table: "borad" */
  insert_borad_one?: Maybe<Borad>;
  /** update data of the table: "borad" */
  update_borad?: Maybe<Borad_Mutation_Response>;
  /** update single row of the table: "borad" */
  update_borad_by_pk?: Maybe<Borad>;
};


/** mutation root */
export type Mutation_RootDelete_BoradArgs = {
  where: Borad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Borad_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_BoradArgs = {
  objects: Array<Borad_Insert_Input>;
  on_conflict?: Maybe<Borad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Borad_OneArgs = {
  object: Borad_Insert_Input;
  on_conflict?: Maybe<Borad_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BoradArgs = {
  _inc?: Maybe<Borad_Inc_Input>;
  _set?: Maybe<Borad_Set_Input>;
  where: Borad_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Borad_By_PkArgs = {
  _inc?: Maybe<Borad_Inc_Input>;
  _set?: Maybe<Borad_Set_Input>;
  pk_columns: Borad_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "borad" */
  borad: Array<Borad>;
  /** fetch aggregated fields from the table: "borad" */
  borad_aggregate: Borad_Aggregate;
  /** fetch data from the table: "borad" using primary key columns */
  borad_by_pk?: Maybe<Borad>;
};


export type Query_RootBoradArgs = {
  distinct_on?: Maybe<Array<Borad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Borad_Order_By>>;
  where?: Maybe<Borad_Bool_Exp>;
};


export type Query_RootBorad_AggregateArgs = {
  distinct_on?: Maybe<Array<Borad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Borad_Order_By>>;
  where?: Maybe<Borad_Bool_Exp>;
};


export type Query_RootBorad_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "borad" */
  borad: Array<Borad>;
  /** fetch aggregated fields from the table: "borad" */
  borad_aggregate: Borad_Aggregate;
  /** fetch data from the table: "borad" using primary key columns */
  borad_by_pk?: Maybe<Borad>;
};


export type Subscription_RootBoradArgs = {
  distinct_on?: Maybe<Array<Borad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Borad_Order_By>>;
  where?: Maybe<Borad_Bool_Exp>;
};


export type Subscription_RootBorad_AggregateArgs = {
  distinct_on?: Maybe<Array<Borad_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Borad_Order_By>>;
  where?: Maybe<Borad_Bool_Exp>;
};


export type Subscription_RootBorad_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Branistorming_GetBoradQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type Branistorming_GetBoradQuery = (
  { __typename?: 'query_root' }
  & { borad_by_pk?: Maybe<(
    { __typename?: 'borad' }
    & Pick<Borad, 'id' | 'connect_num' | 'delete_date' | 'delete_flag' | 'created_at' | 'updated_at'>
  )> }
);


export const Branistorming_GetBoradDocument = gql`
    query Branistorming_GetBorad($id: String!) {
  borad_by_pk(id: $id) {
    id
    connect_num
    delete_date
    delete_flag
    created_at
    updated_at
  }
}
    `;

/**
 * __useBranistorming_GetBoradQuery__
 *
 * To run a query within a React component, call `useBranistorming_GetBoradQuery` and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_GetBoradQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBranistorming_GetBoradQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBranistorming_GetBoradQuery(baseOptions: Apollo.QueryHookOptions<Branistorming_GetBoradQuery, Branistorming_GetBoradQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Branistorming_GetBoradQuery, Branistorming_GetBoradQueryVariables>(Branistorming_GetBoradDocument, options);
      }
export function useBranistorming_GetBoradLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Branistorming_GetBoradQuery, Branistorming_GetBoradQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Branistorming_GetBoradQuery, Branistorming_GetBoradQueryVariables>(Branistorming_GetBoradDocument, options);
        }
export type Branistorming_GetBoradQueryHookResult = ReturnType<typeof useBranistorming_GetBoradQuery>;
export type Branistorming_GetBoradLazyQueryHookResult = ReturnType<typeof useBranistorming_GetBoradLazyQuery>;
export type Branistorming_GetBoradQueryResult = Apollo.QueryResult<Branistorming_GetBoradQuery, Branistorming_GetBoradQueryVariables>;