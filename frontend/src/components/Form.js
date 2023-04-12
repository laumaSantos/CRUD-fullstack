import React, { useRef } from "react";
import {FormContainer, InputArea, Label, Input, Button} from'./style.js'
const Form = ({onEdit}) => {
    const ref = useRef();
    return(
        <FormContainer>
           <InputArea>
                <Label>Nome</Label>
                <Input name='nome'/>
           </InputArea> 
           <InputArea>
                <Label>E-mail</Label>
                <Input name='email' type='email'/>
           </InputArea>
           <InputArea>
                <Label>Telefone</Label>
                <Input name='fone' type='number'/>
           </InputArea>  
           <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name='Data_nasc' type='date'/>
           </InputArea>
           <Button type="submit">SALVAR</Button>
        </FormContainer>
    )
}

export default Form;