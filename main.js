var wait = global.nodemodule['wait-for-stuff'];

var chathook = function(type, data) {
    var threadID,content;
    switch (data.msgdata.type) {
		case "message":
		case "message_reply":
			var [err, threadInfo] = wait.for.function(data.facebookapi.getThreadInfo, data.msgdata.threadID);
			content = data.msgdata.body;
			if (data.msgdata.senderID == data.facebookapi.getCurrentUserID()) return false;
			break;
		default:
			return false;
	}
	var prf = content.toLocaleLowerCase();
	if(prf=="prefix"){
	    data.return({
			handler: "internal",
			data: `Đây là  Bot, hoạt động dưới Prefix "${global.config.commandPrefix}"\n Sử dụng lệnh "${global.config.commandPrefix}help [trang số]" để xem các lệnh có sẵn.`
		})
	}
}

module.exports = {
	chathook
}