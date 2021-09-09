#!/usr/bin/env node
const axios = require('axios');
const fs = require('fs');
const { Readable} = require('stream');
const args = process.argv.slice(2);
const method = args[0];
const save = args[3] === '--save' ? true : false;
const url = args[1];
const validMethods = new Set(['get', 'post', 'put', 'delete']);

if(args.length < 2){
 console.log('Missing argument: fetch <method> <url>');
 process.exit(1);
}

if(!(validMethods.has(method))){
 console.log(`Invalid method: ${method} is not a valid method`);
 process.exit(1);
}

if(!save){
 axios({
  method : method,
  url : url
 })
  .then((res) => {
   console.log(res.data);
  })
  .catch((err) => console.error('Something went wrong: Please check if you have provided a valid url'));
}

