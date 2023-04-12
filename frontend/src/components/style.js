import styled from "styled-components";

export const FormContainer = styled.form `
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`


export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
   whidth: 0 10px;
   border: 1px solid #bbb;
   border-radius: 5px;
   height: 40px
`;

export const Label = styled.label`
    
`

export const Button = styled.button `
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`

export const Table = styled.table `
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    max-width:800px;
    margin: 20px auto;
    word-break: break-all
`
