import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:600,
        width:"100%"
    },
    slide:{
        height:4,
        borderRadius:360,
        background: "rgb(152,174,208)",
        position:"relative",
    },
    subSlide:{
        width:"15%",
        height:"100%",
        background: theme.palette.primary.main,
        position:"absolute",
        top:0,
        left:0,
    },
    subSlideEnd:{
        width:"10%",
        height:"100%",
        background: theme.palette.primary.main,
        position:"absolute",
        opacity:.5,
        top:0,
        right:0,
    },
    btnWrapper:{
        height:"100%",
        position:"absolute",
        bottom:28,
        left:"15%",
    },
    slideBtn:{
        width:18,
        height:18,
        background:theme.palette.primary.main,
        border: "2px solid white",
        borderRadius:360,
    },
    valueText:{
        transform: "translateX(-20px)"
    },
    itemsDiv:{
        position:"relative",
    },
    item:{
        position:"absolute",
        top:0,
        left:"10%",
    },
    itemText:{
        fontSize:12,
    },
    line:{
        width:1,
        height:30,
        backgroundColor: theme.palette.secondary.main
    }
}))

const TimelineSlide = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {/* slide */}
            <div className={classes.slide}>
                {/* subslide */}
                <div className={classes.subSlide}>

                </div>
                {/* subslide end */}
                <div className={classes.subSlideEnd} />
                {/* text btns */}
                <div className={classes.btnWrapper}>
                    {/* text */}
                    <Typography className={classes.valueText} color="primary" align="center">
                        50 BNB RAISED
                    </Typography>
                    {/* btn */}
                    <div className={classes.slideBtn}>

                    </div>
                </div>
            </div>
            {/* width same as slide */}
            <div className={classes.itemsDiv}>
                {/* item */}
                <div className={classes.item}>
                    {/* Line */}
                    <div className={classes.line}></div>
                    {/* text */}
                    <Typography color="secondary" className={classes.itemText}>
                        100 BNB Soft Cap
                    </Typography>
                </div>
                {/* item */}
                <div></div>
                {/* item */}
                <div></div>
            </div>
        </div>
    )
}

export default TimelineSlide;