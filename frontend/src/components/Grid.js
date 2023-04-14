import React from "react";
import {Table, Thead, Tbody, Tr, Th, Td} from './style.js'
import axios from 'axios'
import {FaTrash, FaEdit} from 'react-icons/fa'
import {toast} from 'react-toastify'

const Grid = ({users}) => {
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th>Telefone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i)=>(
                    <Tr key={i}>
                        <Td width ="30%">{item.nome}</Td>
                        <Td width ="30%">{item.email}</Td>
                        <Td width ="20%">{item.fone}</Td>
                        <Td width="5%" alignCenter>
                            <FaEdit onClick={()=>{}}/>
                        </Td>
                        <Td width="5%" alignCenter>
                            <FaTrash onClick={()=>{}}/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid;