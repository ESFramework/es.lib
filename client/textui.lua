
local function toggleNuiFrame(shouldShow)
    SendReactMessage('setVisible', shouldShow)
end
  
function TextUi(message, position, colour)
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

RegisterNetEvent('es.lib:showTextUi', function(message, position, colour)
	TextUi(message, position, colour)
	toggleNuiFrame(true)
end)  

local function exportTextUi(message, position, colour)
	TriggerEvent('es.lib:showTextUi', message, position, colour)
end

RegisterNetEvent('es.lib:hideTextUi', function()
    hideTextUi()
end)  

exports("showTextUi", exportTextUi)

exports("hideTextUi", hideTextUi)

if Config.libDebug then
    RegisterCommand('textui', function(message, position, colour) 
        exports['es.lib']:showTextUi('This is a text ui', 'right', 'red')
    end)

    RegisterCommand('textui2', function(message, position, colour) 
        exports['es.lib']:showTextUi('This is a text ui', 'left', 'white')
    end)

    RegisterCommand('hideText', function() 
        TriggerEvent('es.lib:hideTextUi')
    end)
end


