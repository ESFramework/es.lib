
local function toggleNuiFrame(shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

function Notify(title, message, time, type)
	SendNUIMessage({
		action = 'open_notify',
		title = title,
		type = type,
		message = message,
		time = time,
		theme = Config.notifyTheme,
		position = Config.notifyPostion,
		transition = Config.notifyTransition,
		progressbar = Config.hideProgressBar,
	})
end

RegisterNetEvent('es.lib:showNotify', function(title, message, time, type)
	Notify(title, message, time, type)
	toggleNuiFrame(true)
end)  


local function exportNotify(title, message, time, type)
	TriggerEvent('es.lib:showNotify', title, message, time, type)
end

exports("Notify", exportNotify)

if Config.libDebug then
	RegisterCommand('info', function() 
		TriggerEvent('es.lib:showNotify', "info", "this is a info", 3000, 'info')
	end)
	  
	RegisterCommand('success', function() 
		TriggerEvent('es.lib:showNotify',"success", "this is a success", 3000, 'success')
	end)
	--   
	RegisterCommand('warning', function() 
		TriggerEvent('es.lib:showNotify',"warning", "this is a warning", 3000, 'warning')
	end)
	
	RegisterCommand('error', function() 
		TriggerEvent('es.lib:showNotify',"error", "this is a error", 3000, 'error')
	end)

	RegisterCommand('default', function() 
		TriggerEvent('es.lib:showNotify',"default", "this is a default notification", 3000, 'default')
	end)

	RegisterCommand('WithoutTitle', function() 
		TriggerEvent('es.lib:showNotify', "none", "this is without title", 3000, 'error')
	end)
end