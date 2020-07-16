import { atom } from 'recoil';

export const signInModalState = atom({
  key: 'signInModalState',
  default: {
    show: false,
    isSignIn: true
  }
});

export const spinnerState = atom({
  key: 'spinnerState',
  default: false
});
