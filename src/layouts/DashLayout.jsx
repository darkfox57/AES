import React, { useEffect, useState } from 'react'
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
  const [access, setAccess] = useState()

  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    const token = localStorage.getItem('access_token')
    dispatch(getUser(user_id))
    Object.keys(user) ? setAccess(true) : setAccess(false)

    // if (
    //   !access ||
    //   !user_id ||
    //   (!token && location.pathname.includes('dashboard'))
    // ) {
    //   navigate('/login')
    // }
    // if (access && user_id && token && location.pathname.includes('login')) {
    //   navigate('/dashboard')
    // }
  }, [])

  // useEffect(() => {
  //   const token = localStorage.getItem('access_token')
  //   dispatch(userValidation(token))
  //   validation === 'deny'
  //     ? localStorage.removeItem('access_token')
  //     : navigate('/login')
  // }, [])

  return (
    (
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
  )
}

