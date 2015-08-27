# webpack-react-heroku-express
Boilerplate project for React/Express app using Webpack (and Sass) ready to deploy to Heroku.

###Setup:
First, clone the repo and prep it for becoming a new project by nuking the existing .git folder and re-git-init-ing:
```
git clone https://github.com/ianor/webpack-react-heroku-express.git <your-project-directory>
cd <your-project-directory>
rm -rf .git
git init
```

Next, adjust `package.json` to reflect your app, description, and author info, and install dependencies with:

`npm install`


Now you should be able to run development builds locally by running:

`npm start`

...and opening [http://localhost:9000](http://localhost:9000) in your browser.

  
Lastly, set up your app in Heroku using the instructions [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction), including adding your new Heroku remotes to git:

`git remote add heroku https://git.heroku.com/<YOUR APP NAME HERE>.git`

After which, if you've set everything up correctly, you should be able to push to Heroku and have your build deploy: 

`git push heroku master`

###That's it!

Let me know if you have any questions or suggestions, thanks!

