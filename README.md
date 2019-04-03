# Sunburst
This page was separated of the SADes aplication (INSA).

### NOTE 
Is necessary a refactoring because only was moved from the SADes to this repository.

## Pre-Instalation
1 - Install NODE
2 - Install NPM

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
const GEOSERVER_URL = 'http://{ip}/geoserver/ows/'
const GEONODE_URL = 'http://{ip}'
```

Set the port to the serser in the file ".env" in the root of project. Look the example in the file ".env.example"
```
PORT=80
```

## Run
```
  npm start
```