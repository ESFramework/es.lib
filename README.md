
# WIP

This is a simple Library for FiveM works with esx and qbus and standalone.

![](https://user-images.githubusercontent.com/5574267/130804494-a9d2d69c-f170-4576-b2e1-0bb7f13dd92d.gif)


### Features

- This lib comes with highly config advance notification, text ui etc.
- idle: 0.00ms, inuse: 0.00ms.

### WIP

- [x]  Modern Notification System
- [x]  Text ui
- [ ]  Modern Progressbar
- [ ]  Context Menu


## Usage/Examples

### Notification

#### Event Usage
```Event Usage
 TriggerEvent('es.lib:showNotify', "Title", "Message", Time, 'type')
```

###### Event Usage without Title
```Event Usage
 TriggerEvent('es.lib:showNotify', "none", "Message", Time, 'type')
```

#### Export Usage
```Export Usage
 exports['es.lib']:Notify("Title", "Message", Time, 'type')
```

###### Export Usage without Title
```Export Usage
 exports['es.lib']:Notify("none", "Message", Time, 'type')
```

### Text UI WIP

```Show text ui 
exports['es.lib']:showTextUi()
```
```Hide text ui 
exports['es.lib']:HideTextUi()
```

### 🔗 Link

For any support join
[Discord](https://discord.gg/ZaTv6rfJ7F)
