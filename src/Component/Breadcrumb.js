import React from 'react';
import {
    Circle,
    Text
  } from './BreadcrumbStyle';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Breadcrumb = (section) =>{
    return(
        <>
            <Circle inputColor={"white"} inputColorBG={"#FF8A00"}>1</Circle>
            <Text>Delivery</Text>
            <ChevronRightIcon style={styles.icon}/>
            <Circle inputColor={"white"} inputColorBG={"#FF8A00"}>2</Circle>
            <Text>Payment</Text>
            <ChevronRightIcon style={styles.icon}/>
            <Circle>3</Circle>
            <Text>Finish</Text>
        </>

    )
}

const styles={
    icon:{
        width:20,
        height:20,
        margin:'0px 10px 0px 10px',
         color:'#FF8A00'
    }
}

export default (Breadcrumb);