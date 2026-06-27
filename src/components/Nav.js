'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
];

function normalizePath(pathname) {
  if (pathname === '/') {
    return pathname;
  }
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

const Nav = (props) => {
  const pathname = normalizePath(usePathname() || '/');

  return (
    <nav className={classNames('display-font hide-for-printing', props.className)}>
      <div className="Nav">
        <div className="flex-1">
          <Link href="/" className="NavLink NavBrand display-font text-2 font-weight-500">
            Kevin Qi
          </Link>
        </div>
        <div className="d-flex display-font">
          {links.map(({ href, label }) => (
            <Link
              href={href}
              className={classNames('NavLink display-font', {
                'NavLink--active': normalizePath(href) === pathname,
              })}
              key={href}
            >
              {label}
            </Link>
          ))}
          <a href="https://www.linkedin.com/in/kevin-qi-25b76710/" className="NavLink display-font">
            LinkedIn
          </a>
          <a className="NavLink display-font" href="https://github.com/kevinsqi">
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
