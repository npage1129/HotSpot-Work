import React,{useState, useEffect} from 'react';
import './Header.css';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {useNavigate} from 'react-router'



function Header({user, setUser, handleLogout, setIsAuthenticated, isAuthenticated}){
const [avatar, setAvatar] = useState([])
const [show, setShow] = useState([{}])
const [update, setUpdate] = useState([])


const navigate = useNavigate();

function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
}
function handleDelete(){
    const id = user.id 
    const url = `http://localhost:3000/users/${id}}`
    fetch(url,{
        method:'DELETE',
    })
    handleLogout();
    navigate('/')
}

// useEffect(()=> {
//     fetch(`http://localhost:3000/users`)
//         .then((resp) => resp.json())
//         .then((data) => setUpdate(()=>data))
// },[])


console.log("your doing great!")
return (
    <div>
        <div className="navBar">
      
<Grid container>
    <Grid item xs={0}></Grid>
    <img className="logoNav" src={'https://lh3.googleusercontent.com/sRrBGmDHDnR28LqMo7iDdUSxG-uXoFS7lyf0FwIAHV_8iR05kBvhE-JFoM5hlwLqtC2Z9TNrN3KLpIM3zykwKld69d-tR0EqiyEoAPY_XLlR6T7cHzd65YOgDGmfdIA5oqW5Bmc2w2s=w2400'} alt={'hello'}/>
    <Grid item xs={4}>
    <input className= "searchBar" text="text" placeholder="Search" />
    <button>Submit</button>
    </Grid>
    <Grid item xs={2}></Grid>
    

        <div className ="icons">
        
            <LogoutIcon className = "logout" onClick= {() => handleLogout(navigate('/'))} />
            {/* <ChatBubbleOutlineIcon className ="messages" /> */}
            <PersonRemoveIcon onClick={handleDelete} className="messages"/>
        <div className = "avatar">  
        
        {user?  
     (<Avatar src={user.image}/>):(<Avatar/>)
    
    
     } 

</div>
    </div>
</Grid>


</div>
</div>

)
}

export default Header;