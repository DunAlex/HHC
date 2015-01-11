#!/bin/sh
rm -R -f membertek-api
rm -R -f healthyhomecompany-ee
rm -R -f hhccore
rm -R -f healthyhomecompany-web
rm -R -f api
git clone  https://DunAlex:1hfgye%hegs1@github.com/WattsAssociates/membertek-api.git
git clone  https://DunAlex:1hfgye%hegs1@github.com/WattsAssociates/healthyhomecompany-ee.git
git clone  https://DunAlex:1hfgye%hegs1@github.com/WattsAssociates/hhccore.git
git clone  https://DunAlex:1hfgye%hegs1@github.com/WattsAssociates/healthyhomecompany-web.git
git clone  https://DunAlex:1hfgye%hegs1@github.com/WattsAssociates/api.git
cp setup/* healthyhomecompany-ee/system/expressionengine/config

