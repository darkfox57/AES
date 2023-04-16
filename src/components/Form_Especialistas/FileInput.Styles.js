import styled from 'styled-components'

export const FileUploader = styled.input.attrs({
  type: 'file',
  accept: '.pdf',
  id: 'file',
})`
  height: 0;
  width: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

export const Label = styled.label`
  display: inline-block;
  background-color: #fff;
  color: #555;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f5f5f5;
    border-color: #aaa;
  }
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: -10px;
  span {
    font-style: oblique;
    font-size: 0.8rem;
  }
`

export const FileName = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const UploadIcon = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
  background-image: url('https://img.icons8.com/material-outlined/16/000000/upload.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
