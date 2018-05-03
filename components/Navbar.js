import Link from 'next/link';
import {removeCookie} from '../lib/session';
import Router from 'next/router';
import Drawer from "material-ui/Drawer";
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from 'material-ui/IconButton';

export default class extends React.Component{
  state = {
    open: false
  }

  render(){
    return(
      <div>
        <div className="header">
          <IconButton color="inherit" onClick={ () => this.setState({open:true}) }>
            <MenuIcon />
          </IconButton>
          <h2>{ this.props.titulo }</h2>
          <a href="/" onClick={ () => {removeCookie("jwt"); Router.reload();} }>Salir</a>
        </div>
        <hr />
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

        <style jsx>{`
          .header {
            margin: 0;
            padding: 5px;
            color: white
            background: url('./static/bg-red.jpg');
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .header h2{
            margin: 0;
            padding: 5px;
            color: white
          }
          .header a{
            margin: 0;
            padding: 5px;
            color: white;
            text-decoration: none;
            font-size: 16px;
          }
        `}
        </style>
      </div>
    )
  }
}