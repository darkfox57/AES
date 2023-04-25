import React from 'react'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa'
import { IoGitNetworkSharp } from 'react-icons/io5'
import { RedeSocial } from './SiguenosRedes.Styled'
//FaFacebookSquare facebook
//FaInstagramSquare instagram
//FaTwitterSquare twitter

const SiguenosRedes = () => {
  return (
    <RedeSocial>
      <h4>
        <IoGitNetworkSharp className="icon-follow" /> Síguenos
      </h4>
      <ul>
        <li>
          <FaFacebookSquare className="ico-redes" />{' '}
        </li>
        <li>
          <FaInstagramSquare className="ico-redes" />
        </li>
        <li>
          <FaTwitterSquare className="ico-redes" />
        </li>
        <li>
          <FaLinkedin className="ico-redes" />
        </li>
      </ul>
    </RedeSocial>
  )
}

export default SiguenosRedes
