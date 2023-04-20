import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegEnvelope,
  FaYoutube,
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
          <span>asociacioneducacionsanitaria@outlook.com</span>
        </div>
      </ContactInfo>
      <ContactInfo>
        <i>
          <FaPhoneAlt />
        </i>
        <div>
          <p>Teléfono</p>
          <span>954812223</span>
        </div>
      </ContactInfo>
      <SocialMedia>
        <Link
          to="https://www.facebook.com/profile.php?id=100075719030131"
          target="_blank"
        >
          <button>
            <FaFacebookF />
          </button>
        </Link>

        <Link to="">
          <button>
            <FaInstagram />
          </button>
        </Link>

        <Link
          to="https://www.youtube.com/channel/UCxvKKBjpUHeYtlfmrznMvlg"
          target="_blank"
        >
          <button>
            <FaYoutube />
          </button>
        </Link>

        <Link
          to="https://www.linkedin.com/company/educacionsanitaria/?viewAsMember=true"
          target="_blank"
        >
          <button>
            <FaLinkedinIn />
          </button>
        </Link>
      </SocialMedia>
    </ContactSection>
  )
}
