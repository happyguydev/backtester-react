import React from "react"
import "./App.css"
import { Login } from "./screens/Login"
import { Grid } from "@material-ui/core"
import TabPanel from "../src/components/TabPanel"
import Appbar from "../src/components/AppBar"
import ListPage from "../src/screens/ListPage"
import realm from "./services/realm";
import ComboForm from "./screens/ComboForm";

function App() {

  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }


  if (realm.currentUser?.isLoggedIn) {
    return (
      <Grid container>
        <Appbar {...{ handleChange, value }} />
        <TabPanel value={value} index={0}>
          <ComboForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListPage />
        </TabPanel>
        <TabPanel value={value} index={2}>
          empty item
        </TabPanel>
      </Grid>
    )
  }

  return <Login />
}

export default App
