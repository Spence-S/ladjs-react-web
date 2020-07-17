import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { localeState } from './recoil/atoms';

import Home from './Home';
import About from './About';
import FourOhFour from './404';

export default function LocaleRouter() {
  const currentLocale = useRecoilValue(localeState);
  const location = useLocation();
  const history = useHistory();

  console.log({ currentLocale, location, history });

  if (!location.pathname.startsWith(`/${currentLocale}`))
    history.replace(`/${currentLocale}${location.pathname}`);

  return (
    <>
      <Switch>
        <Route exact path='/:locale/'>
          <Home />
        </Route>
        <Route exact path='/:locale/about'>
          <About />
        </Route>
        <Route path='/:local/*'>
          <FourOhFour />
        </Route>
      </Switch>
    </>
  );
}
