import React from 'react'
import { Icon, InlineIcon } from '@iconify/react'

import locationIcon from '@iconify/icons-mdi/map-marker-radius-outline'
import phoneIcon from '@iconify/icons-mdi/phone-outline'
import emailIcon from '@iconify/icons-mdi/email-multiple-outline'


import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'

import './index.css'

const contactDetails = [
    {
        value: ' Parque tecnologico Itaipu,  Foz do Iguaçu, Endereço: Av. Tancredo Neves, 6731',
        icon: locationIcon,
    },
    { value: '+55 45 3576 7113‍', icon: phoneIcon },
    { value: 'contato@itai.org.br', icon: emailIcon },
]

const renderContactDetails = () =>
    contactDetails.map(detail => (
        <p key={detail.value} className="info-detail">
            <InlineIcon icon={detail.icon} /> {detail.value}
        </p>
    ))

const renderIcons = () =>
    [facebookIcon, linkedinIcon, twitterIcon].map((icon, key) => (
        <Icon icon={icon} key={key} className="info-icon" />
    ))

const index = () => (
    <section className="info">
        <h2 className="info-h2">
            Informações de Contato</h2>

        <div className="info-details-container">{renderContactDetails()}</div>

        <div className="info-icons-container">{renderIcons()}</div>
    </section>
)

export default index;