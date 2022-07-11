#!/bin/bash
#java -jar netkorcompiler_teste.jar

while :; do
        if [[ -f  data.csv && -f inputMap.map ]]; then
            java -jar netkorcompiler_teste.jar
        fi;

        if [[ -f  data.csv ]]; then
           rm data.csv
           echo " data.csv is removed"
        fi;

        if [[ -f  inputMap.map ]]; then
           rm data.csv
           echo " inputMap.map is removed"
        fi;

        # echo "executing";
        sleep 1;
done
