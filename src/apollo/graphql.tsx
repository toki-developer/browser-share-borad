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
  uuid: any;
};


/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
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
  brainstorming_theme?: Maybe<Scalars['String']>;
  /** fetch data from the table: "branistorming_opinions" */
  branistorming_opinions: Array<Branistorming_Opinions>;
  /** An aggregate relationship */
  branistorming_opinions_aggregate: Branistorming_Opinions_Aggregate;
  connect_num: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  delete_date?: Maybe<Scalars['date']>;
  delete_flag: Scalars['Int'];
  id: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "borad" */
export type BoradBranistorming_OpinionsArgs = {
  distinct_on?: Maybe<Array<Branistorming_Opinions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branistorming_Opinions_Order_By>>;
  where?: Maybe<Branistorming_Opinions_Bool_Exp>;
};


/** columns and relationships of "borad" */
export type BoradBranistorming_Opinions_AggregateArgs = {
  distinct_on?: Maybe<Array<Branistorming_Opinions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branistorming_Opinions_Order_By>>;
  where?: Maybe<Branistorming_Opinions_Bool_Exp>;
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
  brainstorming_theme?: Maybe<String_Comparison_Exp>;
  branistorming_opinions?: Maybe<Branistorming_Opinions_Bool_Exp>;
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
  brainstorming_theme?: Maybe<Scalars['String']>;
  branistorming_opinions?: Maybe<Branistorming_Opinions_Arr_Rel_Insert_Input>;
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
  brainstorming_theme?: Maybe<Scalars['String']>;
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
  brainstorming_theme?: Maybe<Scalars['String']>;
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

/** input type for inserting object relation for remote table "borad" */
export type Borad_Obj_Rel_Insert_Input = {
  data: Borad_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Borad_On_Conflict>;
};

/** on conflict condition type for table "borad" */
export type Borad_On_Conflict = {
  constraint: Borad_Constraint;
  update_columns?: Array<Borad_Update_Column>;
  where?: Maybe<Borad_Bool_Exp>;
};

/** Ordering options when selecting data from "borad". */
export type Borad_Order_By = {
  brainstorming_theme?: Maybe<Order_By>;
  branistorming_opinions_aggregate?: Maybe<Branistorming_Opinions_Aggregate_Order_By>;
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
  BrainstormingTheme = 'brainstorming_theme',
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
  brainstorming_theme?: Maybe<Scalars['String']>;
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
  BrainstormingTheme = 'brainstorming_theme',
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

/** columns and relationships of "branistorming_opinions" */
export type Branistorming_Opinions = {
  __typename?: 'branistorming_opinions';
  /** An object relationship */
  borad: Borad;
  borad_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  disable_flag?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  opinion: Scalars['String'];
  position_x: Scalars['Float'];
  position_y: Scalars['Float'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "branistorming_opinions" */
export type Branistorming_Opinions_Aggregate = {
  __typename?: 'branistorming_opinions_aggregate';
  aggregate?: Maybe<Branistorming_Opinions_Aggregate_Fields>;
  nodes: Array<Branistorming_Opinions>;
};

/** aggregate fields of "branistorming_opinions" */
export type Branistorming_Opinions_Aggregate_Fields = {
  __typename?: 'branistorming_opinions_aggregate_fields';
  avg?: Maybe<Branistorming_Opinions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Branistorming_Opinions_Max_Fields>;
  min?: Maybe<Branistorming_Opinions_Min_Fields>;
  stddev?: Maybe<Branistorming_Opinions_Stddev_Fields>;
  stddev_pop?: Maybe<Branistorming_Opinions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Branistorming_Opinions_Stddev_Samp_Fields>;
  sum?: Maybe<Branistorming_Opinions_Sum_Fields>;
  var_pop?: Maybe<Branistorming_Opinions_Var_Pop_Fields>;
  var_samp?: Maybe<Branistorming_Opinions_Var_Samp_Fields>;
  variance?: Maybe<Branistorming_Opinions_Variance_Fields>;
};


/** aggregate fields of "branistorming_opinions" */
export type Branistorming_Opinions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Branistorming_Opinions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "branistorming_opinions" */
export type Branistorming_Opinions_Aggregate_Order_By = {
  avg?: Maybe<Branistorming_Opinions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Branistorming_Opinions_Max_Order_By>;
  min?: Maybe<Branistorming_Opinions_Min_Order_By>;
  stddev?: Maybe<Branistorming_Opinions_Stddev_Order_By>;
  stddev_pop?: Maybe<Branistorming_Opinions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Branistorming_Opinions_Stddev_Samp_Order_By>;
  sum?: Maybe<Branistorming_Opinions_Sum_Order_By>;
  var_pop?: Maybe<Branistorming_Opinions_Var_Pop_Order_By>;
  var_samp?: Maybe<Branistorming_Opinions_Var_Samp_Order_By>;
  variance?: Maybe<Branistorming_Opinions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "branistorming_opinions" */
export type Branistorming_Opinions_Arr_Rel_Insert_Input = {
  data: Array<Branistorming_Opinions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Branistorming_Opinions_On_Conflict>;
};

/** aggregate avg on columns */
export type Branistorming_Opinions_Avg_Fields = {
  __typename?: 'branistorming_opinions_avg_fields';
  disable_flag?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Avg_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "branistorming_opinions". All fields are combined with a logical 'AND'. */
export type Branistorming_Opinions_Bool_Exp = {
  _and?: Maybe<Array<Branistorming_Opinions_Bool_Exp>>;
  _not?: Maybe<Branistorming_Opinions_Bool_Exp>;
  _or?: Maybe<Array<Branistorming_Opinions_Bool_Exp>>;
  borad?: Maybe<Borad_Bool_Exp>;
  borad_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  disable_flag?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  opinion?: Maybe<String_Comparison_Exp>;
  position_x?: Maybe<Float_Comparison_Exp>;
  position_y?: Maybe<Float_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "branistorming_opinions" */
export enum Branistorming_Opinions_Constraint {
  /** unique or primary key constraint */
  BranistormingOpinionsPkey = 'branistorming_opinions_pkey'
}

/** input type for incrementing numeric columns in table "branistorming_opinions" */
export type Branistorming_Opinions_Inc_Input = {
  disable_flag?: Maybe<Scalars['Int']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "branistorming_opinions" */
export type Branistorming_Opinions_Insert_Input = {
  borad?: Maybe<Borad_Obj_Rel_Insert_Input>;
  borad_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  disable_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  opinion?: Maybe<Scalars['String']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Branistorming_Opinions_Max_Fields = {
  __typename?: 'branistorming_opinions_max_fields';
  borad_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  disable_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  opinion?: Maybe<Scalars['String']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Max_Order_By = {
  borad_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  disable_flag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  opinion?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Branistorming_Opinions_Min_Fields = {
  __typename?: 'branistorming_opinions_min_fields';
  borad_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  disable_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  opinion?: Maybe<Scalars['String']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Min_Order_By = {
  borad_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  disable_flag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  opinion?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "branistorming_opinions" */
export type Branistorming_Opinions_Mutation_Response = {
  __typename?: 'branistorming_opinions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Branistorming_Opinions>;
};

/** on conflict condition type for table "branistorming_opinions" */
export type Branistorming_Opinions_On_Conflict = {
  constraint: Branistorming_Opinions_Constraint;
  update_columns?: Array<Branistorming_Opinions_Update_Column>;
  where?: Maybe<Branistorming_Opinions_Bool_Exp>;
};

/** Ordering options when selecting data from "branistorming_opinions". */
export type Branistorming_Opinions_Order_By = {
  borad?: Maybe<Borad_Order_By>;
  borad_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  disable_flag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  opinion?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: branistorming_opinions */
export type Branistorming_Opinions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "branistorming_opinions" */
export enum Branistorming_Opinions_Select_Column {
  /** column name */
  BoradId = 'borad_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisableFlag = 'disable_flag',
  /** column name */
  Id = 'id',
  /** column name */
  Opinion = 'opinion',
  /** column name */
  PositionX = 'position_x',
  /** column name */
  PositionY = 'position_y',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "branistorming_opinions" */
export type Branistorming_Opinions_Set_Input = {
  borad_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  disable_flag?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  opinion?: Maybe<Scalars['String']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Branistorming_Opinions_Stddev_Fields = {
  __typename?: 'branistorming_opinions_stddev_fields';
  disable_flag?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Stddev_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Branistorming_Opinions_Stddev_Pop_Fields = {
  __typename?: 'branistorming_opinions_stddev_pop_fields';
  disable_flag?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Stddev_Pop_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Branistorming_Opinions_Stddev_Samp_Fields = {
  __typename?: 'branistorming_opinions_stddev_samp_fields';
  disable_flag?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Stddev_Samp_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Branistorming_Opinions_Sum_Fields = {
  __typename?: 'branistorming_opinions_sum_fields';
  disable_flag?: Maybe<Scalars['Int']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Sum_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
};

/** update columns of table "branistorming_opinions" */
export enum Branistorming_Opinions_Update_Column {
  /** column name */
  BoradId = 'borad_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisableFlag = 'disable_flag',
  /** column name */
  Id = 'id',
  /** column name */
  Opinion = 'opinion',
  /** column name */
  PositionX = 'position_x',
  /** column name */
  PositionY = 'position_y',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Branistorming_Opinions_Var_Pop_Fields = {
  __typename?: 'branistorming_opinions_var_pop_fields';
  disable_flag?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Var_Pop_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Branistorming_Opinions_Var_Samp_Fields = {
  __typename?: 'branistorming_opinions_var_samp_fields';
  disable_flag?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Var_Samp_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Branistorming_Opinions_Variance_Fields = {
  __typename?: 'branistorming_opinions_variance_fields';
  disable_flag?: Maybe<Scalars['Float']>;
  position_x?: Maybe<Scalars['Float']>;
  position_y?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "branistorming_opinions" */
export type Branistorming_Opinions_Variance_Order_By = {
  disable_flag?: Maybe<Order_By>;
  position_x?: Maybe<Order_By>;
  position_y?: Maybe<Order_By>;
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
  /** delete data from the table: "branistorming_opinions" */
  delete_branistorming_opinions?: Maybe<Branistorming_Opinions_Mutation_Response>;
  /** delete single row from the table: "branistorming_opinions" */
  delete_branistorming_opinions_by_pk?: Maybe<Branistorming_Opinions>;
  /** insert data into the table: "borad" */
  insert_borad?: Maybe<Borad_Mutation_Response>;
  /** insert a single row into the table: "borad" */
  insert_borad_one?: Maybe<Borad>;
  /** insert data into the table: "branistorming_opinions" */
  insert_branistorming_opinions?: Maybe<Branistorming_Opinions_Mutation_Response>;
  /** insert a single row into the table: "branistorming_opinions" */
  insert_branistorming_opinions_one?: Maybe<Branistorming_Opinions>;
  /** update data of the table: "borad" */
  update_borad?: Maybe<Borad_Mutation_Response>;
  /** update single row of the table: "borad" */
  update_borad_by_pk?: Maybe<Borad>;
  /** update data of the table: "branistorming_opinions" */
  update_branistorming_opinions?: Maybe<Branistorming_Opinions_Mutation_Response>;
  /** update single row of the table: "branistorming_opinions" */
  update_branistorming_opinions_by_pk?: Maybe<Branistorming_Opinions>;
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
export type Mutation_RootDelete_Branistorming_OpinionsArgs = {
  where: Branistorming_Opinions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Branistorming_Opinions_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootInsert_Branistorming_OpinionsArgs = {
  objects: Array<Branistorming_Opinions_Insert_Input>;
  on_conflict?: Maybe<Branistorming_Opinions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Branistorming_Opinions_OneArgs = {
  object: Branistorming_Opinions_Insert_Input;
  on_conflict?: Maybe<Branistorming_Opinions_On_Conflict>;
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


/** mutation root */
export type Mutation_RootUpdate_Branistorming_OpinionsArgs = {
  _inc?: Maybe<Branistorming_Opinions_Inc_Input>;
  _set?: Maybe<Branistorming_Opinions_Set_Input>;
  where: Branistorming_Opinions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Branistorming_Opinions_By_PkArgs = {
  _inc?: Maybe<Branistorming_Opinions_Inc_Input>;
  _set?: Maybe<Branistorming_Opinions_Set_Input>;
  pk_columns: Branistorming_Opinions_Pk_Columns_Input;
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
  /** fetch data from the table: "branistorming_opinions" */
  branistorming_opinions: Array<Branistorming_Opinions>;
  /** An aggregate relationship */
  branistorming_opinions_aggregate: Branistorming_Opinions_Aggregate;
  /** fetch data from the table: "branistorming_opinions" using primary key columns */
  branistorming_opinions_by_pk?: Maybe<Branistorming_Opinions>;
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


export type Query_RootBranistorming_OpinionsArgs = {
  distinct_on?: Maybe<Array<Branistorming_Opinions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branistorming_Opinions_Order_By>>;
  where?: Maybe<Branistorming_Opinions_Bool_Exp>;
};


export type Query_RootBranistorming_Opinions_AggregateArgs = {
  distinct_on?: Maybe<Array<Branistorming_Opinions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branistorming_Opinions_Order_By>>;
  where?: Maybe<Branistorming_Opinions_Bool_Exp>;
};


export type Query_RootBranistorming_Opinions_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "borad" */
  borad: Array<Borad>;
  /** fetch aggregated fields from the table: "borad" */
  borad_aggregate: Borad_Aggregate;
  /** fetch data from the table: "borad" using primary key columns */
  borad_by_pk?: Maybe<Borad>;
  /** fetch data from the table: "branistorming_opinions" */
  branistorming_opinions: Array<Branistorming_Opinions>;
  /** An aggregate relationship */
  branistorming_opinions_aggregate: Branistorming_Opinions_Aggregate;
  /** fetch data from the table: "branistorming_opinions" using primary key columns */
  branistorming_opinions_by_pk?: Maybe<Branistorming_Opinions>;
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


export type Subscription_RootBranistorming_OpinionsArgs = {
  distinct_on?: Maybe<Array<Branistorming_Opinions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branistorming_Opinions_Order_By>>;
  where?: Maybe<Branistorming_Opinions_Bool_Exp>;
};


export type Subscription_RootBranistorming_Opinions_AggregateArgs = {
  distinct_on?: Maybe<Array<Branistorming_Opinions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Branistorming_Opinions_Order_By>>;
  where?: Maybe<Branistorming_Opinions_Bool_Exp>;
};


export type Subscription_RootBranistorming_Opinions_By_PkArgs = {
  id: Scalars['uuid'];
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


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type Branistorming_DeleteAllOpinionMutationVariables = Exact<{
  borad_id: Scalars['String'];
}>;


export type Branistorming_DeleteAllOpinionMutation = (
  { __typename?: 'mutation_root' }
  & { delete_branistorming_opinions?: Maybe<(
    { __typename?: 'branistorming_opinions_mutation_response' }
    & { returning: Array<(
      { __typename?: 'branistorming_opinions' }
      & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
    )> }
  )> }
);

export type Branistorming_DeleteDisableOpinionMutationVariables = Exact<{
  borad_id: Scalars['String'];
}>;


export type Branistorming_DeleteDisableOpinionMutation = (
  { __typename?: 'mutation_root' }
  & { delete_branistorming_opinions?: Maybe<(
    { __typename?: 'branistorming_opinions_mutation_response' }
    & { returning: Array<(
      { __typename?: 'branistorming_opinions' }
      & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
    )> }
  )> }
);

export type Branistorming_PostOpinionMutationVariables = Exact<{
  borad_id: Scalars['String'];
  opinion: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type Branistorming_PostOpinionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_branistorming_opinions_one?: Maybe<(
    { __typename?: 'branistorming_opinions' }
    & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
  )> }
);

export type OpinionsFragment = (
  { __typename?: 'branistorming_opinions' }
  & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
);

export type Branistorming_UpdateOpinionMutationVariables = Exact<{
  id: Scalars['uuid'];
  opinion: Scalars['String'];
}>;


export type Branistorming_UpdateOpinionMutation = (
  { __typename?: 'mutation_root' }
  & { update_branistorming_opinions_by_pk?: Maybe<(
    { __typename?: 'branistorming_opinions' }
    & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
  )> }
);

export type Branistorming_DisableOpinionMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Branistorming_DisableOpinionMutation = (
  { __typename?: 'mutation_root' }
  & { update_branistorming_opinions_by_pk?: Maybe<(
    { __typename?: 'branistorming_opinions' }
    & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
  )> }
);

export type Branistorming_EnableOpinionMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Branistorming_EnableOpinionMutation = (
  { __typename?: 'mutation_root' }
  & { update_branistorming_opinions_by_pk?: Maybe<(
    { __typename?: 'branistorming_opinions' }
    & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
  )> }
);

export type Branistorming_UpdateOpinionPositionMutationVariables = Exact<{
  id: Scalars['uuid'];
  position_x: Scalars['Float'];
  position_y: Scalars['Float'];
}>;


export type Branistorming_UpdateOpinionPositionMutation = (
  { __typename?: 'mutation_root' }
  & { update_branistorming_opinions_by_pk?: Maybe<(
    { __typename?: 'branistorming_opinions' }
    & Pick<Branistorming_Opinions, 'position_x' | 'position_y'>
  )> }
);

export type Branistorming_GetBoradSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type Branistorming_GetBoradSubscription = (
  { __typename?: 'subscription_root' }
  & { borad_by_pk?: Maybe<(
    { __typename?: 'borad' }
    & Pick<Borad, 'id' | 'connect_num' | 'delete_date' | 'delete_flag' | 'brainstorming_theme'>
    & { branistorming_opinions: Array<(
      { __typename?: 'branistorming_opinions' }
      & Pick<Branistorming_Opinions, 'id' | 'opinion' | 'disable_flag' | 'position_x' | 'position_y'>
    )> }
  )> }
);

export type Brainstorming_PostThemeMutationVariables = Exact<{
  id: Scalars['String'];
  brainstorming_theme: Scalars['String'];
}>;


export type Brainstorming_PostThemeMutation = (
  { __typename?: 'mutation_root' }
  & { update_borad_by_pk?: Maybe<(
    { __typename?: 'borad' }
    & Pick<Borad, 'brainstorming_theme'>
  )> }
);

export type CreateBoradMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type CreateBoradMutation = (
  { __typename?: 'mutation_root' }
  & { insert_borad_one?: Maybe<(
    { __typename?: 'borad' }
    & Pick<Borad, 'id'>
  )> }
);

export const OpinionsFragmentDoc = gql`
    fragment Opinions on branistorming_opinions {
  id
  opinion
  disable_flag
  position_x
  position_y
}
    `;
export const Branistorming_DeleteAllOpinionDocument = gql`
    mutation Branistorming_DeleteAllOpinion($borad_id: String!) {
  delete_branistorming_opinions(where: {borad_id: {_eq: $borad_id}}) {
    returning {
      ...Opinions
    }
  }
}
    ${OpinionsFragmentDoc}`;
export type Branistorming_DeleteAllOpinionMutationFn = Apollo.MutationFunction<Branistorming_DeleteAllOpinionMutation, Branistorming_DeleteAllOpinionMutationVariables>;

/**
 * __useBranistorming_DeleteAllOpinionMutation__
 *
 * To run a mutation, you first call `useBranistorming_DeleteAllOpinionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_DeleteAllOpinionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branistormingDeleteAllOpinionMutation, { data, loading, error }] = useBranistorming_DeleteAllOpinionMutation({
 *   variables: {
 *      borad_id: // value for 'borad_id'
 *   },
 * });
 */
export function useBranistorming_DeleteAllOpinionMutation(baseOptions?: Apollo.MutationHookOptions<Branistorming_DeleteAllOpinionMutation, Branistorming_DeleteAllOpinionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Branistorming_DeleteAllOpinionMutation, Branistorming_DeleteAllOpinionMutationVariables>(Branistorming_DeleteAllOpinionDocument, options);
      }
export type Branistorming_DeleteAllOpinionMutationHookResult = ReturnType<typeof useBranistorming_DeleteAllOpinionMutation>;
export type Branistorming_DeleteAllOpinionMutationResult = Apollo.MutationResult<Branistorming_DeleteAllOpinionMutation>;
export type Branistorming_DeleteAllOpinionMutationOptions = Apollo.BaseMutationOptions<Branistorming_DeleteAllOpinionMutation, Branistorming_DeleteAllOpinionMutationVariables>;
export const Branistorming_DeleteDisableOpinionDocument = gql`
    mutation Branistorming_DeleteDisableOpinion($borad_id: String!) {
  delete_branistorming_opinions(
    where: {borad_id: {_eq: $borad_id}, disable_flag: {_eq: 1}}
  ) {
    returning {
      ...Opinions
    }
  }
}
    ${OpinionsFragmentDoc}`;
export type Branistorming_DeleteDisableOpinionMutationFn = Apollo.MutationFunction<Branistorming_DeleteDisableOpinionMutation, Branistorming_DeleteDisableOpinionMutationVariables>;

/**
 * __useBranistorming_DeleteDisableOpinionMutation__
 *
 * To run a mutation, you first call `useBranistorming_DeleteDisableOpinionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_DeleteDisableOpinionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branistormingDeleteDisableOpinionMutation, { data, loading, error }] = useBranistorming_DeleteDisableOpinionMutation({
 *   variables: {
 *      borad_id: // value for 'borad_id'
 *   },
 * });
 */
export function useBranistorming_DeleteDisableOpinionMutation(baseOptions?: Apollo.MutationHookOptions<Branistorming_DeleteDisableOpinionMutation, Branistorming_DeleteDisableOpinionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Branistorming_DeleteDisableOpinionMutation, Branistorming_DeleteDisableOpinionMutationVariables>(Branistorming_DeleteDisableOpinionDocument, options);
      }
export type Branistorming_DeleteDisableOpinionMutationHookResult = ReturnType<typeof useBranistorming_DeleteDisableOpinionMutation>;
export type Branistorming_DeleteDisableOpinionMutationResult = Apollo.MutationResult<Branistorming_DeleteDisableOpinionMutation>;
export type Branistorming_DeleteDisableOpinionMutationOptions = Apollo.BaseMutationOptions<Branistorming_DeleteDisableOpinionMutation, Branistorming_DeleteDisableOpinionMutationVariables>;
export const Branistorming_PostOpinionDocument = gql`
    mutation Branistorming_PostOpinion($borad_id: String!, $opinion: String!, $user_id: String!) {
  insert_branistorming_opinions_one(
    object: {borad_id: $borad_id, opinion: $opinion, user_id: $user_id}
  ) {
    ...Opinions
  }
}
    ${OpinionsFragmentDoc}`;
export type Branistorming_PostOpinionMutationFn = Apollo.MutationFunction<Branistorming_PostOpinionMutation, Branistorming_PostOpinionMutationVariables>;

/**
 * __useBranistorming_PostOpinionMutation__
 *
 * To run a mutation, you first call `useBranistorming_PostOpinionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_PostOpinionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branistormingPostOpinionMutation, { data, loading, error }] = useBranistorming_PostOpinionMutation({
 *   variables: {
 *      borad_id: // value for 'borad_id'
 *      opinion: // value for 'opinion'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useBranistorming_PostOpinionMutation(baseOptions?: Apollo.MutationHookOptions<Branistorming_PostOpinionMutation, Branistorming_PostOpinionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Branistorming_PostOpinionMutation, Branistorming_PostOpinionMutationVariables>(Branistorming_PostOpinionDocument, options);
      }
export type Branistorming_PostOpinionMutationHookResult = ReturnType<typeof useBranistorming_PostOpinionMutation>;
export type Branistorming_PostOpinionMutationResult = Apollo.MutationResult<Branistorming_PostOpinionMutation>;
export type Branistorming_PostOpinionMutationOptions = Apollo.BaseMutationOptions<Branistorming_PostOpinionMutation, Branistorming_PostOpinionMutationVariables>;
export const Branistorming_UpdateOpinionDocument = gql`
    mutation Branistorming_UpdateOpinion($id: uuid!, $opinion: String!) {
  update_branistorming_opinions_by_pk(
    pk_columns: {id: $id}
    _set: {opinion: $opinion}
  ) {
    ...Opinions
  }
}
    ${OpinionsFragmentDoc}`;
export type Branistorming_UpdateOpinionMutationFn = Apollo.MutationFunction<Branistorming_UpdateOpinionMutation, Branistorming_UpdateOpinionMutationVariables>;

/**
 * __useBranistorming_UpdateOpinionMutation__
 *
 * To run a mutation, you first call `useBranistorming_UpdateOpinionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_UpdateOpinionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branistormingUpdateOpinionMutation, { data, loading, error }] = useBranistorming_UpdateOpinionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      opinion: // value for 'opinion'
 *   },
 * });
 */
export function useBranistorming_UpdateOpinionMutation(baseOptions?: Apollo.MutationHookOptions<Branistorming_UpdateOpinionMutation, Branistorming_UpdateOpinionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Branistorming_UpdateOpinionMutation, Branistorming_UpdateOpinionMutationVariables>(Branistorming_UpdateOpinionDocument, options);
      }
export type Branistorming_UpdateOpinionMutationHookResult = ReturnType<typeof useBranistorming_UpdateOpinionMutation>;
export type Branistorming_UpdateOpinionMutationResult = Apollo.MutationResult<Branistorming_UpdateOpinionMutation>;
export type Branistorming_UpdateOpinionMutationOptions = Apollo.BaseMutationOptions<Branistorming_UpdateOpinionMutation, Branistorming_UpdateOpinionMutationVariables>;
export const Branistorming_DisableOpinionDocument = gql`
    mutation Branistorming_DisableOpinion($id: uuid!) {
  update_branistorming_opinions_by_pk(
    pk_columns: {id: $id}
    _set: {disable_flag: 1}
  ) {
    ...Opinions
  }
}
    ${OpinionsFragmentDoc}`;
export type Branistorming_DisableOpinionMutationFn = Apollo.MutationFunction<Branistorming_DisableOpinionMutation, Branistorming_DisableOpinionMutationVariables>;

/**
 * __useBranistorming_DisableOpinionMutation__
 *
 * To run a mutation, you first call `useBranistorming_DisableOpinionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_DisableOpinionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branistormingDisableOpinionMutation, { data, loading, error }] = useBranistorming_DisableOpinionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBranistorming_DisableOpinionMutation(baseOptions?: Apollo.MutationHookOptions<Branistorming_DisableOpinionMutation, Branistorming_DisableOpinionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Branistorming_DisableOpinionMutation, Branistorming_DisableOpinionMutationVariables>(Branistorming_DisableOpinionDocument, options);
      }
export type Branistorming_DisableOpinionMutationHookResult = ReturnType<typeof useBranistorming_DisableOpinionMutation>;
export type Branistorming_DisableOpinionMutationResult = Apollo.MutationResult<Branistorming_DisableOpinionMutation>;
export type Branistorming_DisableOpinionMutationOptions = Apollo.BaseMutationOptions<Branistorming_DisableOpinionMutation, Branistorming_DisableOpinionMutationVariables>;
export const Branistorming_EnableOpinionDocument = gql`
    mutation Branistorming_EnableOpinion($id: uuid!) {
  update_branistorming_opinions_by_pk(
    pk_columns: {id: $id}
    _set: {disable_flag: 0}
  ) {
    ...Opinions
  }
}
    ${OpinionsFragmentDoc}`;
export type Branistorming_EnableOpinionMutationFn = Apollo.MutationFunction<Branistorming_EnableOpinionMutation, Branistorming_EnableOpinionMutationVariables>;

/**
 * __useBranistorming_EnableOpinionMutation__
 *
 * To run a mutation, you first call `useBranistorming_EnableOpinionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_EnableOpinionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branistormingEnableOpinionMutation, { data, loading, error }] = useBranistorming_EnableOpinionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBranistorming_EnableOpinionMutation(baseOptions?: Apollo.MutationHookOptions<Branistorming_EnableOpinionMutation, Branistorming_EnableOpinionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Branistorming_EnableOpinionMutation, Branistorming_EnableOpinionMutationVariables>(Branistorming_EnableOpinionDocument, options);
      }
export type Branistorming_EnableOpinionMutationHookResult = ReturnType<typeof useBranistorming_EnableOpinionMutation>;
export type Branistorming_EnableOpinionMutationResult = Apollo.MutationResult<Branistorming_EnableOpinionMutation>;
export type Branistorming_EnableOpinionMutationOptions = Apollo.BaseMutationOptions<Branistorming_EnableOpinionMutation, Branistorming_EnableOpinionMutationVariables>;
export const Branistorming_UpdateOpinionPositionDocument = gql`
    mutation Branistorming_UpdateOpinionPosition($id: uuid!, $position_x: Float!, $position_y: Float!) {
  update_branistorming_opinions_by_pk(
    pk_columns: {id: $id}
    _set: {position_x: $position_x, position_y: $position_y}
  ) {
    position_x
    position_y
  }
}
    `;
export type Branistorming_UpdateOpinionPositionMutationFn = Apollo.MutationFunction<Branistorming_UpdateOpinionPositionMutation, Branistorming_UpdateOpinionPositionMutationVariables>;

/**
 * __useBranistorming_UpdateOpinionPositionMutation__
 *
 * To run a mutation, you first call `useBranistorming_UpdateOpinionPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_UpdateOpinionPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [branistormingUpdateOpinionPositionMutation, { data, loading, error }] = useBranistorming_UpdateOpinionPositionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      position_x: // value for 'position_x'
 *      position_y: // value for 'position_y'
 *   },
 * });
 */
export function useBranistorming_UpdateOpinionPositionMutation(baseOptions?: Apollo.MutationHookOptions<Branistorming_UpdateOpinionPositionMutation, Branistorming_UpdateOpinionPositionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Branistorming_UpdateOpinionPositionMutation, Branistorming_UpdateOpinionPositionMutationVariables>(Branistorming_UpdateOpinionPositionDocument, options);
      }
export type Branistorming_UpdateOpinionPositionMutationHookResult = ReturnType<typeof useBranistorming_UpdateOpinionPositionMutation>;
export type Branistorming_UpdateOpinionPositionMutationResult = Apollo.MutationResult<Branistorming_UpdateOpinionPositionMutation>;
export type Branistorming_UpdateOpinionPositionMutationOptions = Apollo.BaseMutationOptions<Branistorming_UpdateOpinionPositionMutation, Branistorming_UpdateOpinionPositionMutationVariables>;
export const Branistorming_GetBoradDocument = gql`
    subscription Branistorming_GetBorad($id: String!) {
  borad_by_pk(id: $id) {
    id
    connect_num
    delete_date
    delete_flag
    brainstorming_theme
    branistorming_opinions(order_by: {created_at: asc}) {
      ...Opinions
    }
  }
}
    ${OpinionsFragmentDoc}`;

/**
 * __useBranistorming_GetBoradSubscription__
 *
 * To run a query within a React component, call `useBranistorming_GetBoradSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBranistorming_GetBoradSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBranistorming_GetBoradSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBranistorming_GetBoradSubscription(baseOptions: Apollo.SubscriptionHookOptions<Branistorming_GetBoradSubscription, Branistorming_GetBoradSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<Branistorming_GetBoradSubscription, Branistorming_GetBoradSubscriptionVariables>(Branistorming_GetBoradDocument, options);
      }
export type Branistorming_GetBoradSubscriptionHookResult = ReturnType<typeof useBranistorming_GetBoradSubscription>;
export type Branistorming_GetBoradSubscriptionResult = Apollo.SubscriptionResult<Branistorming_GetBoradSubscription>;
export const Brainstorming_PostThemeDocument = gql`
    mutation Brainstorming_PostTheme($id: String!, $brainstorming_theme: String!) {
  update_borad_by_pk(
    pk_columns: {id: $id}
    _set: {brainstorming_theme: $brainstorming_theme}
  ) {
    brainstorming_theme
  }
}
    `;
export type Brainstorming_PostThemeMutationFn = Apollo.MutationFunction<Brainstorming_PostThemeMutation, Brainstorming_PostThemeMutationVariables>;

/**
 * __useBrainstorming_PostThemeMutation__
 *
 * To run a mutation, you first call `useBrainstorming_PostThemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBrainstorming_PostThemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [brainstormingPostThemeMutation, { data, loading, error }] = useBrainstorming_PostThemeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      brainstorming_theme: // value for 'brainstorming_theme'
 *   },
 * });
 */
export function useBrainstorming_PostThemeMutation(baseOptions?: Apollo.MutationHookOptions<Brainstorming_PostThemeMutation, Brainstorming_PostThemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Brainstorming_PostThemeMutation, Brainstorming_PostThemeMutationVariables>(Brainstorming_PostThemeDocument, options);
      }
export type Brainstorming_PostThemeMutationHookResult = ReturnType<typeof useBrainstorming_PostThemeMutation>;
export type Brainstorming_PostThemeMutationResult = Apollo.MutationResult<Brainstorming_PostThemeMutation>;
export type Brainstorming_PostThemeMutationOptions = Apollo.BaseMutationOptions<Brainstorming_PostThemeMutation, Brainstorming_PostThemeMutationVariables>;
export const CreateBoradDocument = gql`
    mutation CreateBorad($id: String!) {
  insert_borad_one(object: {id: $id}) {
    id
  }
}
    `;
export type CreateBoradMutationFn = Apollo.MutationFunction<CreateBoradMutation, CreateBoradMutationVariables>;

/**
 * __useCreateBoradMutation__
 *
 * To run a mutation, you first call `useCreateBoradMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoradMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoradMutation, { data, loading, error }] = useCreateBoradMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateBoradMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoradMutation, CreateBoradMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBoradMutation, CreateBoradMutationVariables>(CreateBoradDocument, options);
      }
export type CreateBoradMutationHookResult = ReturnType<typeof useCreateBoradMutation>;
export type CreateBoradMutationResult = Apollo.MutationResult<CreateBoradMutation>;
export type CreateBoradMutationOptions = Apollo.BaseMutationOptions<CreateBoradMutation, CreateBoradMutationVariables>;