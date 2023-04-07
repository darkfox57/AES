import React, { useEffect } from 'react'
import Portada from '../Portada/Portada'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import FilterProximos from './FilterProximos'
import CardProximos from './CardProximos'
import { getAllEvents } from '../../redux/actions/event_actions'
import BtnPaginado from '../BtnPaginado/BtnPaginado'
import usePagination from '../../Hooks/usePagination'
const ProximoEvent = () => {
  const Events = useSelector((state) => state.event.events)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllEvents())
  }, [])
  const {currentPage,totalPages,paginatedData,NextPage,PreviousPage,pageNumbers,goToPage} = usePagination(Events,3)
  const imgprueba =
    'https://i.pinimg.com/originals/91/8f/49/918f490f7c1a15124850c009b605e2ee.jpg'
  return (
    <>
      <Portada titulo="Próximos eventos" img={imgprueba} />
      //**styled pasarlo xd */
      <div
        style={{
          gap: '50px',
          padding: '75px 10%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FilterProximos />
        {paginatedData.map((event) => (
          <CardProximos
            key={event._id}
            description={event.description}
            img={event.frontpage}
            date={event.date}
            lugar={event.location}
            title={event.title}
          />
        ))}
      </div>
      <BtnPaginado goToPage={goToPage} path={"proximos-eventos"} pageNumbers={pageNumbers}  />
      <Footer />
    </>
  )
}

export default ProximoEvent
