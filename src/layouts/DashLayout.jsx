import React from 'react'
import Header from '../DashBoard/Components/Header/Header.jsx'
import Sidebar from '../DashBoard/Components/Sidebar/Sidebar.jsx'
import {
  DashBoardLayoutContainer,
  HeaderContainer,
  MainContainer,
  SidebarContainer,
} from './dashLayout.styles.js'

export default function DashLayout({ children }) {
  return (
    <>
      <DashBoardLayoutContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <MainContainer>{children}</MainContainer>
      </DashBoardLayoutContainer>
    </>
  )
}
