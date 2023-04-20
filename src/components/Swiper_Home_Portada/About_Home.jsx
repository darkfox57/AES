import React from 'react'
import { useLocation } from 'react-router'

import {
  ComponentContainer,
  ImgContainer,
  InfoContainer,
} from './About_Home.Styles'

import Button from '../../utils/Button/Button'

//Importo el micro-componente boton y le establecemos sus propiedades

export default function About_Home() {
  const location = useLocation()

  return (
    <ComponentContainer>
      <div className="center">
        <ImgContainer>
          <figure>
            <img
              src="https://americantechnet.us/wp-content/uploads/2020/09/equipo-de-trabajo-american-technet-980x1284.jpg"
              alt=""
            />
          </figure>

          <figure>
            <img
              src="https://img.tsn.ua/cached/914/tsn-e95b1de226ff0ebf7770d159fcb9c526/thumbs/608xX/f1/04/3053cde173de43c26fa91e3a72db04f1.jpg"
              alt=""
            ></img>
          </figure>
        </ImgContainer>
        {location.pathname !== '/acerca-de' && (
          <div className="flexInfoContent">
            <InfoContent />
          </div>
        )}
      </div>
    </ComponentContainer>
  )
}

export const InfoContent = () => (
  <InfoContainer>
    <h2>¿QUIENES SOMOS?</h2>
    <p>
      Somos una asociación sin fines de lucro, conformada por jóvenes
      multidisciplinarios que buscan promover la salud integral en los niños y
      adolescentes peruanos a través de talleres dinámicos.
    </p>
    <Button type="primary" link="/acerca-de" text="Leer más" size="md" />
  </InfoContainer>
)
