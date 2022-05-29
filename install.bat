@ECHO OFF
ECHO Please standby while Discord RPC installs needed dependencies! The window will close itself upon completion...
ECHO DO NOT INTRUPT INSTALLATION!
ECHO =============  Discord-RPC  =============
call npm i discord-rpc
ECHO =============   CLI-Color   =============
call npm i cli-color
ECHO =============    Progress    =============
call npm i progress