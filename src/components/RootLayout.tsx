import React, { ReactElement } from 'react';
import Footer from './Footer';
import BottomHeader from './header/BottomHeader';
import Header from './header/Header';

type Props = {
  children: ReactElement;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
