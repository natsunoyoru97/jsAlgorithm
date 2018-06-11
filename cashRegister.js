function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let arr = [];
  let currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  let status = false;
  let origin = cid;

  for (let i = cid.length - 1; i >= 0; i--) {
    if (change === cid[i][1]) {
          status = true;
    }
    if (change > currency[i][1]) {
        if (Math.floor(change / currency[i][1]) > 0) {
          if (currency[i][1] * Math.floor(change / currency[i][1]) > cid[i][1]) {
            arr.push(cid[i]);
            change = change - cid[i][1];
          } else {
            let multiply = currency[i][1] * Math.floor(change / currency[i][1]);
            arr.push([cid[i][0], multiply]);
            change = Math.round(change % currency[i][1] * 100) / 100;
          }
        }
    }
  }
  if (status) {
    return {status: "CLOSED", change: origin};
  }
  if (change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  return {status: "OPEN", change: arr};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);