import React from 'react'
import { RedeSocial } from './SiguenosRedes.Styled'
import { IoGitNetworkSharp} from 'react-icons/io5'
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaLinkedin} from 'react-icons/fa'
//FaFacebookSquare facebook
//FaInstagramSquare instagram
//FaTwitterSquare twitter

const SiguenosRedes = () => {
  return (
    <RedeSocial>
       <h4><IoGitNetworkSharp className='icon-follow'/> Siguenos</h4>
       <ul>
        <li><FaFacebookSquare className='ico-redes'/> </li>
        <li><FaInstagramSquare className='ico-redes'/></li>
        <li><FaTwitterSquare className='ico-redes'/></li>
        <li><FaLinkedin className='ico-redes'/></li>
       </ul>
    </RedeSocial>
  )
}

export default SiguenosRedes
