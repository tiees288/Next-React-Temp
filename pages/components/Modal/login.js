import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CancelIcon from '@material-ui/icons/Cancel';

import { CircularProgress, TextField, Button, Link, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        // padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '50%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        position: 'relative'
    },
    paperBody: {
        border: 0,
        padding: theme.spacing(2, 4, 3)
    },
    closeBtn: {
        // border: '1px solid',
        backgroundColor: 'white',
        borderRadius: 150,
        height: 24,
        position: 'absolute',
        top: -8,
        right: -8,
        cursor: 'pointer'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        margin: 'auto',
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        background: 'black',
        color: 'white',
        margin: theme.spacing(1, 0, 2),
        '&:hover': {
            background: "#545454",
        }
    },
    CircularProgress: {
        marrgin: 'auto'
    }

}));



const LoginModal = (props) => {
    const classes = useStyles();
    const { openLogin, setopenLogin } = props

    const [loginText, setloginText] = useState({
        text: '',
        errorText: ''
    })
    const [passwordText, setpasswordText] = useState('')
    const [clickLogin, setclickLogin] = useState(false)


    const handleClose = () => {
        setopenLogin(false);
    };

    const handleLogin = async (e, username, password) => {
        e.preventDefault()
        setclickLogin(true)
        // console.log(clickLogin)

        if (username === '' || password === '') {
            console.log('Invalid Login.')
            setclickLogin(false)
        } else {
            let payload = {
                username: username,
                password: password
            }
            console.log(payload)
        }

        // Post Login Data


    }

    return (
        <div>
            <Modal disableBackdropClick style={{
                border: 0
            }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openLogin}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openLogin} style={{
                    border: 0
                }}>
                    <div className={classes.paper}>
                        <div className={classes.closeBtn}>
                            <CancelIcon onClick={() => handleClose()} />
                        </div>
                        <div className={classes.paperBody}>

                            <form className={classes.form} noValidate>
                                <Typography component="h2" variant="h5">
                                    Login
                            </Typography>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Username"
                                    label="Username"
                                    // error='Error'
                                    helperText={loginText.errorText}
                                    autoComplete='off'
                                    name="Username"
                                    autoFocus
                                    disabled={clickLogin === true ? true : false}
                                    onChange={(e) => {
                                        setloginText(
                                            {
                                                text: e.target.value
                                            }
                                        )
                                    }
                                    }

                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        setpasswordText(e.target.value)
                                    }}
                                    disabled={clickLogin === true ? true : false}
                                />
                                {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"

                                    className={classes.submit}
                                    onClick={(e) => {
                                        handleLogin(e, loginText.text, passwordText)
                                    }}>
                                    {
                                        clickLogin === true ? <div style={{
                                            marginTop: '5px'
                                        }}>
                                            <CircularProgress size={16} className={classes.CircularProgress} color="inherit" />
                                            <span style={{
                                                display: 'inline-block',
                                                width: '10vw',
                                                // marginTop:0
                                            }}>Loading...</span>
                                        </div> :
                                            <span>Sign in</span>

                                    }
                                </Button>
                                {
                                    //      (
                                    //         <Button
                                    //             type="submit"
                                    //             fullWidth
                                    //             variant="contained"
                                    //             color="primary"
                                    //             className={classes.submit}
                                    //         >
                                    //             <CircularProgress pr={20} size={20} className={classes.CircularProgress} color="inherit" />
                                    //             <span> Signing in..</span>
                                    //         </Button>
                                    //     )
                                }

                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        Don't have an account?
                                        <Link href="#" variant="body2">
                                            {" Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                    {/* <Box mt={8}>
                            <Copyright />
                        </Box> */}
                </Fade>
            </Modal >
        </div >
    );
}


export default LoginModal