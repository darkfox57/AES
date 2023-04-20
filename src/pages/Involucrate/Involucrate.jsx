import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import Portada from '../../components/Portada/Portada'
import ShowForm from './ShowForm'

import {
  Button_Styled,
  Card_Contact,
  Card_Container,
  Involucrate_Container,
} from './Involucrate.Styles'

import Galeria from '../../components/Galeria/Galeria'
import { getAllCountries, getAreas } from '../../redux/actions/form_actions'

const img =
  'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'

//Cada form tiene una card con titulo, parrafo y boton con el fin de presentar cada inscripcion
//el estado local representa el formulario que va a renderizarse como ventana modal
//el 'Button' esta comentado porque con ese microcomponente no funciona el 'onClick'
//'formToShow' es el componente que renderiza el formulario en base al estado local

export default function Involucrate() {
  const [form, setForm] = useState('')
  const dispatch = useDispatch()
  const areas = useSelector((state) => state.form.areas)

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAreas())
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
            <h3>Convocatoria de especialistas</h3>
            <p>
              Dona tu tiempo y experiencia validando nuestros talleres o
              dirigiendolos, si tienes experiencia con niños o adolescentes en
              temas de salud física, mental, social o medioambiental, déjanos
              tus datos para contactarte.
            </p>

            <Button_Styled name="Form_Especialistas" onClick={handleForm}>
              Rellenar Formulario
            </Button_Styled>
          </Card_Contact>

          <Card_Contact bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwM04418DHJtKAtm7_QGgdfJo_B_ZTmxzoUg&usqp=CAU">
            <h3>Convocatoria de instituciones saludables</h3>
            <p>
              Si deseas que tus alumnos accedan a nuestros talleres gratuitos
              sobre salud física, mental, social o medioambiental, déjanos tus
              datos para contactarte.
            </p>
            <Button_Styled name="Form_Instituciones" onClick={handleForm}>
              Rellenar Formulario
            </Button_Styled>
          </Card_Contact>

          <Card_Contact bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoWn8xV5mi4gEGF7d2U19ZQkxywsqxDGY_A&usqp=CAU">
            <h3>Convocatoria de organizaciones</h3>
            <p>
              Si estás interesado en capacitar a tus voluntarios en temas de
              salud física, mental, social o medioambiental, déjanos tus datos
              para contactarte.
            </p>
            <Button_Styled name="Form_Alianzas" onClick={handleForm}>
              Rellenar Formulario
            </Button_Styled>
          </Card_Contact>
        </Card_Container>

        {/** Enviamos a todos los forms la funcion paa actualizar el estado 'form' */}
        {form && (
          <ShowForm formToShow={form} areas={areas} updateForm={handleForm} />
        )}
      </Involucrate_Container>
      <Galeria />
      <Footer />
    </>
  )
}
