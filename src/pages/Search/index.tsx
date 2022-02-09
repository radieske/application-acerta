import React, { useState, useEffect, FormEvent, useCallback } from 'react';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import api from '../../apis/api';
import Lead from '../../models/lead';
import { Div, Form, Inputs, Input, Button, Grid, Table, TableHeader, TableLabel, TableData, TableValue, TableEmpty, StyledBsPencilSquare, StyledBsTrash} from './style';

function Search() {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [leads, setLeads] = useState([]);

    function fnSearchLeads(e: FormEvent) {
        e.preventDefault();

        searchLeads();
    }

    const searchLeads = useCallback(() => {
        (async function () {
            let params: { nome_like?: string, cpf?: string } = {};
            if (name) {
                params.nome_like = name;
            }

            if (cpf) {
                params.cpf = cpf;
            }

            const response = await api.get('leads', { params });

            setLeads(response.data);
        })();
    }, [cpf, name]);

    async function fnDeleteLead(id: number) {
        try {
            const { status, response } = await api.delete(`leads/${id}`);

            if (status === 200) {
                searchLeads();
            } else {
                console.error('Failed to register lead', response.data);
            }
        } catch (err) {
            console.error('Failed to register lead', err)
        }
    }

    useEffect(searchLeads, []);

    return(
        <Div>
            <Header title="Consulta de leads"></Header>
            <Form onSubmit={fnSearchLeads}>
                <span>Filtros</span>
                <Inputs>
                    <Input>
                        <label>Nome</label>
                        <input name="name" value={name} onChange={e => setName(e.target.value)} type="text"/>
                    </Input>
                    <Input>
                        <label>CPF</label>
                        <InputMask name="cpf" mask="999.999.999-99" value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} />
                    </Input>
                </Inputs>
                <Inputs flexEnd>
                    <Button type="submit">Filtrar</Button>
                </Inputs>
            </Form>
             <Inputs>
                <Link to="/register">
                    <Button type="button">Novo lead</Button>
                </Link>
            </Inputs>
            <Grid>
                <Table>
                    <TableHeader>
                        <TableLabel></TableLabel>
                        <TableLabel></TableLabel>
                        <TableLabel>Email</TableLabel>
                        <TableLabel>Nome</TableLabel>
                        <TableLabel>CPF</TableLabel>
                    </TableHeader>
                    {leads && leads.length > 0 ?
                            leads.map((lead: Lead) => (
                        <TableData key={lead.id}>
                            <TableValue>
                                <Link to={'/register/' + lead.id}>
                                    {<StyledBsPencilSquare />}
                                </Link>
                            </TableValue>
                            <TableValue>
                                {<StyledBsTrash onClick={() => { fnDeleteLead(lead.id); }} />}
                            </TableValue>
                            <TableValue>{lead.email}</TableValue>
                            <TableValue>{lead.nome}</TableValue>
                            <TableValue><InputMask mask="999.999.999-99" value={lead.cpf} /></TableValue>
                        </TableData>
                    ))
                    :
                        <TableEmpty>
                            <span>Nenhum registro encontrado</span>
                        </TableEmpty> 
                    }
                </Table>
            </Grid>
        </Div>
    );
}

export default Search;