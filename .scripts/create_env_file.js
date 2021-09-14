const fs = require("fs");
const path = require("path");

const envFile = `
REACT_APP_REALM_APP_ID=application-0-xqpmh
REACT_APP_REALM_GRAPHQL_URL=https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-xqpmh/graphql
`;

fs.writeFileSync(path.join(process.cwd(),".env"),envFile);
