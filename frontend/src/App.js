import GlobalStyle from './styles/global'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Container, Title} from './style.js'
import Form from './components/Form.js'

function App() {
  return (
    <div className="App">
      <Container>
        <Title>
          USUÁRIOS
        </Title>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </div>
  );
}

export default App;
