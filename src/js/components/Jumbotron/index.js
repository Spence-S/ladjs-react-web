import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { useSetRecoilState } from 'recoil';
import { signInModalState } from '../../recoil/atoms';
import { useTranslation } from 'react-i18next';

export default function LadJumbotron() {
  const { t } = useTranslation();
  const setState = useSetRecoilState(signInModalState);
  return (
    <Jumbotron className='mb-0 text-center'>
      <h1>{t('The Best Node.js Framework')}</h1>
      <p className='lead'>
        {t('Lad scaffolds a Koa webapp and API framework for Node.js')}
      </p>
      <Button
        variant='success'
        size='lg'
        onClick={() => setState({ show: true, isSignIn: true })}
      >
        {t('Try the demo')}
      </Button>
    </Jumbotron>
  );
}
