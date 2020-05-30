import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSearchPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faLinkedin, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add( faSearch, faSearchPlus, faLinkedinIn, faLinkedin, faGithub, faGithubSquare, faHeart )


ReactDOM.render(<App />, document.getElementById('root'))
