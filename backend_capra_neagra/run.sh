#!/bin/bash

bash setup.sh 2>/dev/null
docker-compose build
docker-compose up
