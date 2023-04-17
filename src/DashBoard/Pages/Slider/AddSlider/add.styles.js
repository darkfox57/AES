import styled from "styled-components"

export const FormBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
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