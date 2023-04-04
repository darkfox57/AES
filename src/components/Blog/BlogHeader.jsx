import React from 'react'
import { useLocation } from 'react-router'
import { ContainerInfoText, FlexPrincipal } from './BlogHeader.Styled'

const BlogHeader = () => {
  const location = useLocation()
  const { pathname } = location
  return (
    <FlexPrincipal>
      <ContainerInfoText>
        {pathname.includes('/blog') ? (
          <h3>Puedes leer tambien</h3>
        ) : (
          <>
            <span>Contenido de interes</span>
            <h1>Nuestro blog</h1>
          </>
        )}
      </ContainerInfoText>
    </FlexPrincipal>
  )
}

export default BlogHeader
