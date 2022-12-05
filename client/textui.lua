
local function toggleNuiFrame(shouldShow)
    SendReactMessage('setVisible', shouldShow)
end
  
function TextUi(message, position, colour)
    toggleNuiFrame(true)
    SendNUIMessage({
        action = 'open_textui',
        message = message,
        colour = colour,
        position = position,
        transition = Config.textUiTransition,
        theme = Config.textUiTheme,
	})
end

function hideTextUi()
    SendNUIMessage({
        action = 'hidetextui'
	})
end

exports("showTextUi", TextUi)

exports("hideTextUi", hideTextUi)

if Config.libDebug then
    RegisterCommand('textui', function(message, position, colour) 
        exports['es.lib']:showTextUi('This is a text ui', 'right', 'red')
    end)

    RegisterCommand('textui2', function(message, position, colour) 
        exports['es.lib']:showTextUi('This is a text ui', 'left', 'black')
    end)

    RegisterCommand('hideText', function() 
        exports['es.lib']:hideTextUi()
    end)
end


