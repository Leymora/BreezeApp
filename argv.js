//Command Line Arguments START --------------------------------------------------
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');

const optionDefinitions = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Display this usage guide.'
  },
  {
    name: 'debug',
    alias: 'd',
    type: Boolean,
    description: 'Enables debug mode'
  }
]
const options = commandLineArgs(optionDefinitions);

const usage = commandLineUsage([
  {
    header: 'Breeze App - By Vilhelm Hansson - 2021'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    content: 'Project home: {underline https://github.com/SentimentalWoosh/BreezeApp}'
  }
])


//Command Line Arguments END ----------------------------------------------------

console.log(colors.green('Running with arguments:', options));

  // Open the DevTools.
  if (options.debug)
  {
    mainWindow.webContents.openDevTools();
  }
  if (options.help)
  {
    console.log(usage);
  }