<h1 style="text-align:center;">Discord.js v14 Bot Template</h1>

## Features

* 🟦 Typescript
* 🔥 Slash commands (supports auto complete!)
* ✉️ Message commands
* 🕛 Cooldowns
* 🏴 Detailed Permissions
* 💪 Event & Command handlers
* 🍃 MongoDB Support

## Installation, Build and Run
1) Clone the repository then copy a file named `.env.example` to `.env` and fill it 

2) Install TypeScript, To install TypeScript, you can run the following command in your terminal, this will install the latest version of TypeScript globally on your computer. (You can skip this if you already have TypeScript installed)
```sh
  $ npm install -g typescript
```

3) Install nodemon for development purpose, to install nodemon, you can run the following command in your terminal, this will install the latest version of nodemon globally on your computer. (You can skip this if you already have nodemon installed)

```sh
  $ npm install -g nodemon
```

4) You can run the following command in your terminal to run the project in development mode, but before that, you must install the node modules:

```sh
  # Install the node modules
  $ npm install
```

```sh
  # Run the project in development mode
  $ npm run dev
```

5) If you want to run the project in production mode, you can build the project by running the following command:

`This command will also install the node modules if you haven't installed them.`
```sh
  $ npm run build
```

6) Once the build is complete it will generated a folder named `build` that contains compiled version of your ts code to js. You can run the following command in your terminal to run the project:
```sh
  $ npm start
```
