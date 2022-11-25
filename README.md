
# WIP

This is a simple Library for FiveM works with esx and qbus and standalone.

![](https://user-images.githubusercontent.com/5574267/130804494-a9d2d69c-f170-4576-b2e1-0bb7f13dd92d.gif)


### Features

- This lib comes with highly config advance notification, text ui etc.
- idle: 0.00ms, inuse: 0.01ms.

### WIP

- [x]  Modern Notification System
- [x]  Text ui
- [ ]  Modern Progressbar
- [ ]  Context Menu


## Usage/Examples

### Notification

#### Notify Type
* success
* info
* warning
* error
* default
#### Event Usage
```Event Usage
 TriggerEvent('es.lib:showNotify', "Title", "Icon", "Message", Time, 'type')
```

###### Event Usage without Title
```Event Usage
 TriggerEvent('es.lib:showNotify', "none", "noicon", "Message", Time, 'type')
```

#### Export Usage
```Export Usage
 exports['es.lib']:Notify("Title","Icon", "Message", Time, 'type')
```

###### Export Usage without Title
```Export Usage
 exports['es.lib']:Notify("none", "noicon", "Message", Time, 'type')
```

### Text UI 
#### Text UI  Colour

###### White Theme

* lightblue
* darkblue
* red
* black
* green
* yellow
* orange
* cyan


###### Dark Theme

* lightblue
* darkblue
* red
* white
* green
* yellow
* orange
* cyan

```Show text ui 
exports['es.lib']:showTextUi("message", "position", "colour")
```
```Hide text ui 
exports['es.lib']:hideTextUi()
```
### 🔗 Link
For any support & Snippet join
[Discord](https://discord.gg/ZaTv6rfJ7F)
