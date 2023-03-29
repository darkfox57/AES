import styled from 'styled-components'

export const CardContainer = styled.div`
padding: 20px;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://media.30seconds.com/tip/lg/Want-to-Run-a-Marathon-Why-You-Need-to-Talk-to-Your-Doctor-7273-1a98fb04bb-1502290274.jpg')
      center center/cover no-repeat;
  width: 340px;
  height: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TopFecha = styled.div`

`
export const BottomLugar = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
 span{
    max-width: 250px;
 }
 button{
    width: 100px;
    height: 25px;
 }
`