#!/bin/bash


for var in "$@"
do
    if [ $var == $1 ] 
    then
        continue
    fi
    #split_string= readarray -d / $var
    echo $(readarray -d / $var)  
done

#split the string
#count the number of entries
#then cd .. the number of times there were slashes 
#in the path 
#doesn't work for use with ~

