
local function toggleNuiFrame(shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

---@param title string
---@param icon any Icons
---@param message string Any Message you want to show
---@param time number value
---@param type success, info, warning, error, default

function Notify(title, icon, message, time, type)
	toggleNuiFrame(true)
	SendNUIMessage({
		action = 'open_notify',
		title = title,
		type = type,
		message = message,
		time = time,
		icon = icon,
		theme = Config.notifyTheme,
		position = Config.notifyPostion,
		transition = Config.notifyTransition,
		progressbar = Config.hideProgressBar,
		rtl = Config.rtl,
	})
end

exports("Notify", Notify)
RegisterNetEvent("es.lib:showNotify", Notify)

if Config.libDebug then
	RegisterCommand('info', function() 
		TriggerEvent('es.lib:showNotify', "info", "❤", "this is a info", 3000, 'info')
	end)
	  
	RegisterCommand('success', function() 
		TriggerEvent('es.lib:showNotify',"success", "❤","this is a success", 3000, 'success')
	end)
	--   
	RegisterCommand('warning', function() 
		TriggerEvent('es.lib:showNotify',"warning", "❤","this is a warning", 3000, 'warning')
	end)
	
	RegisterCommand('error', function() 
		TriggerEvent('es.lib:showNotify',"error", "❤","this is a error", 3000, 'error')
	end)

	RegisterCommand('default', function() 
		TriggerEvent('es.lib:showNotify',"default", "❤","this is a default notification", 3000, 'default')
	end)

	RegisterCommand('WithoutTitle', function() 
		TriggerEvent('es.lib:showNotify', "none", "noicon","this is without title", 3000, 'error')
	end)
end