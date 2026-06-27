import React from 'react';

import Nav from './Nav';

const Page = ({ children, columnClassName }) => (
  <main className="container py-5">
    <div className="row">
      <div className={columnClassName || 'col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2'}>
        <Nav />

        <div style={{ marginTop: 60 }}>{children}</div>
      </div>
    </div>
  </main>
);

export default Page;
