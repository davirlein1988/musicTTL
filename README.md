# musicTTL

### To tun this app you need to have installed node.js on you computer

`https://nodejs.org/en/download/`

you need to have yarn installed, node.js comes default with npm. 
To install yarn on linux you need to enable yarn repository

`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
Add the Yarn APT repository to your system’s software repository list
`echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
**install yarn**
```
sudo apt update
sudo apt install yarn
```
**You need to have react-native installed**
```
https://facebook.github.io/react-native/docs/getting-started
```
Download the repositoty and start the app
```
git clone git@github.com:davirlein1988/musicTTL.git
cd ~/musicTTL
yarn install
yarn start
```
In aonther terminal session start react native
Usefull tips you can run the app on you android or iphone phone by usb.

For android connect the cellphone in file trasfer mode and set USB debugging mode under developer options
add the device to your linux machine `lsusb` list the usb devices connected and shows something like 
```
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 005: ID 04ca:3010 Lite-On Technology Corp. 
Bus 001 Device 003: ID 04f2:b483 Chicony Electronics Co., Ltd 
Bus 001 Device 002: ID 04f3:0235 Elan Microelectronics Corp. 
Bus 001 Device 008: ID *12d1:107e* Huawei Technologies Co., Ltd. 
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```
after this run `echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="12d1", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules`
Finally start the app on your device `ract-native run-android`
