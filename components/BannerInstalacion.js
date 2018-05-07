import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import banner from "../lib/install";

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class SimpleSnackbar extends React.Component {
  state = {
    open: false,
  };

  componentDidMount() {
    let mostrarBanner = banner();
    if(mostrarBanner){
        this.setState({open:true})
    }
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  aceptar = (event) => {
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <img src="../static/logo-login.png" alt="logo" style={{width:"80px"}}/>
              <span id="message-id" style={{fontSize:"1.3rem"}}>Cementos Avellaneda</span>
            </div>
          }
          action={[
            <Link href="https://www.google.com.ar">
              <a style={{textDecoration:"none"}}>
                <Button key="undo" variant="raised" size="small" color="primary" onClick={this.aceptar}>
                  <span style={{padding:"2px"}}>CÓMO AGREGAR A LA PANTALLA PRINCIPAL</span>
                </Button>
              </a>
            </Link>
            ,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSnackbar);
