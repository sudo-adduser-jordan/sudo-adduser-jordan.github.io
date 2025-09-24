---
title: 'Eve OnLinux A Gamers Guide'
description: 'Running windows programs on any linux distribution.'
date: '2025-08-19'
---
___

## Eve OnLinux A Gamers Guide

Due to the reoccurring questions in the official Eve Online linux [*Discord*](https://discord.com/channels/940573867192221696/1096046348421312574) channel this guide has been created.

To update this guide please contribute or file an issue here: 

[*GitHub*](https://github.com/sudo-adduser-jordan/sudo-adduser-jordan.github.io)

Thanks.
___

### Overview

First make sure you hardware meets the specifications listed [*here*](https://support.eveonline.com/hc/en-us/articles/5885219196828-System-Requirements).

Then choose a *distribution* and a listed option. *It doesn't matter which distribution*, they all will work with the correct configurations.

The only difference is the chosen *package manager* and the *source* of the binaries.

Some are more difficult to configure than others.

*No, it does not matter what linux distribution you use*

The only way you will gain any performance from your hardware is by compiling the programs you are executing.

This can be done on *any distribution*, and using [*Gentoo's Portage Emerge*](https://wiki.gentoo.org/wiki/Portage) is highly recommended, as this will flag out many dependencies from the end binary. 

All binary served repositories are *Generic* and flag *Everything* into the end result.

The performance gains doing this could be minimal or non existent.

Also, all the following options run, on wine or a fork of wine maintained by another organization.

Changing these will result in a similar outcome as the binaries. 

*Just choose an option that works*. Some are more user friendly than others.

*Bottles* and *Steam* are the recommended user friendly options.

___

### Options
- *bottles* (highly recommended, can use the same modified wine as steam and other options)
- *steam*
- *lutris*
- *wine*

___

### Linux Notes
- any distribution works
- xdg portals is required
- compositors may affect performance 
- debian requires testing branch or backports for updated drivers and / or nvida drivers

___

## > Bottles

1. *Install Flatpak*
```sh
https://flatpak.org/setup/
```

2. *Install Bottles*
```sh
flatpak install flathub com.usebottles.bottles
```

3. *Install XDG Portals*

Possibly already installed, and only needed for external link functionality.

```sh
https://wiki.archlinux.org/title/XDG_Desktop_Portal
```
4. *Install Runner*

Install the *Kron4ek* runner.

`Picture`

7. *Create Bottle* 

Create a *custom* bottle with the *Kron4ek* runner.

`Picture`

8. *Click Install*

Click instal Eve Online from the *provided* program list in *bottles*.

`Picture`

9. Test Portals

Once you have logged in. Test portals by opening an external link.

`Picture`

___

## > Steam

1. Install Steam
```sh
https://store.steampowered.com/about/
```

2. Install Eve Online

`Picture`


___

## > Lutris

contribute here

```sh
https://github.com/sudo-adduser-jordan/sudo-adduser-jordan.github.io
```

```sh
https://lutris.net/
```

___

## > Wine

contribute here

```sh
https://github.com/sudo-adduser-jordan/sudo-adduser-jordan.github.io
```

```sh
https://www.winehq.org/
```

___

### Troubleshooting

*Update your system and related programs before continuing!*

This is likely the *cause* of your launcher an [*Electron*](https://www.electronjs.org/) application not launching.

Usually it is a related mesa / wine update on the *SYSTEM* and your in your chosen *OPTION*.

Next check bottles / wine for available *DXVK* , *VKD3D* , and *Runner* updates.

If the runner is up to date, there are other runners available, downgrading is a possible option, but changing runners is a more likely solution.

___

### Resources

```c
bottles docs
flathub setup 
flatpak
wine docs
arch xdg portals docs
gentoo xdg portals docs
```


