/** Mod lại module "viet.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "viet",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "...",
	description: "tiểu sử",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Tiểu sử :
Facebook: Anh Viet
Username: Việt đẹp trai
UID: 509698340
sinh : 03/10/2005
trường : THPT Phúc Thọ
quê: Tích Giang / Phúc Thọ /Hà Nội
Giới tính: nam
Mối quan hệ: ĐỘC THÂN
Sốđt: 0342804905
thông tin chút ít : hảo coder top1 thế giới chóp 1 không ai sánh bằng
fb https://www.facebook.com/khuatanhviet/`,
event.threadID, event.messageID);
