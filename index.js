// ! Required Dependencies
const clc = require('cli-color');
const ProgressBar = require('progress');
const rpc = require("discord-rpc");
const drpc = new rpc.Client({
    transport: 'ipc'
});

// ! Conf Setup File
const config = require('./config.json');

// ! Discord RPC Login
drpc.login({
    clientId: config.ClientID
}).catch(console.error);

// ! DRPC Ready
drpc.on('ready', () => {
    // ! Loading DRPC
    var bar = new ProgressBar(`${clc.bold.italic.green('Connecting')} - {:bar}`, {
        total: 20,
        complete: `${clc.xterm(4)('█')}`,
        incomplete: `${clc.bgXterm(12)('*')}`
    });
    var timer = setInterval(function () {
        bar.tick()
        // ! DRPC Loading Completed
        if (bar.complete) {
            // ! Important Info
            console.log(`[${clc.green('*')}] Your custom ${clc.xterm(69)('Discord Rich Presence')} is now up and being displayed on your profile!`)
            console.log(`${clc.bold.underline.italic.red.inverse('IMPORTANT:')} in order to keep the presence running correctly, you ${clc.bold.underline('MUST')} keep this terminal ${clc.bold.underline('OPEN')}!\nIf you need to keep the window out of site all you have to do is minimize this window, or put it to a new desktop by pressing ${clc.bold('Win + Tab')} and drag down to ${clc.bold('New Desktop')} or click ${clc.bold('New Desktop')} and drag the window to it.`)
            console.log(`To shut down the presence at any time you can either close the window or press ${clc.bold('Ctrl + C')}.`)
            clearInterval(timer);

            // ! DRPC Setup
            drpc.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: config.Details,
                    state: config.State,
                    assets: {
                        large_image: config.LargeImage,
                        large_text: config.LargeImageText,
                        small_image: config.SmallImage,
                        small_text: config.SmallImageText,
                    },
                    buttons: [{
                            label: config.Button1,
                            url: config.Url1
                        },
                        {
                            label: config.Button2,
                            url: config.Url2
                        },
                    ]
                }
            })
        }
    }, 100);
})