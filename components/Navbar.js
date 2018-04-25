import Link from 'next/link';
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default ()=>(
    <MuiThemeProvider>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
  </MuiThemeProvider>
)