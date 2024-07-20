const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_43_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExLFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5TbzdwQTl4aXdRaUk3b0JSMmZvSTM2RU43V1JXVHBOVlJ2TWllMVdlWEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJrT0JuT0NwU0MtQUh5SE9GZ1k2a2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjlkODFmYzgtYjE3OC00MmFkLThkNGUtYmY0YjFjMzI2YTE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDkyLFxuICAgICAgNjIsXG4gICAgICA1MixcbiAgICAgIDIzMixcbiAgICAgIDE3NSxcbiAgICAgIDcxLFxuICAgICAgMTM1LFxuICAgICAgMTE1LFxuICAgICAgODUsXG4gICAgICAxNTMsXG4gICAgICAxNjEsXG4gICAgICAxMTYsXG4gICAgICA5MyxcbiAgICAgIDE1NyxcbiAgICAgIDIwMSxcbiAgICAgIDUwLFxuICAgICAgMjQsXG4gICAgICA5NCxcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAyMzAsXG4gICAgICA4OSxcbiAgICAgIDE1NCxcbiAgICAgIDI0MixcbiAgICAgIDk5LFxuICAgICAgMTgzLFxuICAgICAgMjQ4LFxuICAgICAgNDUsXG4gICAgICAxMTksXG4gICAgICA1OSxcbiAgICAgIDE0MixcbiAgICAgIDIwOCxcbiAgICAgIDE3LFxuICAgICAgOSxcbiAgICAgIDQyLFxuICAgICAgMjMwLFxuICAgICAgMTgzLFxuICAgICAgMzYsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFIyTURaSE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3MTIwOTIwNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCVIPCThqkg8J2Qk/CdkIcn2Lkg8J2Qg/CdkITwnZCC8J2QhPCdkI3wnZCTIPCdkIHwnZCO8J2QiPCdkIgg8JOGqiDLkM2iwrtcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wk4apIPCdkIjKiPCdkJcg8J2QgPCdkIfwnZCM8J2QhPCdkIMg8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiMTYxMTM5NjQwMDA4ODcwOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmlIaTRnRUVKV2E3N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxOHhONW9jNERJMGdXelZCaVVlMjNvQVR0M3hwS1g4NGxSNDFQT08xUFNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlI2aTdvLzJkMVlwcGwvbGVGWVVsaWZValRBOVVocmFORkV0cm9hMVI4TVVRQ3NjdU9FWER2LzhyZGR4dS9BVHVsVGRPTnhIOVg1cnZrdndtbC9sS0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjF4UEYwNkl2UUNLeXdaRXVyY3ZTMnA4ckh2M0pyZUJNS3FmTkg4cHp0ZDFUUUFkSFpuZmJNSmFYWFJhUGRGZ3RJVTBXWHJoWkF1Z0dJLzRPZytsaWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3MTIwOTIwNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0ODY2MTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
