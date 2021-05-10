import React from 'react';
import { makeStyles } from '@material-ui/core';
import TitleHeading from './../../Components/TitleHeading/TitleHeading';

const useStyles = makeStyles((theme)=>({
    root:{
    
    }
}))

const Business = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <TitleHeading heading="BUSINESS MODEL" background="WHAT AND HOW"/>
        </div>
    )
}

export default Business;