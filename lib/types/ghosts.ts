export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BasicDashboardLayout = ILayout & {
  __typename?: 'BasicDashboardLayout';
  header?: Maybe<SingleSectionPlacement>;
  main?: Maybe<MultipleSectionsPlacement>;
  sidebar?: Maybe<SingleSectionPlacement>;
};

export type ExtendScreens = {
  __typename?: 'ExtendScreens';
  target_screen: Scalars['ID'];
};

export type GpResponse = {
  page: Scalars['ID'];
  pattern: Scalars['String'];
  screens?: Maybe<Array<Maybe<ScreenContainer>>>;
  sections?: Maybe<SectionsMixin>;
};

export type HeroSection = {
  __typename?: 'HeroSection';
  images: Array<Maybe<Scalars['String']>>;
};

export type IAction = {
  type: Scalars['String'];
};

export type ILayout = {
  extend?: Maybe<Scalars['String']>;
};

export type MultipleSectionsPlacement = {
  __typename?: 'MultipleSectionsPlacement';
  sectionDetails: Array<Maybe<SectionDetail>>;
};

export type RoutePushAction = IAction & {
  __typename?: 'RoutePushAction';
  to: Scalars['String'];
};

export type Screen = BasicDashboardLayout;

export type ScreenContainer = {
  __typename?: 'ScreenContainer';
  id: Scalars['String'];
  screen?: Maybe<Screen>;
  screenProperties?: Maybe<ScreenProperties>;
};

export enum ScreenProperties {}

export type Section = HeroSection | TitleSection;

export enum SectionComponentType {
  Hero = 'HERO',
  PlusTitle = 'PLUS_TITLE',
  Title = 'TITLE'
}

export type SectionContainer = {
  __typename?: 'SectionContainer';
  id: Scalars['String'];
  section?: Maybe<Section>;
  sectionComponentType?: Maybe<SectionComponentType>;
};

export type SectionDetail = {
  __typename?: 'SectionDetail';
  sectionId: Scalars['String'];
};

export type SectionsMixin = {
  __typename?: 'SectionsMixin';
  default?: Maybe<Array<SectionContainer>>;
  override?: Maybe<Array<SectionContainer>>;
};

export type SingleSectionPlacement = {
  __typename?: 'SingleSectionPlacement';
  sectionDetail: SectionDetail;
};

export type TitleSection = {
  __typename?: 'TitleSection';
  onSubtitleClickAction?: Maybe<IAction>;
  subtitle?: Maybe<Scalars['String']>;
  subtitleStyle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  titleStyle: Scalars['String'];
};

export type ToggleAction = IAction & {
  __typename?: 'ToggleAction';
  default: Scalars['Boolean'];
  name: Scalars['String'];
};
