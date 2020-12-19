import React from 'react'

import './index.css'

const index = () => (
  <div className="footer">
    <p className="footer-copyright">
      &copy; 
        ITAI -Instituto de Tecnologia Aplicada e Inovação | Microrredes. {new Date().getFullYear()}
    </p>
  </div>
)

export default index;