#!/bin/bash
  
# turn on bash's job control
set -m

npm start &
node index.js &
node mysql.js &
node api.js &