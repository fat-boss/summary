const XLSX = require('xlsx')

//读取xlsx数据
const workbook = XLSX.readFile("./area.xlsx")

//sheet数组
const sheetNames = workbook.SheetNames;

//某一sheet
const worksheet = workbook.Sheets[sheetNames[0]]

const json = XLSX.utils.sheet_to_json(worksheet)

let iosProvices = [], iosCitys = [], iosCountry = []

json.forEach(function (per) {
  switch (per.LEV) {
    case 1:
      iosProvinces.push({
        id: per.AREA_NO + '',
        value: per.AREA_NAME,
        parentId: 0
      })
      break;
    case 2:
      iosCitys.push({
        id: per.AREA_NO + '',
        value: per.AREA_NAME,
        parentId: per.UPLEV
      })
      break;
    case 3:
      iosCountry.push({
        id: per.AREA_NO + '',
        value: per.AREA_NAME,
        parentId: per.UPLEV
      })
      break;
  }
})

const fs = require('fs')
fs.writeFileSync('./iosselect2.js',JSON.stringify({iosProvices,iosCitys,iosCountry},null,'  '),'utf-8');