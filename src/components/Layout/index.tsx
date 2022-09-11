import React, { ReactNode } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import Footer from '../Footer'
import Header from '../Header'
import SidebarCart from '../SidebarCart'
import { Container } from './styles'

type Props = {
  children: ReactNode;
}

const Layout = ({
  children
}: Props) => {
  return (
    <Container>
      <Header />
      <main>
        {children}
      </main>
      <SidebarCart />
      <Footer />
      
      <ToastContainer />
    </Container>
  )
}

export default Layout
