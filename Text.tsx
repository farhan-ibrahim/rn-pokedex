import React, { useState } from 'react';
import { Text as NativeText, TextProps} from 'react-native';

interface Props extends TextProps {
    bold?:boolean;
    color?:string;
}

const Text = (props:Props) => {
    return(
        <NativeText 
            style={[props.style, {
                fontWeight:props.bold ? "bold" : "500",
                color:props.color || "black"
            }]}
        >
            {props.children}
        </NativeText>
    )
}

export default Text