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

export default function RegisterModal(props) {

    const classes = useStyles();
    const { openRegister, setopenRegister } = props

    const handleClose = () => {
        setopenRegister(false);
    };

    const [usernameText, setusernameText] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setconfirmPassword] = useState('')

    return (
        <div>
            <Modal disableBackdropClick style={{
                border: 0
            }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openRegister}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openRegister} style={{
                    border: 0
                }}>
                    <div className={classes.paper}>
                        <div className={classes.closeBtn}>
                            <CancelIcon onClick={() => handleClose()} />
                        </div>
                        <div className={classes.paperBody}>

                            <form className={classes.form} noValidate>
                                <Typography component="h2" variant="h5">
                                    Register
                                </Typography>
                            </form>
                        </div>
                    </div>

                </Fade>
            </Modal >
        </div >
    )
}
