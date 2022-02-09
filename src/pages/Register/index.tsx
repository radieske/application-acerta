import React, { useState, useEffect, FormEvent, useCallback } from 'react';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../../apis/api';
import Lead from '../../models/lead';
import TiposEstadoCivil from '../../models/TipoEstadoCivil';
import TipoEstadoCivil from '../../models/TipoEstadoCivil';
import { useFormik } from "formik"
import * as Yup from 'yup';
import { Div, Form, Inputs, Input, Select, Button, CancelButton, Messages} from './style';

function Register() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tiposEstadoCivil, setTiposEstadoCivil] = useState<string[]>([]);
    const [isSpouseNameActive, setIsSpouseNameActive] = useState(false);

    const [lead, setLead] = useState<Lead>({
        id: 0,
        nome: '',
        email: '',
        cpf: '',
        estadoCivil: 'Solteiro(a)',
        nomeConjugue: ''
    });

    const validationSchema = Yup.object().shape({
        nome: Yup.string()
            .required('Informe o nome'),
        email: Yup.string()
            .email('O e-mail não é um e-mail válido')
            .required('Informe o e-mail'),
        cpf: Yup.string()
            .required('Informe o CPF'),
        estadoCivil: Yup.string()
            .required('Informe o estado civil'),
        nomeConjugue: Yup.string().when('estadoCivil', {
            is: 'Casado(a)',
            then: Yup.string().required('Informe o nome do cônjugue')
        })
    });

    async function handleSubmitLead(lead: Lead) {
        try {
            lead.cpf = lead.cpf.replace(/\D/g, '')
            debugger;
            const { status, response } = id ? await api.put(`leads/${id}`, lead) : await api.post('leads', lead);

            if (status === 201 || status === 200) {
                debugger;
                navigate('/');
            } else {
                console.error('Ocorreu uma falha ao cadastrar o lead', response.data);
            }
        } catch (err) {
            console.error('Ocorreu uma falha ao cadastrar o lead', err)
        }
    }

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        initialValues: lead,
        onSubmit: handleSubmitLead,
        validationSchema,
        validateOnChange: false,
        enableReinitialize: true
    });

    function fnMaritalStatusChange() {
        if (values.estadoCivil === "Casado(a)") {
            setIsSpouseNameActive(true);
        } else {
            setIsSpouseNameActive(false);
            values.nomeConjugue = '';
        }
    }

    const getMaritalStatus = useCallback(async () => {
        const response = await api.get<TiposEstadoCivil[]>(`/tiposEstadoCivil`);
        const maritalStatusList = response.data.map((tipoEstadoCivil: TipoEstadoCivil) => (
            tipoEstadoCivil.nomeEstadoCivil
        ));
        setTiposEstadoCivil(maritalStatusList);
    }, []);

    const getLead = useCallback(async () => {
        if (id) {
            const response = await api.get<Lead>(`/leads/${id}`);
            setLead(response.data);
        }
    }, [id]);

    useEffect(() => { getMaritalStatus(); getLead(); }, [getLead, getMaritalStatus]);
    useEffect(fnMaritalStatusChange, [values.estadoCivil]);

    return(
        <Div>
            <Header title="Cadastro de leads"></Header>
            <Form onSubmit={handleSubmit}>
                <Inputs>
                    <Input>
                        <label>Nome</label>
                        <input name="nome" value={values.nome}  onChange={handleChange} type="text"/>
                        {touched.nome && errors.nome && (<Messages>{errors.nome}</Messages>)}
                    </Input>
                    <Input>
                        <label>CPF</label>
                        <InputMask name="cpf" mask="999.999.999-99" value={values.cpf} onChange={handleChange} />
                        {touched.cpf && errors.cpf && (<Messages>{errors.cpf}</Messages>)}
                    </Input>
                </Inputs>
                <Inputs>
                    <Input>
                        <label>Email</label>
                        <input name="email" value={values.email} onChange={handleChange} type="text"/>
                        {touched.email && errors.email && (<Messages>{errors.email}</Messages>)}
                    </Input>
                    <Input>
                        <label>Estado civil</label>
                        <Select name="estadoCivil" value={values.estadoCivil} onChange={handleChange}>
                            {tiposEstadoCivil.map((option: string) => (
                                <option value={option} key={option}>{option}</option>
                            ))}
                        </Select>
                        {touched.estadoCivil && errors.estadoCivil && (<Messages>{errors.estadoCivil}</Messages>)}
                    </Input>
                </Inputs>
                <Inputs>
                    <Input>
                        <label>Nome do cônjugue</label>
                        <input name="nomeConjugue" value={values.nomeConjugue} onChange={handleChange} disabled={!isSpouseNameActive} style={{ backgroundColor: !isSpouseNameActive ? '#D4D4D4' : '' }} type="text"/>
                        {touched.nomeConjugue && errors.nomeConjugue && (<Messages>{errors.nomeConjugue}</Messages>)}
                    </Input>
                    <Input></Input>
                </Inputs>
                <Inputs spaceBetween>
                    <Link to="/">
                        <CancelButton type="button">Cancelar</CancelButton>   
                    </Link>
                    <Button type="submit">Cadastrar</Button>
                </Inputs>
            </Form>
        </Div>
    );
}

export default Register;