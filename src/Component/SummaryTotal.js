import React from 'react';
import {
    NormalOrangeText,
    NormalText,
    BoldText,
    SpaceBetween,
    ColumnContainer,
    Button,
    Seperate
  } from '../Containers/MainStyle';

const summaryTotalPurchased = (name,price) =>{
    return(
     name == 'Total' ? 
     (   <SpaceBetween style={{margin:'10px 0px 20px 0px'}}>
          <NormalOrangeText>
            {name}
          </NormalOrangeText>
          <NormalOrangeText>
            {price}
          </NormalOrangeText>
        </SpaceBetween>
         )
         :
      (  <SpaceBetween>
            <NormalText>
               {name}
            </NormalText>
            <BoldText>
                {price}
            </BoldText> 
        </SpaceBetween> )
    )
}

const currencyFormat = (num) => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const SummaryTotal = ({priceCost,priceFee,shipment,nameShipment,priceShipment}) =>{
    return(
        <>
         <ColumnContainer>
            <NormalOrangeText>Summary</NormalOrangeText>
            <NormalText>10 times purchased</NormalText>
            {shipment ? <div>
              <Seperate/>
              <NormalText>Delivery estimation</NormalText>
              <NormalText style={{color:'#7CE9AB'}}>today by GO-SEND</NormalText>
            </div> : null }

         </ColumnContainer>
         <ColumnContainer>
            {summaryTotalPurchased("Cost of goods",currencyFormat(priceCost))}
            {summaryTotalPurchased("Dropshipping Fee",currencyFormat(priceFee))}
            {/* {summaryTotalPurchased(`${nameShipment} shipment`,currencyFormat(priceShipment))} */}
            {summaryTotalPurchased("Total",currencyFormat(priceCost+priceFee))}
           
            <Button type="submit">
                 Continue to  Payment
            </Button>
         </ColumnContainer>
        </>
    )
}


export default (SummaryTotal);