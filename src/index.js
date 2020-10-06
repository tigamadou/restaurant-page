import _ from 'lodash';
import './assets/sass/style.sass'
import App from './App'

function component() {  
  var app = new App()
  return app.render()
}

document.body.appendChild(component());