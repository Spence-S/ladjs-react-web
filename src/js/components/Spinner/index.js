import React from 'react';
import Spinner from 'react-spinkit';
import { useRecoilValue } from 'recoil';
import { spinnerState } from '../../recoil/atoms';

// spinner styles in @ladjs/assets
export default function SpinnerComponent() {
  const spin = useRecoilValue(spinnerState);
  return (
    <div
      id='spinner'
      className={spin ? 'fixed-top show d-block' : 'fixed-top fade'}
    >
      <Spinner name='circle' fadeIn='none' color='white' />
    </div>
  );
}
