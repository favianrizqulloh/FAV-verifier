@echo off
color 0a
echo Easy Start - fav Verifier Discord bot script
echo 1. Install (run this once)
echo 2. Start the bot
echo Select one: 
set /p selection=
if %selection% == 1 goto install
if %selection% == 2 goto start
:install
echo Installing bot...
npm i
:start
echo Starting bot...
start powershell -noexit -command "node index.js"
