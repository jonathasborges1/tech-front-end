// @ts-ignore
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import { Container, Row, Col, Card, Button, Figure, Form } from 'react-bootstrap';
import {TbBrandBootstrap} from "react-icons/tb";


function App() {
  return (
      <div className="App">
      <Container style={{border: "0px red solid", maxWidth: '95%', padding: "1rem"}}>
        <Row style={{border: "0px blue solid", marginTop: "2rem", marginBottom: "2rem"}} >
          <Col style={{border: "0px black solid"}} sm={12} md={12} lg={12} xl={12} xs={12} xxl={12}>
            <Row>
              <Col style={{border: "0px black red", textAlign: "end"}} sm={6} md={6} lg={6} xl={6} xs={6} xxl={6}>
                <Figure style={{marginLeft: "auto"}}>
                  <Figure.Image
                    width={400}
                    height={600}
                    alt="Banner"
                    // @ts-ignore
                    src={require('../src/assets/banner-400x600.png')}
                  />
                  <Figure.Caption style={{textAlign: "center"}}>
                    Bootstrap Foundation
                  </Figure.Caption>
                </Figure>
              </Col>

              <Col style={{border: "0px black blue", display: "flex", alignItems:"center", paddingRight: "8rem"}} sm={6} md={6} lg={6} xl={6} xs={6} xxl={6}>
                
                <Card style={{background:"none", color:"white"}}>

                  <Card.Header>BootCamp <TbBrandBootstrap/></Card.Header>

                    <Card.Body>
                    <Card.Title style={{fontWeight: 900, fontSize: "1.8rem"}}> Aprenda como Desenvolver Páginas de Alta Performance com Bootstrap </Card.Title>
                    <Card.Text className="my-4" >
                      O resultado que você procura está nas lições que você ainda vai aprender, venha participar, faça agora mesmo seu cadastro e tenha acesso ao nosso evento <b style={{color: "springgreen"}} >online</b>.
                    </Card.Text>

                    <Form>

                      <Form.Group className="mb-4" controlId="formBasicEmail">

                        <Form.Group style={{display: "flex", alignItems: "flex-end"}} className="mb-2" controlId="formBasicEmail">
                          <Form.Label style={{fontWeight: 900}}> Email: </Form.Label>
                          <Form.Control className="mx-2" type="email" placeholder="Insira seu Email" />
                        </Form.Group>

                        <Form.Text style={{textAlign: "end", paddingRight: "0.5rem"}} className="text-muted">
                          Nunca compartilharemos seu e-mail com outras pessoas
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Confirmo que li as politicas de privacidade" />
                        <Form.Text className="text-muted">
                          
                            Ao se cadastrar você autoriza o recebimento de comunicações e concordo com os Termos de Uso e Política de Privacidade.                        
                          
                        </Form.Text>
                      </Form.Group>

                      <Button variant="primary" type="submit">Quero Participar</Button>

                    </Form>
                    {/* <Button variant="primary">Quero Participar</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <footer style={{background: "black", textAlign: "center", padding: "0.8rem"}}>
        <p style={{color: "white", opacity: 0.5}}>Jonathas Borges &copy; 2022 | Todos os direitos reservados</p>
      </footer>

{/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
