import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const notification = async () => {
  await MySwal.fire({
    icon: 'success',
    title: 'Genial',
    text: 'Muchas gracias por suscribirte a nuestro newsletter!',
  })
}

export const errorNotify = async () => {
  await MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Lo sentimos, parece que hubo un problema al querer inscribirte a nuestro newsletter',
  })
}
