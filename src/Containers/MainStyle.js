import styled from 'styled-components';
import Devices from '../Config/Devices';

export const Background = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #FFFAE6;
  background-repeat: no-repeat;
  background-size   : cover;
`;

export const FormBackground = styled.div`
  width: 80%;
  height:500px;
  background: white;
  display:flex;
  flex-direction: column;
  @media ${Devices.tablet} {
    height:800px;
   }
  @media ${Devices.laptop} {
    height:500px;
  }
`;

export const BreadcumbContainer = styled.div`
  width: 50%;
  background: #FFFAE6;
  border-radius:20px;
  padding:10px;
  align-items: center;
  justify-content: center;
  display:flex;
  margin: -20px auto 0px auto;
`;

export const MainContainer = styled.form`
  display:flex;
  flex-direction:row;
  padding:20px;
  height:100%;
  @media ${Devices.tablet} {
    flex-direction:column;
  }
  @media ${Devices.laptop} {
    flex-direction:row;
  }
`;

export const FormContainer = styled.div`
  display:flex;
  width:70%;
  height:100%;
  @media ${Devices.tablet} {
    width:100%;
  }
  @media ${Devices.laptop} {
    width:70%;
  }
`;

export const SummaryContainer = styled.div`
  display:flex;
  flex-direction:column;
  border-left: 1px solid #FF8A00;
  height:100%;
  justify-content:space-between; 

  @media ${Devices.tablet} {
    border-top: 1px solid #FF8A00;
    border-left: 0px;
    padding-left:0px;
    width:100%;
  }
  @media ${Devices.laptop} {
    border-top: 0px;
    border-left: 1px solid #FF8A00;
    padding-left:20px;
    width:30%;
  }
`;

export const LargeOrangeText = styled.div`
  color:#FF8A00;
  font-size:26px;
  font-weight: bold;
  padding-bottom: 25px;
`;

export const InputContainer = styled.input`
    padding:10px;
    width:'100%';
    margin-bottom:5px;
`;

export const EachFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    padding-right:20px;
`;

export const CheckboxContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    height:45px;
    padding-top:15px;
`;

export const NormalOrangeText = styled.div`
  color:#FF8A00;
  font-size:20px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const NormalText = styled.div`
  font-size:12px;
  font-weight:400;
  height:20px;
`;

export const BoldText = styled.div`
  font-size:12px;
  font-weight:bold;
`;

export const SpaceBetween = styled.div`
    display:flex;
    justify-content:space-between;
    height:25px;
`;
export const ColumnContainer = styled.div`
    display:flex;
    flex-Direction:column;
`;

export const RowContainer = styled.div`
    display:flex;
    flex-Direction:row;
`;
export const Button = styled.button`
  background:#FF8A00;
  height:50px;
  color:white;
  justify-content:center;
  align-items:center;
  display:flex;
  border:0px
`;

export const BackContainer = styled.div`
  flex-Direction:row;
  align-items:center;
  display:flex;
  cursor:pointer;
`;

export const ChooseBtn = styled.div`
    display:flex;
    justify-content:space-between;
    width:150px;
    padding:10px;
    border:1px solid lightgray;
    margin-right:10px;
    align-items:center;
`;
export const Seperate = styled.div`
    width:80px;
    height:1px;
    background:lightgray;
    margin: 20px 0px 20px 0px;
`;
export const FieldSet = styled.fieldset`
    display:flex;
    flex-Direction:column;
    border:0px;
    padding:0px;
`;