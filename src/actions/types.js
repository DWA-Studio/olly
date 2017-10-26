/**
 * @flow
 */
import type { NormalizedState } from '../types/NormalizedState';

export type Dispatch = (action: Action | ThunkAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

/*
**************
* Settings
**************
*/

export type SetPasswordLengthAction = {
  type: 'SET_PASSWORD_LENGTH',
  length: number,
};

export type SetAutoGenerationAction = {
  type: 'SET_AUTO_GENERATION',
  autoGeneration: boolean,
};

/*
**************
* Initialization
**************
*/

export type InitializationSuccessAction = {
  type: 'INITIALIZATION_SUCCESS',
  salt: string,
  iv: string,
  verificationToken: string,
};

export type InitializationFailAction = {
  type: 'INITIALIZATION_FAIL',
  error: string,
};

/*
**************
* Passwords
**************
*/

export type UpdateCryptedPasswordsAction = {
  type: 'UPDATE_CRYPTED_PASSWORDS',
  cryptedPassword: string,
};

export type UnlockAppAction = {
  type: 'UNLOCK_APP',
  passwords: NormalizedState,
  key: string,
};

export type Action =
  /** *** Settings **** */
  | SetPasswordLengthAction
  | SetAutoGenerationAction
  /** *** Initialization **** */
  | InitializationSuccessAction
  | InitializationFailAction
  /** *** Passwords **** */
  | UpdateCryptedPasswordsAction
  | UnlockAppAction;
