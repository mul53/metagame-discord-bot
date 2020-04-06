### MetaGame Discord Bot
The bot is used to provide players with a good experience

### Setup
Run `npm install`
Run `cp .env.dev .env`

#### Get token
1. Head over to Discord’s [developer page](https://discordapp.com/developers/applications) and click on Create an application.
2. Fill the `NAME` field and choose an avatar if you want, then click on Save changes. You should see a feedback message telling “All your edits have been carefully recorded.”
3. On the left panel, click on Bot, then click on ADD BOT.
4. A popup should appear, click on Yes. Depending on the name of your app, you can see an error message telling you “Too many users have this username, please try another.” In that case, choose another name for your app.
5. After that, you should see a success message telling you “A wild bot has appeared!”.
6. Below TOKEN, click on COPY and paste it in `.env` file as a param to `BOT_TOKEN`. Voilà! You are now the happy owner of a Discord bot token.

#### Add bot to server
We need to add a bot to the server but to do that we need atleast one server. If you haven't yet created a server, please create one:
1. After creating the server, go to the developer portal
2. Select your bot
3. Click on OAuth2 in the left panel, under scopes select `Bot` then under bot permissions select `Administrator` then click on Copy.
3. Open a new tab and paste in the URL the one you’ve just copied. Select your server and click on Authorize.
4. Add a bot to a server
5. Go in the Discord app and check for your bot in the list of users.

#### Add welcome message
Add your welcome message to the file `utils/welcomeMsg.js` place the message between the quotes.

#### Run
Run `npm run start` to start the bot