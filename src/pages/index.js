import React, { Suspense, lazy } from 'react';

const Suspensed = (Element) => (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Element {...props} />
    </Suspense>
  );
};

const pageIndex = [
  {
    componentName: Suspensed(lazy(() => import('./Home'))),
    rootName: '/'

  },
  {
    componentName: Suspensed(lazy(() => import('./Favorite'))),
    rootName: '/favorite'
  },
];

export default pageIndex;
