// Modules to control application life and create native browser window
const {app, BrowserWindow} = require("electron");
const colors = require("colors");
const path = require("path");

// Command Line Argumnets Setup (CLI) ----------------------------
var yargs = require("yargs")(process.argv.slice(2));

var yargOps = yargs.usage("Breeze App - Vilhelm Hansson 2021")
.options
({
  "help": {
    description: "Get epic help",
    alias: "h",
  },
  "debug": {
    description: "Enable debug mode",
    boolean: true,
    alias: "d"
  }
}).argv;
// Command Line Argumnets Setup (CLI) ----------------------------


console.log(colors.rainbow("Starting Breeze..."));


function createWindow () 
{
  // Create the browser window.
  const mainWindow = new BrowserWindow(
    {
    width: 1200,
    height: 720,
    webPreferences: { nodeIntegration: true },
    frame: false,
    transparent: true,
    show: false
  })


  mainWindow.loadFile("index.html");
  mainWindow.once("ready-to-show", mainWindow.show);

  const wc = mainWindow.webContents;

  wc.on("context-menu", (e, params) => 
  {
    let selText = params.selectionText;
    wc.executeJavaScript(`alert("Jeff!")`);
  })

  if (yargOps.debug)
    mainWindow.webContents.openDevTools();
  if (yargOps.help)
    yargs.showHelp();

}


app.whenReady().then(() => 
{
  console.log(colors.cyan("App Ready!"));
  console.log(app.getPath("userData"));
  createWindow();
  
  app.on('activate', function () 
  {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })

})

app.on("before-quit", () =>
{
  console.log(colors.cyan("App quitting..."));
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})
