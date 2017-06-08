# Angular 2 - Message Board

Based on lynda.com's "Building a simple Full-Stack App with Angular 2, Node.js, and Authentication"

## Backend

#### Technologies used
- Node.js
- Express
- BodyParser

#### Steps

- npm init
- npm install -S express body-parser
- vi server.js
- npm start

#### TODO
1. factor out message object (shared by both front- and back-end)
2. validation
3. log and cleanup console messages

## Front End

#### Technology Used
- Angular 2
- TypeScript

#### Initial Steps
1. clone quick start: <pre>git clone https://github.com/angular/quickstart.git frontend</pre>
2. delete the git reference: <pre>rm frontend/.git</pre>
3. delete dot files in frontend directory
4. add port entry in bs-config.json
5. add to git: <pre>git add frontend</pre>
6. verify frontend can be launched: <pre>cd frontend && npm install && npm start</pre>

#### Development

- current directory is in <i>frontend</i>
- install Angular2's material: <pre>npm install -S @angular/material</pre>
* update systemjs.config.js to map material and related bundles
- new files introduced:
  * new-message.component.ts: handle "my-new-message" directive
  * messages.component.ts: handle "my-messages" directive
  * http.service.ts: provide http service
- update app.module.js to include and declare newly introduced modules
- update app.component.ts to wire-up new directive


## Fix issues

- unable to import @angular/material:
  0. pre-condition: 
    * update index.html to include indigo-pink.css
    * update app.module.ts to import MaterialModule from @angular/material
  1. systemjs.config.js updated to define '@angular/material' mapping
  2. install '@angular/animations' (don't know why material depends on this), and update the mapping
  3. update typescript version from 2.1.0 to 2.2.0
- error of implicit variable ==> set noImplicitAny in tsconfig.json to false

- unable to make http calls - CORS denied
 1. symtom: http request is sent to the server (and seen is the network traffic), but exception is thrown
 2. update server.js to set CORS options
  
- TS2420 error during compilation
 1. root cause is TypeScript version must be updated to 2.2

- TS2307 error during compilation ==> animations is now required for browser
 1. install '@angular/animations' and update systemjs.config.js