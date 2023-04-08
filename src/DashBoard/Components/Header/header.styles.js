import styled from 'styled-components'

export const HeaderNotifications = styled.div`
  display: flex;
  gap: 30px;
  i {
    font-size: 1.4rem;
  }
  .logOut {
    font-size: 1.4rem;
  }
`
export const ProfileMiniature = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 15px;
  padding: 0 30px;
  img {
    border-radius: 13px;
    width: 50px;
  }
`

export const LogOut = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`
