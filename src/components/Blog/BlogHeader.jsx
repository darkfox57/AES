import React from 'react'
import { FlexPrincipal,ContainerInfoText,FlexButtom } from './BlogHeader.Styled'
import ArrowButton from '../../utils/ArrowButton/ArrowButton'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const BlogHeader = ({ currentPage, totalPages, NextPage, PreviousPage }) => {
  return (
    <FlexPrincipal>
    <ContainerInfoText>
    <span>Contenido de interes</span>
    <h1>Nuestro blog</h1>
    </ContainerInfoText>
    <FlexButtom>
    {currentPage > 0 && (
      <ArrowButton handleImage={PreviousPage} arrow={<FaArrowLeft />} />
    )}
    {currentPage < totalPages - 1 && (
      <ArrowButton handleImage={NextPage} arrow={<FaArrowRight />} />
    )}
    </FlexButtom>
    </FlexPrincipal>
  )
}

export default BlogHeader
