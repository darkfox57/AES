import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'
import Header from '../DashBoard/Components/Header/Header.jsx'
import Sidebar from '../DashBoard/Components/Sidebar/Sidebar.jsx'
import Dashboard from '../DashBoard/Pages/Dashboard/Dashboard.jsx'
import { getUser, userValidation } from '../redux/actions/account_actions.js'
import {
  DashBoardLayoutContainer,
  HeaderContainer,
  MainContainer,
  SidebarContainer,
} from './dashLayout.styles.js'

export default function DashLayout() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.account.user)

  const navigate = useNavigate()

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    const token = localStorage.getItem('access_token')
    console.log(user_id)
    dispatch(getUser(user_id))
    if (user_id === null || token === null) navigate('/login')
  }, [])

  // useEffect(() => {
  //   const token = localStorage.getItem('access_token')
  //   dispatch(userValidation(token))
  //   validation === 'deny'
  //     ? localStorage.removeItem('access_token')
  //     : navigate('/login')
  // }, [])

  return (
    <>
      <DashBoardLayoutContainer>
        <SidebarContainer>
          <Sidebar user={user} />
        </SidebarContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </DashBoardLayoutContainer>
    </>
  )
}
