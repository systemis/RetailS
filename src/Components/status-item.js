import React, { Component } from 'react';
const statusItem = (status) => {
    console.log("Product status: " + status);
    if(status !== 'underfined' && status){
        const style = {
            top: '-15px',
            right: '-8px'
        };

        return (
            <span 
                className={"status " + status}
                style={style}>
                {status}
            </span>
        )
    }else{
        return ;
    }
}

module.exports = statusItem;