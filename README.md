# Multi-playing 3D Cubes: Three.js - Socket.io

This project is a practice of integrating `three.js` and `socket.io` 

Each cube is a player from each browser tab. Cubes are moved by arrow keys. All cubes are moved on a plain. 

## How to Run
### Install Dependencies

```bash
$ npm install
```
or
```bash
$ yarn
```

### Start Server
```bash
$ npm start
```
or
```bash
$ yarn start
```
The server will run on [http://localhost:3000](http://localhost:3000)

## How to Control
Open several tabs by URL [http://localhost:3000](http://localhost:3000)

When you open one tab, a cube will be appeared in the center of plain.

You can control the cube by keys - `Up`, `Down`, `Left`, `Right`, `A`, `W`, `S` and `D`.

You can see all cubes from other tabs in your current tab.

If you close a tab, a cube from the tab will be disappeared in other tabs.
