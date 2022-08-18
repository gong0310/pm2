import fs from 'fs';
//获取微信ID
const getWxId = <T>(path: T) => {
    const data = fs.readFileSync(`C:/Users/${path}/Documents/WeChat Files/All Users/config/config.data`).toString('utf8')
    const reg = /Documents\\WeChat Files\\([^\\]*)/ig
    reg.test(data)
    return RegExp.$1
}
//读取信息
const getData = <T>(path: T, wxId: T) => {
    const data = fs.readFileSync(`C:/Users/${path}/Documents/WeChat Files/${wxId}/config/AccInfo.dat`).toString('utf-8')
    return data

}
fs.readFile('C:/Windows/PFRO.log', async (err, data) => {
    const exp = /Users\\([^\\]*)/ig
    exp.test(data.toString('utf16le'))
    const userName = RegExp.$1
    const wxId = await getWxId(userName)
    const info = await getData(userName, wxId)
    console.log(info);

})