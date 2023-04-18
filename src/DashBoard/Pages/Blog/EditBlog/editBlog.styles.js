import styled from 'styled-components'

export const FormBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .editBtns {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .toggle {
    display: flex;
gap: 10px;
align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    label {
      display: flex;
      gap: 15px;
      flex-direction: column;
    }
    img {
      max-width: 500px;
    }
    .editImg {
      display: flex;
      flex-direction: column;
      gap: 22px;
      width: auto;
      button {
        padding: 8px 15px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        border: none;
        background-color: rgba(223, 223, 223, 0.5);
        font-family: var(--body-font);
        font-size: 0.9rem;
        max-width: 200px;
        cursor: pointer;
        color: var(--main-white);
        background-color: rgb(251, 99, 115);
        transition: scale 0.3s ease-in-out;
        &:hover {
          scale: 1.03;
        }
      }
    }
    .editor {
      width: 100%;
      min-height: 400px;
      padding: 0;
      background-color: #fff;
      .editor-input {
        width: 100%;
        height: 360px;
        background-color: #fff;
      }
    }
    .checkboxBlock {
      display: flex;
      width: 100%;
      gap: 30px;
      label {
        flex-direction: row;
        input {
          width: auto;
          box-shadow: none;
        }
      }
    }
  }
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
