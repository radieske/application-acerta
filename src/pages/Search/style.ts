import styled from 'styled-components';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Form = styled.form`
    display: flex;    
    flex-direction: column; 
    text-align: left;
    background: #FFF;
    border-radius: 10px;
    padding: 20px;
    /*
    width: 100%;
    min-height: 200px;
    */

    span {
        font-size: 20px;
        color: #020202;
        margin: 10px 0;
    }

`;

interface InputsProps {
    flexEnd?: boolean
}

export const Inputs = styled.div<InputsProps>`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    flex-flow: row wrap;
    justify-content: ${(props: InputsProps) => (props.flexEnd ? 'flex-end' : 'flex-start')};
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 00px 5px 0 0;
    
    label {
        font-size: 14px; 
        color: #020202;   
        margin: 0 0 5px 0;    
    }

    input {
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 12px 20px 12px 12px;
        color: #3C3C3C;
        height: 36px;
        font-size: 16px;
    }

    @media(max-width: 700px) {
        flex: 0 1 calc(100% - 10px);
    }
`;

export const Button = styled.button`
    
    cursor: pointer;
    width: 100px;
    display: inline-block;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px;
    color: #000;
    background: #F79028;
    font-weight: bold;


    &:hover {
        background: #FF870F;
    }
`;

export const Grid = styled.div`
    flex: 1;
    display: block;
    
    @media(max-width: 700px) {
        overflow-x: auto;
    }
`;

export const Table = styled.div`
    margin: 20px 0 0 0;
`; 

export const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 30px 30px repeat(3, 1fr);
    color: #444;
`; 

export const TableLabel = styled.div`
    color: #FFF;
    border-bottom: 1px solid #020202;
    text-align: left;
    font-size: medium;
    padding: 0 0 0 5px;
`; 

export const TableData = styled.div`
    display: grid;
    grid-template-columns: 30px 30px repeat(3, 1fr);
    background-color: #FFF;
`; 

export const TableValue = styled.div`
    color: #020202;
    border-bottom: 1px solid #224D74;
    text-align: left;
    font-size: medium;
    padding: 5px 0 2px 5px;

    input {
        border: 0;
        font-size: medium;
        color: #3C3C3C;
    }
`; 

export const TableEmpty = styled.div`
    text-align: center !important;
    grid-template-columns: 30px 30px repeat(3, 1fr);
    background-color: #FFF;
    padding: 5px 0 2px 5px;
    font-size: medium;
`; 

export const StyledBsPencilSquare = styled(BsPencilSquare)`
    cursor: pointer;
    color: #3C3C3C;

    @media(max-width: 700px){
        margin: 0 10px;
    }
`;

export const StyledBsTrash = styled(BsTrash)`
    cursor: pointer;
    color: #3C3C3C;
    
    @media(max-width: 700px){
        margin: 0 10px;
    }
`;