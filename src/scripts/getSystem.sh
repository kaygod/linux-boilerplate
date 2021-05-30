#!/bin/bash

echo -e "hostname:\t `hostname`"
echo -e "OScore:\t\t `uname -a`"
echo -e "CPUInfo:\t  `grep "model name" /proc/cpuinfo | awk -F: '{print $2}' `"
echo -e "CPUMHz:\t\t `grep "MHz" /proc/cpuinfo | awk -F: '{print $2}' `"
echo -e "MemTotal:\t `free -m | awk '$1=="Mem:" {print $2}' ` "
