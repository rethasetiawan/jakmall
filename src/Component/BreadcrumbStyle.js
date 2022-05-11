import styled from 'styled-components';
import Devices from '../Config/Devices';

export const Circle = styled.div`
    color: ${props => props.inputColor || "#FF8A00"};
    background:${props => props.inputColorBG || "#FFE4B8"};
    height:25px;
    width:25px;
    border-radius:25px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const Text = styled.div`
    color: ${props => props.inputColor || "#FF8A00"};
    height:30px;
    font-size:14px;
    padding-left:10px;
    display:flex;
    align-items:center;
`;