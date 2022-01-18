const fs = require("fs");
module.exports.config = {
	name: "in4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "...", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Anh đã từng cố gắng",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("in4")==0 || (event.body.indexOf("info")==0 || (event.body.indexOf("Info")==0))) {
		var msg = {
				body: "không follow anh mà đòi xin in4 của anh😏😏😏😏😏😏",
				attachment: fs.createReadStream(__dirname + `/noprefix/in4.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}