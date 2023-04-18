import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'
import Header from '../DashBoard/Components/Header/Header.jsx'
import Sidebar from '../DashBoard/Components/Sidebar/Sidebar.jsx'
import Dashboard from '../DashBoard/Pages/Dashboard/Dashboard.jsx'
import {
  getRoles,
  getUser,
  userValidation,
} from '../redux/actions/account_actions.js'

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
  const validation = useSelector((state) => state.account.validation)
  const user_id = localStorage.getItem('user_id')
  const token_validation = localStorage.getItem('access_token')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const validationLogin = async () => {
      await dispatch(userValidation(token_validation))
    }
    validationLogin()
  }, [dispatch, token_validation])

  useEffect(() => {
    if (validation.message === true) {
      dispatch(getUser(user_id))
      dispatch(getRoles())
      setLoading(false)
    }
    if (validation.message === false) {
      localStorage.removeItem('user_id')
      localStorage.removeItem('access_token')
      navigate('/login')
    }
  }, [validation, dispatch, user_id])

  if (loading) return <div>cargando...</div>

  return (
    <>
      <DashBoardLayoutContainer>
        <SidebarContainer>
          <Sidebar user={user} />
        </SidebarContainer>
        <HeaderContainer>
          <Header user={user} />
        </HeaderContainer>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </DashBoardLayoutContainer>
    </>
  )
}
