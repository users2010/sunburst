# Sunburst
This repository represent the Sunburst page what was separated of the SADes application (INSA).

### NOTE 
Is necessary a refactoring because only was moved from the SADes to this repository.

## Pre-Instalation
1. Install NODE and NPM. [Ubuntu and Debian](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/) / [Centos](https://github.com/nodesource/distributions).
2. Install GIT

## Instalation 
```
  git clone https://github.com/simsab-ufcg/sunburst.git
  cd sunburst
  sudo npm install
```

## Configure
Set the GEONODE and GEOSERVERS in the file 'src/js/sunburst-constants.js'

Example: 
```
const GEOSERVER_URL = 'http://0.0.0.0/geoserver'
const GEONODE_URL = 'http://0.0.0.0'
```

(Optional) Set the port to the server a file called ".env" in the root of project. Look the example in the file ".env.example".
```
# Default : 4200
PORT=80
```

## Run
```
  npm start &
```

## Stop
```
  npm stop
```
