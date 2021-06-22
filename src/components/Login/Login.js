import React from 'react';
import {Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login =()=>{
    const paperStyle={padding: 20, height: '70vh', width: 280, margin: '20px auto' };
    const btnStyle={margin: '10px 0'}
    const avatarStyle={background: '#303F9F'}
    return(
        <Grid>
                <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>

                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h1>Sign In</h1>
                </Grid>
                    <TextField label="Username" placeholder="Enter Username" type="text" fullWidth/>
                    <TextField label="Password" type="password" placeholder="Enter Password" fullWidth/>
                    <FormControlLabel
                    control={
              <Checkbox
                    name="checkedB"
                    color="primary"
                    />}
                    label='Remember me'
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={btnStyle}>
                    SIGN IN
                    </Button>
                    <Link href="#" >
                    Forgot Password ?
                    </Link>
                    <Typography>
                        Do you have an account ?
                        <Link>
                        Sign Up
                        </Link>
                    </Typography>
                </Paper>
        </Grid>
    )
}

export default Login;