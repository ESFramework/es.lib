fx_version "cerulean"

description "Basic Lua libery with all advance feature"
author "ES Framework"
version '2.2.2'
repository 'https://github.com/ESFramework/es.lib'

lua54 'yes'

games {
  "gta5"
}

ui_page 'web/build/index.html'

shared_script "shared/config.lua"

client_script "client/**/*"
server_script "server/**/*"

files {
  'web/build/index.html',
  'web/build/**/*'
}
