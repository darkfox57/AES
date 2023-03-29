import React from 'react'

import {
  ComponentContainer,
  ImgContainer,
  InfoContainer,
} from './About_Home.Styles'

import Button from '../../utils/Button'

export default function About_Home() {
  return (
    <ComponentContainer>
      <ImgContainer>
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHkL4JZ0DfWN7vvvESpb_T1O4mThoaxWNPLATaMRuTb9KCxKuRNz-9ocA9qCSdGo1m7A&usqp=CAU"
            alt=""
          />
        </figure>

        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFigMPQ9_E9pedvvBdUzFrUKTsE7tZpp11A&usqp=CAU"
            alt=""
          ></img>
        </figure>
      </ImgContainer>

      <InfoContainer>
        <h2>
          ¿QUIENES SOMOS <br />
          <span>Y QUE HACEMOS?</span>
        </h2>

        <p>
          Somos una organización sin fines de lucro creada por jóvenes
          multidisciplinarios, quienes en trabajo conjunto con profesionales de
          la salud buscan formar una sólida cultura sanitaria en los
          adolescentes del Perú a través de talleres dinámicos
        </p>
        <Button type="secondary" link="/" text="Contáctenos" size="md"></Button>
      </InfoContainer>
    </ComponentContainer>
  )
}
