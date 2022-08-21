# #!/bin/bash
# #cd /home/kami/Documents/github/About-Kami/src && node index.js && cd ../
# while getopts u:a:f: flag
# do
#     case "${flag}" in
#         a) addFolder=${OPTARG};;
#         m) commitMsg=${OPTARG};;
#         f) pushFolder=${OPTARG};;
#     esac
# done
# if [ -z "$commitMsg" ] 
# then 
# 	echo "You did not set a commit message. Please re-run the command with a commit message and the -m flag. \nE.g. ./scripts.sh -m \"style: 💄 Update README.md\"" 
# fi
# if [ -z "$addFolder" ] && [ -z "$pushFolder" ];
# then 
# # Empty && Empty
# git add .
# git commit $commitMsg
# git push .
# fi

# if [[ ! -z "$addFolder" ]] 
# then 
# #Not empty Solution
#   if [ -z "$pushFolder" ] 
# 	then
#     git add $addFolder
# 		git commit $commitMsg
# 		git push
# 	else
# 		git add $addFolder
# 		git commit $commitMsg
# 		git push $pushFolder
# 	fi
# else
# #Empty Solution
#   if [ -z "$pushFolder" ] 
# 	then
#     git add .
# 		git commit $commitMsg
# 		git push
# 	else
# 		git add .
# 		git commit $commitMsg
# 		git push $pushFolder
# 	fi
# fi