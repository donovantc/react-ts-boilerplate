import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Message from './components/Message'

ReactDOM.render(
  <Message to="Vinny" from="Modo" body="We are the biker mice from mars" />,
  document.getElementById('root')
)