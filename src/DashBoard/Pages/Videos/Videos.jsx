import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { editFile, getAllFiles } from '../../../redux/actions/gallery_actions'
import VideoCard from './Card/VideoCard'
import { GalleryWrapper } from './gallery.styles'

export default function Videos() {
  const dispatch = useDispatch()
  const images = useSelector((state) => state.gallery.files)
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <>
      <h2>Testimonios</h2>
      <Link className="dashBtn" to={'add'}>
        Agregar Video
      </Link>
      <GalleryWrapper>
        {images
          .filter((file) => file.origin === 'videos')
          .map((video) => (
            <VideoCard
              key={video._id}
              id={video._id}
              url={video.url}
              status={video.status}
              submition={video}
              activeModal={selectedCard === video._id}
              captureIdModal={() => setSelectedCard(video._id)}
              setSelectedCard={setSelectedCard}
            />
          ))}
      </GalleryWrapper>
    </>
  )
}
