const fs = require("fs");
module.exports.config = {
	name: "tkb",
    version: "0.0.1",
	hasPermssion: 0,
	credits: "...", 
	description: "em yêu anh việt vãi cả",
	commandCategory: "Anh Việt Đẹp Trai Vãi Cả",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	switch(event.body){
		case "1":
			api.sendMessage({
				body: "Thứ 2.\n📌Hóa (13h30-14h5)\n📌Anh (14h15-14h50)\n📌Toán (15h-15h35)\n📌Toán (15h45-16h20)\n📌Chào Cờ + Sinh Hoạt (16h30-17h5)", 
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({
				body: "Thứ 3.\n📌Công Nghệ (13h30-14h5)\n📌Địa (14h15-14h50)\n📌Văn (15h-15h35)\n📌Quốc Phòng (15h45-16h20)\n📌Hóa (16h30-17h5)", 
			}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({
				body: "Thứ 4.\n📌Công Nghệ (13h30-14h5)\n 📌Anh (14h15-14h50)\n📌Anh (15h-15h35)\n📌Lý (15h45-16h20)\n📌Sử (16h30-17h5)", 
			}, event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({
				body: "Thứ 5.\n📌Toán (13h30-14h5)\n📌Toán (14h15-14h50)\n📌Thể Dục (15h-15h35)\n📌Anh (15h45-16h20)\n📌Anh (16h30-17h5)",
			}, event.threadID, event.messageID); 
			break;
		case "5":
			api.sendMessage({
				body: "Thứ 6.\n📌Văn (13h30-14h5)\n📌Lý (14h15-14h50)\n📌Công Dân (15h-15h35)\n📌Sinh (15h45-16h20)", 
			}, event.threadID, event.messageID); 
			break;
		case "6":
			api.sendMessage({
				body: "Thứ 7.\n📌Tin (13h30-14h5)\n📌Văn (14h15-14h50)\n📌Văn (15h-15h35)\n📌Hóa (15h45-16h20)\n📌Thể Dục (16h30-17h5)", 
			}, event.threadID, event.messageID); 
			break;
		default:
			api.sendMessage({
				body: "Djtconmemaynguvailon nhập ngu thế mày ", 
				
			}, event.threadID, event.messageID); 
			return
	}
	 api.unsendMessage(handleReply.messageID);
}

module.exports.handleEvent = function({ api, event}) {
  	if (event.body.indexOf("-tkb")==0 || (event.body.indexOf("-Tkb")==0)) {
		api.sendMessage({
			body: "Thời Khóa Biểu\nThứ 2(nhập 1)\nThứ 3(nhập 2)\nThứ 4(nhập 3)\nThứ 5(nhập 4)\nThứ 6(nhập 5)\n Thứ 7(nhập 6)",
		}, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
	}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}