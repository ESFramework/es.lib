
local function toggleNuiFrame(shouldShow)
    SendReactMessage('setVisible', shouldShow)
end
  
function TextUi(message, position, theme)
    SendNUIMessage({
        action = 'open_textui',
        message = message,
        theme = theme,
        position = position,
        transition = Config.textUiTransition,
	})
end

function hideTextUi()
    SendNUIMessage({
        action = 'hidetextui'
	})
end

RegisterNetEvent('es.lib:showTextUi', function(message, position, theme)
	TextUi(message, position, theme)
	toggleNuiFrame(true)
end)  

local function exportTextUi(message, position, theme)
	TriggerEvent('es.lib:showTextUi', message, position, theme)
end

RegisterNetEvent('es.lib:hideTextUi', function()
    print('trigger')
    hideTextUi()
end)  

exports("showTextUi", exportTextUi)

exports("hideTextUi", HideTextUi)

RegisterCommand('textui', function(message, position, theme) 
    exports['es.lib']:showTextUi('This is a text ui', 'right', 'test')
end)

RegisterCommand('textui2', function(message, position, theme) 
    exports['es.lib']:showTextUi('This is a text ui', 'left', 'test')
end)

RegisterCommand('hideText', function() 
    TriggerEvent('es.lib:hideTextUi')
end)