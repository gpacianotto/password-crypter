import { Col, Row, Button, FormGroup, Label, Input } from "reactstrap";
import FileService from "../services/FileService";
import { useState } from "react";
import Menu from "./Menu";

const ipcRenderer = window.require('electron').ipcRenderer;

export default function Controller() {
    
    const [content, setContent] = useState([]);

    const fileService = FileService.getInstance();
    
    ipcRenderer.on('fileText', (event, data) => {
        const arrayData = fileService.readFileText(data.path);
        let stringed = "";

        arrayData.map((line) => {
            stringed = stringed + line + "\n";
        })

        setContent(stringed);
    })

    return <>
    
    <Row style={{width: "100%"}}>
        <Col md="3">
            <Menu setContent={setContent}/>
        </Col>
        <Col md="6">
            <FormGroup>
                <Label for="textArea">
                Conteúdo do seu Arquivo:
                </Label>
                <Input
                id="textArea"
                name="text"
                type="textarea"
                value={content}
                onChange={(e) => {setContent(e.target.value)}}
                style={{resize: "none",height: "85vh"}}
                >
                </Input>
            </FormGroup>
            <Col md="3">
            </Col>
        </Col>

    </Row>
    
    
    </>
}