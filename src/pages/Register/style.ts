import styled from 'styled-components';

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

    span {
        font-size: 20px;
        color: #020202;
        margin: 10px 0;
    }

`;

interface InputsProps {
    spaceBetween?: boolean
}

export const Inputs = styled.div<InputsProps>`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    flex-flow: row wrap;
    justify-content: ${(props: InputsProps) => (props.spaceBetween ? 'space-between' : 'flex-start')};
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 5px 0 0;
    
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

export const Select = styled.select`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px 5px 0 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    max-height: 36px;

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

export const CancelButton = styled.button`
    cursor: pointer;
    width: 100px;
    display: inline-block;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px;
    color: #000;
    background: #989898;
    font-weight: bold;


    &:hover {
        background: #989898c4;
    }
`;

export const Messages = styled.div`
font-size: 13px;
border: 0px;
margin: 2px 0px;
padding: 3px;
color: #D8000C;
background-color: #FFBABA; 







`;

