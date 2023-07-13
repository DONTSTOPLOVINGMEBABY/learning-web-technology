const fs = require('fs')

async function main () {
    console.log(__dirname)
    console.log(__filename)

    let time1Start = new Date().getMilliseconds()

    const readStream = fs.createReadStream('./data/S&P500_daily.csv')
    const writeStream = fs.createWriteStream('./data/exports/S&P500_cpy.csv')
    

    readStream.pipe(writeStream)


    let time1End = new Date().getMilliseconds()


    let time2Start = new Date().getMilliseconds()

    const file1 = fs.readFileSync('./data/S&P500_daily.csv')
    fs.writeFileSync('./data/exports/S&P500_cpy2.csv', file1)

    let time2End = new Date().getMilliseconds()

    console.log(time1End - time1Start)
    console.log(time2End - time2Start)


}

main()