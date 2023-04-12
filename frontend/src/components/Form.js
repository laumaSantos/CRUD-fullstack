import React, { useRef } from "react";
import {FormContainer, InputArea, Label, Input} from'./style.js'
const Form = ({onEdit}) => {
    const ref = useRef();
    return(
        <FormContainer>
           <InputArea>
            <Label>Nome</Label>
            <Input name='nome'/>
           </InputArea> 
        </FormContainer>
    )
}

export default Form;