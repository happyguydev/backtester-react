import * as realm from "realm-web";

const id = process.env.REACT_APP_REALM_APP_ID as string;

const app: Realm.App = new realm.App(id);

export default app;
