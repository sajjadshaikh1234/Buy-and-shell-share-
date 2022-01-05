
import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { forgetdata , regis} from "../Action/Action"
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Forget() {

   const dispatch = useDispatch()
   const selector = useSelector((state) =>  state.forgetdata)
   console.log("forget", selector)
  const[email,setEmail]=useState('')
  const[newpassword,setNewpassword]=useState('')
  const[newconfirmPassword,setNewConfirmPassword]=useState('')

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("")
  const [errorMessage2, setErrorMessage2] = useState("")
  const [errorMessage3, setErrorMessage3] = useState("")
  const [errorMessage4, setErrorMessage4] = useState("")
const navigate = useNavigate();
// const dispatch = useDispatch()
// const selector = useSelector((state) => state.changevalue)
 

const changeHandler = (e) => {
  e.preventDefault();
  if(Valid()){
    console.log("valid")
    // dispatch(forgetdata({newpassword}))
    // dispatch(regis({email}))

    navigate("/login")
  }

}
const Valid = () => {
  let isValid = true
  const emailv =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordv = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;



// if(firstname.length <=4) {
//   setErrorMessage2({field2:'firstname',msg2:"not valid firstname"})  
//   isValid=false
// }
//  if(lastname.length <=4) {
//   setErrorMessage3({field3:'lastname',msg3:"not valid lastname"})
//   isValid=false
// }  
 if(!email.match(emailv)) {
  setErrorMessage({field:'email',msg:"not valid email"})
  isValid=false
} 
if(!newpassword.match(passwordv)) {
    setErrorMessage1({field1:'password',msg1:"not valid password"})
    isValid=false
  }
 
if(!newconfirmPassword) {
  setErrorMessage4({field4:"newconfirmpassword" , msg4:"not match password"})
  isValid=false
} 
if(newconfirmPassword !== newpassword ) {
  isValid=false
  setErrorMessage4({field4:"newconfirmpassword" , msg4:"not match password"})
  // navigate("/login")
//   navigate("forget")
  // alert("not match password")
} 
 
return isValid
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forget paasword
          </Typography>
          <Box component="form" noValidate onSubmit={changeHandler} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  error={errorMessage.field === "email"}
                  helperText={errorMessage.msg}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label=" new Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={newpassword}
                  onChange={(e)=>setNewpassword(e.target.value)}
                  error={errorMessage1.field1 === "password"}
                  helperText={errorMessage1.msg1}

                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label=" New Confirm Password"
                  type="password"
                  id="confirm_password"
                  autoComplete="new-password"
                  value={newconfirmPassword}
                  onChange={(e)=>setNewConfirmPassword(e.target.value)}
                  error={errorMessage4.field4 === "newconfirmpassword"}
                  helperText={errorMessage4.msg4}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             setPassword
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}