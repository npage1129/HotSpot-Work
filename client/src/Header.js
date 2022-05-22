import React from 'react';
import './Header.css';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';




function Header(){
    
return (
    <div>
        <div className="navBar">
<Grid container>
    <Grid item xs={0}></Grid>
    <img className="logoNav" src={'https://lh3.googleusercontent.com/sRrBGmDHDnR28LqMo7iDdUSxG-uXoFS7lyf0FwIAHV_8iR05kBvhE-JFoM5hlwLqtC2Z9TNrN3KLpIM3zykwKld69d-tR0EqiyEoAPY_XLlR6T7cHzd65YOgDGmfdIA5oqW5Bmc2w2s=w2400'} alt={'hello'}/>
    <Grid item xs={4}>
    <input className= "searchBar" text="text" placeholder="Search"/>
    <button>Submit</button>
    </Grid>
    <Grid item xs={2}></Grid>

        <div className ="icons">
            <LogoutIcon className = "logout"/>
            <ChatBubbleOutlineIcon className ="messages" />
        <div className = "avatar">      
    <Avatar/> 
    
    
</div>

    </div>
</Grid>
</div>
</div>

)
}

export default Header;