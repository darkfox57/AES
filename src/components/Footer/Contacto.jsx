import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
} from 'react-icons/fa'
import logo from '../../assets/logo-aes.png'
import { ContactInfo, ContactSection, SocialMedia } from './contacto.styles'

export default function Contacto() {
  return (
    <ContactSection>
      <img
        src={logo}
        alt="Por un Perú mejor - Organización sin animo de lucro"
      />
      <ContactInfo>
        <i>
          <FaRegEnvelope />
        </i>
        <div>
          <p>Correo Electrónico</p>
          <span>info@aes.com</span>
        </div>
      </ContactInfo>
      <ContactInfo>
        <i>
          <FaPhoneAlt />
        </i>
        <div>
          <p>Teléfono</p>
          <span>980-987-098-09</span>
        </div>
      </ContactInfo>
      <SocialMedia>
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaLinkedinIn />
        </button>
      </SocialMedia>
    </ContactSection>
  )
}
