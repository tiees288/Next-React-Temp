import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        // padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        width: '55%',
        backgroundColor: theme.palette.background.paper,
        border:0,
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: theme.spacing(2, 4, 3),
      },
}));

const LoginModal = (props) => {
    const classes = useStyles();
    const { openLogin, setopenLogin } = props

    console.log('Open : '+openLogin)

    // const handleOpen = () => {
    //     setopenLogin(true);
    // };

    const handleClose = () => {
        setopenLogin(false);
    };

    return (
        <div>
            <Modal style={{
                border:0
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
                     <h2>Login</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default LoginModal