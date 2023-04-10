import Swal from 'sweetalert2';

export const alert = async (confirmation) => {
 let hasConfirmationMessage = false
 while (!hasConfirmationMessage) {
  if (confirmation) {
   hasConfirmationMessage = true
   Swal.fire('Editado correctamente')
  }
  await new Promise((resolve) => setTimeout(resolve, 100))
 }
 setTimeout(() => {
  if (!hasConfirmationMessage) {
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No se ha podido guardar cambios!',
   })
  }
 }, 3000)
};
