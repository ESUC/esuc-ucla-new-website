# ESUC Website
The official Engineering Society of UCLA website, currently hosted in Heroku. 
Feel free to check it out [here](http://esuc-website.herokuapp.com/).

## Contributors:
2019-2020: Kevin Tang (webmaster)

2017-2018: Kyle Wong (webmaster)

2016-2017: Avi Kejariwal (webmaster), Kyle Wong (intern), Danny Nguyen (intern)

## Developing the website locally
When you clone the repo and attempt to run `node server.js` there may be 
errors telling you some environment variables are not found. The fix is to 
put and export the environment variables locally.

There are ENV (enviornment variables) that are not supposed to be released 
publicly, such as the API Keys, etc. However, you have access to such 
variables by clicking on the installed add-ons. Obtain those variables and 
put them in some shell script env.sh, containing lines in the form of: 
`export CLOUDINARY_APIKEY=xxxxxxxxxxxxxx`

Now run `node server.js` which should allow you to get the localhost version 
of the website. Happy hacking!

## Deploying to Heroku
Log in to the esuc.ucla.webmaster heroku account. The former webmaster will 
have had his or her credit card unlinked to the account. Notice that we use 
Cloudinary and Sendgrid add-ons in Heroku, but in the Overview tab of 
"Installed add-ons," you will not see those services. Thus, you must link 
your credit card to the webmaster heroku account for the duration of the 
position. It is completely safe and it just needs your card to register those 
services for free.

Go to the Deploy tab and follow the instructions accordingly.
