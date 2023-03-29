import React from 'react'

import Slider from '../../components/Slider/Slider'

//Hahber si asi funciona

export default function Home() {
  return (
    <Slider
      data={[
        {
          id: 0,
          text: 'Bosque oscuro 1',
          image:
            'https://www.pabloyglesias.com/wp-content/uploads/2022/06/bosque-oscuro.jpg',
        },
        {
          id: 1,
          text: 'Bosque oscuro 2',
          image:
            'https://w0.peakpx.com/wallpaper/991/222/HD-wallpaper-forest-dark-background-dark.jpg',
        },
        {
          id: 2,
          text: 'Bosque oscuro 3',
          image:
            'https://img3.wallspic.com/previews/3/5/6/4/2/124653/124653-bosque_oscuro-x750.jpg',
        },
      ]}
    />
  )
}
