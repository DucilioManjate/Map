import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './index.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Nome', placeholder: 'Ducilio' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Celular',
    placeholder: '+55 45X XXX XXXX',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'ducilio.manjate@itai.org.br',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Sua Mensagem',
    placeholder: 'Como podemos te ajudar? ',
  },
]

const index = () => (
  <form className="form">
    <h2 className="form-h2"> Envie-nos uma mensagem </h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
            <input
              className="form-input"
              type={input.type}
              placeholder={input.placeholder}
            />
          )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} />

  </form>
)

export default index;
