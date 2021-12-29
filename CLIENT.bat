@echo off
color 0a
echo v13 Discord Bot
echo 1. Start
echo 2. Install
echo Select one: 
set /p selection=
if %selection% == 1 goto start
if %selection% == 2 goto install
:start
echo Starting bot...
start powershell -noexit -command "node main.js"
:install
echo Installing bot...
npm i
