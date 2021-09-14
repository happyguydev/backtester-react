import React, {useState} from "react";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css"
import {Button,Grid, Paper, TextField} from "@material-ui/core";
import * as Realm from "realm-web";
import realm from "../services/realm";

async function loginEmailPassword(email: string, password: string) {
    // Create an anonymous credential
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
        // Authenticate the user
        const user = await realm.logIn(credentials);
        window.location.reload();
        // `App.currentUser` updates to match the logged in user
        // assert(user.id === app.currentUser.id)
        return user
    } catch(err) {
        console.error("Failed to log in", err);
    }
}


const Login: React.FC = () => {

    const [email,setEmail] = useState<string>("");
    const [pass,setPass] = useState<string>("");


    return (
      <Paper>
        <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username" onChange={e => setEmail(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={e => setPass(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={() => loginEmailPassword(email,pass)}> Login </Button>
          </Grid>
        </Grid>
      </Paper>
  );
};

export {Login};
