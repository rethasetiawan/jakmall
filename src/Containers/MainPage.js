import React, {useState,useEffect} from 'react';
import {
    Background,
    FormBackground,
    BackContainer,
    BreadcumbContainer,
    MainContainer,
    FormContainer,
    LargeOrangeText,
    SummaryContainer,
    EachFormContainer,
    CheckboxContainer,
    NormalText,
    BoldText,
    RowContainer,
    ChooseBtn,
    FieldSet,
  } from './MainStyle';
  import { useForm} from "react-hook-form";
  import TextField from '@mui/material/TextField';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import CheckIcon from '@mui/icons-material/Check';
  import SummaryTotal from '../Component/SummaryTotal';
  import Breadcrumb from '../Component/Breadcrumb';

const MainPage = ({props}) =>{

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors }
      } = useForm({});
      
      const values = getValues();
      const [isDropshipper, setIsDropshipper] = useState(false);
      const [lengthAddress, setLengthAddress] = useState(0);
      const [isAddress, setIsAddress] = useState(false);
      const [isEmail, setIsEmail] = useState(false);
      const [isDeliveryNum, setIsDeliveryNum] = useState(false);
      const [isDropNum, setIsDropNum] = useState(false);
      const [currentSection, setCurrentSection] = useState(1);
      const [isShipment, setIsShipment] = useState(false);


    useEffect(() => {
      if (values.asDrop){
        setIsDropshipper(false)
      }else{
        setIsDropshipper(true)
      }
    });

   const currencyFormat = (num) => {
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
   }

   const doPayment = ()=>{
    setIsShipment(true)
   }

   const PaymentChoose = (name,price) =>{
     return(
       <>
        <ChooseBtn onClick={()=>doPayment()}>
          <div>
            <NormalText>{name}</NormalText>
            <BoldText>{price}</BoldText>
          </div>
          <CheckIcon style={{color:'#7CE9AB',height:15, width:15}}/>
        </ChooseBtn>
       </>
     )
   }

   const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
   const handleChangeAddress = (event)=>{
    setLengthAddress(event.target.value.length)
    if (event.target.value.length > 120){
      setIsAddress(true)
    } else{
      setIsAddress(false)
    }
   }

   const handleChangeEmail = (event)=>{
     console.log(event.target.value.length)
      if (!validateEmail(event.target.value)){
        setIsEmail(true)
      } else{
        setIsEmail(false)
      }
   }

   const handleChangeNumber = (event)=>{
    if ((event.target.value.length < 6 || event.target.value.length > 20)){
      setIsDeliveryNum(true)
    } else{
      setIsDeliveryNum(false)
    }
 }
    const handleChangeDropNumber = (event)=>{
    if ((event.target.value.length < 6 || event.target.value.length > 20)){
      setIsDropNum(true)
    } else{
      setIsDropNum(false)
    }
    }

   const DeliverySection = () => {
     return(
      <>
        <EachFormContainer>
            <LargeOrangeText>
                Delivery details
            </LargeOrangeText>

                <TextField
                {...register("email")}
                onChange={(event) => handleChangeEmail(event)} 
                label="Email"
                inputProps={{style: {fontSize: 14}}} 
                InputLabelProps={{style: {fontSize: 14, color: isEmail ? " orange" : "gray"}}}
                sx={{ 
                "& .MuiFilledInput-root": {background: 'transparent', border: isEmail ? "2px solid orange" : "2px solid #e2e2e1"},
                "&:hover": {
                  backgroundColor: "transparent"
                },
                "&.Mui-focused": {
                  backgroundColor: "transparent",
                },
                borderRadius: 1,marginBottom:1}}
                InputProps={{disableUnderline: true}}
                variant="filled"
              />

              <TextField
                {...register("number")}
                onChange={(event) => handleChangeNumber(event)} 
                label="Phone Number"
                inputProps={{style: {fontSize: 14}}} 
                InputLabelProps={{style: {fontSize: 14, color: isDeliveryNum ? " orange" : "gray"}}}
                sx={{ 
                "& .MuiFilledInput-root": {background: 'transparent', border: isDeliveryNum ? "2px solid orange" : "2px solid #e2e2e1"},
                "&:hover": {
                  backgroundColor: "transparent"
                },
                "&.Mui-focused": {
                  backgroundColor: "transparent",
                },
                borderRadius: 1,marginBottom:1}}
                InputProps={{disableUnderline: true}}
                variant="filled"
              />

              <TextField
                {...register("address")}
                onChange={(event) => handleChangeAddress(event)} 
                label="Delivery Address"
                multiline
                rows={4}
                inputProps={{style: {fontSize: 14}}} 
                InputLabelProps={{style: {fontSize: 14, color: isAddress ? " orange" : "gray"}}}
                sx={{ 
                "& .MuiFilledInput-root": {background: 'transparent', border: isAddress ? "2px solid orange" : "2px solid #e2e2e1"},
                "&:hover": {
                  backgroundColor: "transparent"
                },
                "&.Mui-focused": {
                  backgroundColor: "transparent",
                },
                borderRadius: 1}}
                InputProps={{disableUnderline: true}}
                variant="filled"
              />
              
            <NormalText>{lengthAddress}/120</NormalText>
        </EachFormContainer>

        <EachFormContainer>
            <CheckboxContainer>
                <input {...register("asDrop")} type='checkbox' placeholder="Dropshipper Name"/>
                <label style={{fontSize:12}}>Send as dropshipper</label>
            </CheckboxContainer>

            <FieldSet disabled={isDropshipper} >
            <TextField
                {...register("dropName")}
                label="Dropshipper Name"
                inputProps={{style: {fontSize: 14}}} 
                InputLabelProps={{style: {fontSize: 14, color: "gray"}}}
                sx={{ 
                "& .MuiFilledInput-root": {background: 'transparent', border:  "2px solid #e2e2e1"},
                "&:hover": {
                  backgroundColor: "transparent"
                },
                "&.Mui-focused": {
                  backgroundColor: "transparent",
                },
                borderRadius: 1,marginBottom:1}}
                InputProps={{disableUnderline: true}}
                variant="filled"
              />
                 <TextField
                {...register("dropNum")}
                onChange={(event) => handleChangeDropNumber(event)} 
                label="Dropshipper Number"
                inputProps={{style: {fontSize: 14}}} 
                InputLabelProps={{style: {fontSize: 14, color: isDropNum ? " orange" : "gray"}}}
                sx={{ 
                "& .MuiFilledInput-root": {background: 'transparent', border: isDropNum ? "2px solid orange" : "2px solid #e2e2e1"},
                "&:hover": {
                  backgroundColor: "transparent"
                },
                "&.Mui-focused": {
                  backgroundColor: "transparent",
                },
                borderRadius: 1,marginBottom:1}}
                InputProps={{disableUnderline: true}}
                variant="filled"
              />
            </FieldSet>
        </EachFormContainer>
      </>
     )
   }

   const ThankyouSection = () => {
    return(
     <div style={{display:'flex', alignItems:'center', margin:'0px auto 0 auto'}}>
       <EachFormContainer>
           <LargeOrangeText>
               Thank You
           </LargeOrangeText>
           <NormalText>Order ID: XXXXXXX </NormalText>
           <NormalText>Your order will be delivered todayy with GO-SEND</NormalText>

            <BackContainer style={{marginTop:40}} onClick={()=>setCurrentSection(1)}>
                <ArrowBackIcon style={{height:15, width:15}}/>
                <NormalText style={{paddingLeft:10}}>Go to hompage</NormalText>
            </BackContainer>

       </EachFormContainer>
     </div>
    )
  }

   const PaymentSection = () => {
    return(
     <div>
       <div>
           <LargeOrangeText>
               Shipment
           </LargeOrangeText>

          <RowContainer>
            {PaymentChoose("GO-SEND",currencyFormat(15000))}
            {PaymentChoose("JNE",currencyFormat(9000))}
            {PaymentChoose("Personal Courier",currencyFormat(29000))} 
          </RowContainer>
       </div>

       <div style={{marginTop:30}}>
           <LargeOrangeText>
               Payment
           </LargeOrangeText>

          <RowContainer>
            {PaymentChoose("e-Wallet",`${currencyFormat(1500000)} left`)}
            {PaymentChoose("Bank Transfer")}
            {PaymentChoose("Virtual Account")} 
          </RowContainer>
       </div>
     </div>
    )
  }


  const onSubmit = (data) => {
      setCurrentSection(currentSection+1)
}; 

  
  const BackSection = ({name,isBack}) =>{
    return(
      <BackContainer style={{marginLeft:20}} onClick={()=>isBack()}>
        <ArrowBackIcon style={{height:15, width:15}}/>
        <NormalText style={{paddingLeft:10}}>{name}</NormalText>
      </BackContainer>
    )
  }

    return(
        <Background>
            <FormBackground >
                <BreadcumbContainer>
                  < Breadcrumb section={currentSection}/>
                </BreadcumbContainer>

                {currentSection == 1 && <BackSection name={"Back to cart"}/>}
                {currentSection == 2 && <BackSection name={"Back to delivery"} isBack={()=>setCurrentSection(1)}/>}

                <MainContainer onSubmit={handleSubmit(onSubmit)}>
                    <FormContainer>
                        {currentSection == 1 && DeliverySection()}
                        {currentSection == 2 && PaymentSection()} 
                        {currentSection == 3  && ThankyouSection()}
                    </FormContainer>

                    <SummaryContainer>
                      <SummaryTotal
                          priceCost={500000}
                          priceFee={isDropshipper ? 0:5900 }
                          shipment={isShipment}
                      />
                    </SummaryContainer> 
                </MainContainer>
            </FormBackground>
        </Background>
    )
}
export default (MainPage);

