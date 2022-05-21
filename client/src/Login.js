import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import './Login.css';


const Login= () => {
return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          
        </Grid>
        <Grid item xs={3}>
          <div className="login_page_main">
          <div>
          <img className ="party" src={"https://i.pinimg.com/564x/d5/d3/a2/d5d3a2debe36dec850063d5150485295.jpg"} />
          </div>
          
              </div>
        </Grid>
        <Grid item xs={1}>
        <div className ="login_right">
                  <div>
                  <img className = "logo" src={'https://lh3.googleusercontent.com/sRrBGmDHDnR28LqMo7iDdUSxG-uXoFS7lyf0FwIAHV_8iR05kBvhE-JFoM5hlwLqtC2Z9TNrN3KLpIM3zykwKld69d-tR0EqiyEoAPY_XLlR6T7cHzd65YOgDGmfdIA5oqW5Bmc2w2s=w2400'} width="150px"/>
             <div>
                 <div className = "loginPage">
                 <input className  = "text" type ="text" placeholder= "email"/>
                 <input className = "password" type ="password" placeholder="password"/>
                 <button className = "button">Sign In</button>
                 </div>
             </div>
             <div className="no_account">
                 <div>Don't have an account? <span style={{"fontWeight":"bold", "color":"#0395F6"}}>Sign Up</span></div>
             </div>
              </div>
              </div>
             
        </Grid>
      </Grid>
      <Grid>

      </Grid>
    </Box>
  );
}

export default Login
