import React, { useState } from 'react'
import { ComoPagarQr, ContainerImg, PagoFaqContainer } from './PagoFaq.Styled'
import YapeLogo from '../../assets/FaqPago/YapeLogo.png'
import PlinLogo from '../../assets/FaqPago/PlinLogo.png'
import Yape from '../../assets/Yape.png'
import Plins from '../../assets/Plin.png'
import Plin from './Plin'

const PagoFaq = () => {
  const [typePago,setTypePago] = useState("")
  return (
    <PagoFaqContainer>
      <h3>Seleccione la App sobre su duda</h3>
      <ContainerImg>
        <div className="card">
          <img src={YapeLogo} alt="Yape" onClick={()=> setTypePago("Yape")}/>
          <p>
            Yape es un aplicativo móvil con el que puedes enviar y recibir
            dinero de manera gratuita las 24 horas del día con tan solo el
            número de tus contactos o escaneando códigos QR de Yape, Visa o
            Izipay.
          </p>
        </div>
        <div className="card">
          <img src={PlinLogo} alt="Plin" onClick={()=> setTypePago("Plin")} />
          <p>
            Es una funcionalidad en tu app Scotiabank que te permite pagar y
            cobrar con tu código QR o tu número de celular al instante y sin
            costos adicionales. Gratis y de inmediato.
          </p>
        </div>
      </ContainerImg>
      {typePago && <ComoPagarQr>
        <h3 style={{ textAlign: 'center' }}>¿Como pagar con QR {typePago} ?</h3>
        <img src={typePago === "Yape" ? Yape : Plins} alt="Plin" />
        <Plin typePago={typePago} />
      </ComoPagarQr>}
    </PagoFaqContainer>
  )
}

export default PagoFaq
