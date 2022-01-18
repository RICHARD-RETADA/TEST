module.exports.config = {
	name: "weather",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Xem thông tin thời tiết tại khu vực",
	commandCategory: "other",
	usages: "[Location]",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args, getText }) => {
	const request = global.nodemodule["request"];
	const moment = global.nodemodule["moment-timezone"];
	const axios = global.nodemodule["axios"]
	const { threadID, messageID } = event
	const lang = global.config.language;
	const API = "9980b155650ac35dfef6fc7b1f3f82a5"
	if (args.length == 0 || !args) return api.sendMessage('Bạn chưa nhập thành phố', threadID, messageID)
	const city = args.join(" ")
	const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${API}&units=metric&lang=${lang}`)
	const icon = data.weather[0].icon
	const description = data.weather[0].description
	const main_temp = data.main.temp
	const feels_like = data.main.feels_like
	const temp_min = data.main.temp_min
	const temp_max = data.main.temp_max
	const pressure = data.main.pressure
	const humidity = data.main.humidity
	const visibility = data.visibility
	const wind = data.wind.speed
	const wind1 = data.wind.deg
	const wind2 = data.wind.gust
	const name = data.name
	const sunrise_date = moment.unix(data.sys.sunrise).tz("Asia/Ho_Chi_Minh");
	const sunset_date = moment.unix(data.sys.sunset).tz("Asia/Ho_Chi_Minh")
//Tự thêm các biến ở trên xuống dưới vì nó dài lên t lười
	return api.sendMessage({
		body: `Bình minh vào: ${sunrise_date.format('HH:mm:ss')} ` +
			`\nHoàng hôn vào: ${sunset_date.format('HH:mm:ss')}`
	}, threadID, messageID)
}
