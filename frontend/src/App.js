import GlobalStyle from './styles/global'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Container, Title} from './style.js'
import Form from './components/Form.js'
import Grid from './components/Grid'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)
  return (
    <div className="App">
      <Container>
        <Title>
          USUÁRIOS
        </Title>
        <Form/>
        <Grid/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </div>
  );
}

export default App;
