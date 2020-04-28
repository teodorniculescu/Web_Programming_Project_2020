#!/bin/bash

if [ ! -z "$@" ]
then
 mysql -h 127.0.0.1 -P 3306 -u root -p -D BikeShop < $@
else
 mysql -h 127.0.0.1 -P 3306 -u root -p -D BikeShop
fi

