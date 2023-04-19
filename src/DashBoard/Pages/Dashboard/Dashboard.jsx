import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import blogging from '../../../assets/dashImg/blogging.png'
import comments from '../../../assets/dashImg/comments.png'
import conferences from '../../../assets/dashImg/conference.png'
import suscribers from '../../../assets/dashImg/envelope.png'
import gallery from '../../../assets/dashImg/gallery.png'
import eventos from '../../../assets/dashImg/placard.png'
import slider from '../../../assets/dashImg/slideshow.png'
import testimonies from '../../../assets/dashImg/testimonios.png'
import DashLayout from '../../../layouts/DashLayout'
import { DashBoardBody } from './dashboard.styles'

export default function Dashboard() {
  const blogs = useSelector((state) => state.blog.blogs)
  const events = useSelector((state) => state.event.events)

  return (
    <>
      <h3>DashBoard</h3>
      <DashBoardBody>
        <div>
          <Link to={'blog'}>
            <img src={blogging} alt="" />
            <h4>Blogs</h4>
          </Link>
        </div>
        <div>
          <Link to={'eventos'}>
            <img src={eventos} alt="" />
            <h4>Eventos</h4>
          </Link>
        </div>
        <div>
          <Link to={'involucrate'}>
            <img src={conferences} alt="" />
            <h4>Involucrate</h4>
          </Link>
        </div>
        <div>
          <Link to={'mensajes'}>
            <img src={comments} alt="" />
            <h4>Mensajes</h4>
          </Link>
        </div>
        <div>
          <Link to={'suscriptores'}>
            <img src={suscribers} alt="" />
            <h4>Suscripciones</h4>
          </Link>
        </div>
        <div>
          <Link to={'banner'}>
            <img src={slider} alt="" />
            <h4>Banner Principal</h4>
          </Link>
        </div>
        <div>
          <Link to={'galeria-involucrate'}>
            <img src={gallery} alt="" />
            <h4>Galería</h4>
          </Link>
        </div>
        <div>
          <Link to={'videos'}>
            <img src={testimonies} alt="" />
            <h4>Testimonios</h4>
          </Link>
        </div>
      </DashBoardBody>
    </>
  )
}
