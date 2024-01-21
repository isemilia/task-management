import {ReactNode} from 'react';

export interface IWithChildren {
  children: ReactNode
}

export interface IDynamicObject<T = any> {
  [key: string]: T;
}