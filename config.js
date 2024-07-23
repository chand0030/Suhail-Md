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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_22_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc1LFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnMVlJK2I2M1hyenpsRTdDVGIyam05UEMrN1o0dEpZNmVCbis5cWRHdFM0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5TGltOGNJRlRmS0tZOGVROFNobHFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzN2ExM2JiLTk3YWEtNGRmNS1iMmI1LWM0ZjFjYzJiZWMyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzQsXG4gICAgICAxMTEsXG4gICAgICAyNDQsXG4gICAgICAyMjMsXG4gICAgICA1MixcbiAgICAgIDEwMSxcbiAgICAgIDM5LFxuICAgICAgMTI4LFxuICAgICAgMTE2LFxuICAgICAgMzAsXG4gICAgICAyMjMsXG4gICAgICAxMjAsXG4gICAgICAyMDAsXG4gICAgICA5OCxcbiAgICAgIDEwMixcbiAgICAgIDExNyxcbiAgICAgIDEyNixcbiAgICAgIDczLFxuICAgICAgMzMsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDE2MSxcbiAgICAgIDI0OSxcbiAgICAgIDIzLFxuICAgICAgMTA4LFxuICAgICAgMTk3LFxuICAgICAgMTkxLFxuICAgICAgMjMwLFxuICAgICAgMjQsXG4gICAgICAxMzEsXG4gICAgICAxOTMsXG4gICAgICA5NCxcbiAgICAgIDE1NixcbiAgICAgIDEyMSxcbiAgICAgIDg3LFxuICAgICAgMTQ4LFxuICAgICAgMTQ5LFxuICAgICAgMjQ2LFxuICAgICAgMTU0LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQLzhocFlERVAvZi9MUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImN6T2FJTm9yTER1OUg1T1BYbzRGczF2eUkraGNNZnBkbFRTd2pMd1lEMVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0hDVzlkLzFLVllPZU5RZTNQWXV6cWRPOUxpeXpubmVGYWdlME85a25BejFKVDk3anczRTcwQlpvaktQcVh3Wk1HRXd1WmlUWCttTXBXV3puTEE3Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMTkyQ1IvTnFFSGt3L3JpbGQwbG9OQ25NSlB3MVhvY1ltNkUwaHFNRGZLbFBZaVVJeDlmdzk3SmtZd2dlb3BPL092blBJWHhJNnpQajc1dUhqampxaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0NzkyMjQyOTc6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NDUwMDEzMTM5MzY2NzoxNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ3OTIyNDI5NzoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcwODU0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVxclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXFyLmpzb24iOiAie1wia2V5RGF0YVwiOlwibzNZdloreWY1Qk55cGw1YnlSL1J5ODZEeTBRQzJBeTVBNkp5L1dMclFnbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTE1NTgwMTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcwODU1NDYxMVwifSIKfQ=="

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
