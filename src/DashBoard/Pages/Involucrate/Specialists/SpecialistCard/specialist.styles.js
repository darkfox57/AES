import styled from 'styled-components'

export const CardContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: hidden;
  align-items: center;
  gap: 32px;
  padding-right: 32px;
  img {
    width: 100px;
    height: 75px;
    object-fit: cover;
  }
  a {
    align-self: center!important;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`

export const ToggleButton = styled.button`
  position: relative;
  height: 1rem;
  width: 2rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0.5rem;
  background-color: #ccc;
  outline: none;
  cursor: pointer;

  .handle {
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: #fff;
    transition: left 0.25s;
  }

  &.active {
    background-color: #29b5a8;
    .handle {
      left: 1.125rem;
      transition: left 0.25s;
    }
  }

  &.btn-xs {
    height: 0.5rem;
    width: 1rem;
    .handle {
      top: 0.0625rem;
      left: 0.0625rem;
      width: 0.375rem;
      height: 0.375rem;
      transition: left 0.25s;
    }
  }
`