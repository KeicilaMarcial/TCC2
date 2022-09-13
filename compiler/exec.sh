#!/bin/bash
#java -jar netkorcompiler_teste.jar

while :; do
        if [[ -f  data.csv && -f inputMap.map ]]; then
            java -jar netkorcompiler_teste.jar
        fi;

        sleep 1;
done
