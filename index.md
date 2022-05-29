# Custom-Discord-Presence
This is ment to be an easy way to have a cool custom Discord Rich Presence. All you need to do is make sure that you have Node.JS and Discord installed and you should be good to go!

(***Note***, the bat files are made/configured for the Windows Command Line! Might fix that in future updates.)

## Installation
Before we can start having an awesome status we first must make sure that we can *run* the code. To do this we need to install [Node.js](https://nodejs.org/en/download/) and make sure that we also have [Discord](https://discord.com/) running as the code *will not execute* without either of these.

### Installing [Node.js](https://nodejs.org/en/download/)
1. Go to [Node.js](https://nodejs.org/en/download/) by clicking the blue text or by going to https://nodejs.org/en/download/.
2. Select LTS (this is recommended as it is more stable), select your OS Mac/Apple (to install on Linux just type `sudo apt install nodejs`).
3. Once this has been completed all you have to do is run the installer, which is pretty straight forward.
4. To make sure that Node.js and NPM installed correctly, open up your terminal and type in ``node -v`` and ``npm -v``. If they installed correctly they will return a version number.

### Installing and Running the Custom Discord Presence Code
Now that we've made sure that the code can run we must now, install the code! There's two ways of doing this: manually, which means a lot of terminal commands, or automatically, using the .bat files I have provided for you!

#### Downloading and Installing

To download the code you can either:
> Click the ``Code`` dropdown button, then select ``Download ZIP`` and put it to whichever directory you'd like to store it in

**OR**

> Open up your terminal and type ``git clone https://github.com/DysphoricGreens/Custom-Discord-Presence`` if you have Git installed.

##### Installing Packages Automatically
1. Open up the folder and locate ``install.bat``.
2. Run the batch file and wait for the packages to install.
3. The terminal window should close automatically upon completion.

##### Installing Packages Manually
1. Open up the folder and right-click.
2. Select the ``Open in Terminal`` option.
3. Input the following commands:
   1. ``npm i discord-rpc``
   2. ``npm i cli-color``
   3. ``npm i progress``

Once everything is downloaded and has been installed we can go onto the next step!

#### Setup and Running
We have one more bit of setup we have to do before we can start running our code, and that is creating our presence!

In order to complete this task you must:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click the purple, ``New Application`` button and give your app a name! This name will appear as the text everyone sees on your profile.
3. Copy the Application ID and paste it into notepad for later.
4. Upload an App Icon if you want *this will not be visible*.
5. Head on over to the ``Rich Presence`` dropdown and make sure you're on Art Assets.
   1. Here you can upload images that you would like to use, make sure you give them a short easy to remember names.
   2. They can be either pngs or jpgs with a recommended size of 512x512. It takes about 1 to 5 minutes for these to pop up as Discord needs to verify that these images follow their ToS.
6. Once your images have loaded, open the ``config.json`` file.
7. In the ``ClientID`` section, paste your App's ID that we saved earlier.
8. In the ``State`` and ``Details`` section, you can write something short, max a short sentence per section.
9. In the ``LargeImage`` and ``SmallImage`` sections, you can paste in the ids you gave your images. They can be used in either slot.
10. If you want text to popup on hover of either of the images you can put in a small sentence in the ``LargeImageText`` and ``SmallImageText``.
11. If you want to link a social site or your website you put the urls in ``Url1`` and ``Url2`` and label them by putting text in the ``Button1`` and ``Button2`` sections.

By the end of all of this you should have a ``config.json`` file that looks something like this:

```js
{
    "ClientID": "980547383421181992",
    "State": "Current Project",
    "Details": "Custom-Discord-Presence",
    "LargeImage": "Github", 
    "LargeImageText": "Github go brrrr",
    "SmallImage": "DG",
    "SmallImageText": "Sweet Logo Man",
    "Button1": "GitHub Page",
    "Url1": "https://github.com/DysphoricGreens",
    "Button2": "Repository",
    "Url2": "https://github.com/DysphoricGreens/Custom-Discord-Presence"
}
```
This is just an example!

I use mine to display which projects I'm working on and when, though it is usually easier to just use VSCode's DRPC addon for this. But having the ability to make a fully custom one is admittedly much more gratifying!

IMAGE\VIDEO TUTORIAL COMING SOON
