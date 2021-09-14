### Required
MongoDb Atlas Account

### How to run - rough guide

Install `npm i`

Generate .env - `npm run setup`

Create free cluster in MongoDb Atlas

Create Database

Create collection with data from `.mongo`

Create Realm App and assign to MongoDb Atlas Cluster

Enable Realm users if not enabled

Generate Realm Schema

Setup up Realm Rules to allow data access in app

Save Realm changes

Copy Realm Id > .env

Copy GraphQL Url > .env

Start app - `npm start`

Run `npm run graphql:apollo-gen` to generate GraphQL typescript interfaces

### Before you commit

Build locally to confirm no warnings - `npm run build`

Commit using conventional commits - `npm run commit`

