import { useState } from "react";
import { Button, Col, Collapse, Row } from "reactstrap";

export default function Menu(props) {
    
    const {setContent} = props;

    const [open, setOpen] = useState(false);
    
    
    const ipcRenderer = window.require('electron').ipcRenderer;


    return <>

    <Row>
        <Col className="p-4">
            <Button onClick={() => {setOpen(!open)}}>
                Menu
            </Button>
        </Col>
    </Row>

    <Row className="">
        <Col className="p-4">
            <Collapse isOpen={open}>

                <Row>
                    <Col className="mb-2">
                        <Button
                            onClick={() => {
                                ipcRenderer.send('chooseFile', true);
                            }}
                        >
                            Carregar Arquivo
                        </Button>
                    </Col>

                    <Col className="mb-2">
                        <Button
                            onClick={() => {
                                setContent("")
                            }}
                        >
                            Fechar Arquivo
                        </Button>
                    </Col>

                    <Col className="mb-2">
                        <Button
                            onClick={() => {
                                
                            }}
                        >
                            Salvar Arquivo
                        </Button>
                    </Col>
                </Row>
                
            </Collapse>
        </Col>
    </Row>
    </>
}