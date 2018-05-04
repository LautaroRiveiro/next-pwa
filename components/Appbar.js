import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Drawer from "material-ui/Drawer";
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component{

  state = {
      open: false
    }

  render(){
    const { classes, titulo, boton, botonIcono, onclick } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={ () => this.setState({open:true}) }>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              { titulo }
            </Typography>
            <Button color="inherit" onClick={ () => onclick() }>{ boton }</Button>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.open} onClose={ () => this.setState({open:false}) }>
          <div>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </div>
        </Drawer>
      </div>
    )
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);