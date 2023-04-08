import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Portada from '../../components/Portada/Portada'
import ShowForm from './ShowForm'
import Footer from '../../components/Footer/Footer'

import {
  Involucrate_Container,
  Card_Container,
  Card_Contact,
  Button_Styled,
} from './Involucrate.Styles'

import { getAllCountries } from '../../redux/actions/form_actions'

const img =
  'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'

//Cada form tiene una card con titulo, parrafo y boton con el fin de presentar cada inscripcion
//el estado local representa el formulario que va a renderizarse como ventana modal
//el 'Button' esta comentado porque con ese microcomponente no funciona el 'onClick'
//'formToShow' es el componente que renderiza el formulario en base al estado local

export default function Involucrate() {
  const [form, setForm] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCountries())
  }, [])

  const handleForm = (evento) => {
    setForm(evento.target.name)
  }

  return (
    <>
      <Portada titulo={'Toma accion con AES'} img={img} />

      <Involucrate_Container>
        <Card_Container>
          <Card_Contact bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WX9N5_rLeymZJWTU2TwNWRLyMTOPjTBsbw&usqp=CAU">
            <h3>Forma parte de nuestros especialistas</h3>
            <p>
              La generosidad es una de las fuerzas humanas más poderosas. En Por
              un Perú sano, aprovechamos los esfuerzos de nuestros especialistas
              para tener un efecto positivo sobre las vidas de los adolescentes.
              Nos encantaría que se una a nuestro equipo para ayudar a formar
              una sociedad sana tanto física como mentalmente.
            </p>

            <Button_Styled name="Form_Especialistas" onClick={handleForm}>
              Rellenar Formulario
            </Button_Styled>
          </Card_Contact>

          <Card_Contact bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwM04418DHJtKAtm7_QGgdfJo_B_ZTmxzoUg&usqp=CAU">
            <h3>Se un voluntario de AES</h3>
            <p>
              Hay muchas formas de contribuir a nuestras labores. Es totalmente
              cierto que hasta el menor esfuerzo cuenta, en especial si queremos
              contribuir a formar una sociedad sana. Conozca más sobre lo que
              hacemos y cómo puede brindar apoyo.
            </p>

            <Button_Styled name="Form_Instituciones" onClick={handleForm}>
              Rellenar Formulario
            </Button_Styled>
          </Card_Contact>

          <Card_Contact bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoWn8xV5mi4gEGF7d2U19ZQkxywsqxDGY_A&usqp=CAU">
            <h3>Instituciones sanas</h3>
            <p>
              Nuestros talleres están enfocados en las necesidades de cada
              institución educativa. Si desea que sus alumnos participen agende
              una reunión con nosotros.
            </p>

            <Button_Styled name="Form_Alianzas" onClick={handleForm}>
              Rellenar Formulario
            </Button_Styled>
          </Card_Contact>
        </Card_Container>

        {/** Enviamos a todos los forms la funcion paa actualizar el estado 'form' */}
        {form && <ShowForm formToShow={form} updateForm={handleForm} />}
      </Involucrate_Container>

      <Footer />
    </>
  )
}
