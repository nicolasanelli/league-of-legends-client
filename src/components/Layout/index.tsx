import Head from 'next/head';
import React from 'react';
import { GlobalStyle, Container } from './global-styles';

interface LayoutProps {
  title?: string,
  description?: string
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const title = props.title || 'League of Legends';
  const description = props.description || 'League of Legends';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <GlobalStyle />
      <Container>
        {props.children}
      </Container>
    </div>
  );
};
