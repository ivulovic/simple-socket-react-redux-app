
import {defineRecord, recordReceived} from "../store/actions/record.actions";

const TradingPairs = {
  BID: 0,
  BID_SIZE: 1,
  ASK: 2,
  ASK_SIZE: 3,
  DAILY_CHANGE: 4,
  DAILY_CHANGE_PERC: 5,
  LAST_PRICE: 6,
  VOLUME: 7,
  HIGH: 8,
  LOW: 9
};

const setupSocket = (dispatch) => {
  let url = "wss://api.bitfinex.com/ws/2/tickers";
  const socket = new WebSocket(url);
  let symbols = ['tBTCUSD', 'tBTCEUR', 'tETHUSD', 'tETHEUR', 'tEOSUSD'];

  socket.onopen = () => {
    for(let symbol of symbols){
      socket.send(JSON.stringify({ event: 'subscribe', channel: 'ticker', symbol: symbol}))
    }
  };

  socket.onmessage = (event) => {
    let data = JSON.parse(event.data);
    if(data.event === 'subscribed'){
      dispatch(defineRecord(data));
    }
    if(!data.event){
      if(data[1]!=='hb'){
        let value = data[1];
        let filtered = [value[TradingPairs.DAILY_CHANGE], value[TradingPairs.VOLUME], value[TradingPairs.LAST_PRICE]];
        dispatch(recordReceived({id: data[0], value:filtered}));
      }
    }
  };

  return socket;
};

export default setupSocket;
