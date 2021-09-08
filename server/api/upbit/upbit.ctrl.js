const request = require('sync-request');
const url = 'https://api.upbit.com/v1/ticker?markets=';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

/** 시세 조회
 * getPrice
 * @param ticker
 * @returns {ticker, price, date}
 */
const getPrice = function(req, res) {
    console.info("시세 조회 메서드 호출");
    const ticker = req.params.ticker;

    const response = request('GET', url.concat("KRW-").concat(ticker), options);

    /* 조회 결과값 */
    console.log('GET /upbit/%s 응답 메시지', ticker);
    console.log(JSON.parse(response.getBody().toString()));

    return res.json(JSON.parse(response.getBody().toString()));
}

module.exports = { getPrice };