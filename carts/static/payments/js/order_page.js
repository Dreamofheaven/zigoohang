const paymentsData = document.getElementById('payments_data')
const totalAmount = paymentsData.dataset.totalAmount
const orderId = paymentsData.dataset.orderId
const orderItem = paymentsData.dataset.orderItem
console.log(totalAmount);
console.log(orderId);
console.log(orderItem);

const IMP = window.IMP; 
IMP.init("imp21474003");  // 가맹점 식별코드

function requestPay() {
  IMP.request_pay({
    pg: "html5_inicis",
    // pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",   // 주문번호
    name: orderItem,
    amount: totalAmount,                         // 숫자 타입
    // buyer_email: "gildong@gmail.com",
    // buyer_name: "홍길동",
    // buyer_tel: "010-4242-4242",
    // buyer_addr: "서울특별시 강남구 신사동",
    // buyer_postcode: "01181"
  }, function (rsp) { // callback
    //rsp.imp_uid 값으로 결제 단건조회 API를 호출하여 결제결과를 판단합니다.
  });
}
function requestPay2() {
  IMP.request_pay({
    pg: "kcp",
    // pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",   // 주문번호
    name: orderItem,
    amount: totalAmount,                         // 숫자 타입
    // buyer_email: "gildong@gmail.com",
    // buyer_name: "홍길동",
    // buyer_tel: "010-4242-4242",
    // buyer_addr: "서울특별시 강남구 신사동",
    // buyer_postcode: "01181"
  }, function (rsp) { // callback
    //rsp.imp_uid 값으로 결제 단건조회 API를 호출하여 결제결과를 판단합니다.
  });
}
function kakaoPay() {
  IMP.request_pay({
    pg: "kakaopay",
    // pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",   // 주문번호
    name: orderItem,
    amount: totalAmount,                         // 숫자 타입
    // buyer_email: "gildong@gmail.com",
    // buyer_name: "홍길동",
    // buyer_tel: "010-4242-4242",
    // buyer_addr: "서울특별시 강남구 신사동",
    // buyer_postcode: "01181"
  }, function (rsp) { // callback
    if ( rsp.success ) {
      var msg = '결제가 완료되었습니다.';
      // msg += '고유ID : ' + rsp.imp_uid;
      // msg += '상점 거래ID : ' + rsp.merchant_uid;
      // msg += '\n결제 금액 : ' + rsp.paid_amount;
      msg += '\n결제 금액 : ' + rsp.paid_amount;
      console.log(rsp);
      // msg += '카드 승인번호 : ' + rsp.apply_num;
  }
  else {
      var msg = '결제에 실패하였습니다.\n에러내용 : ' + rsp.error_msg
  }
  alert(msg);
  });
}
function eximbayPay() {
  IMP.request_pay({
    pg: "eximbay",
    // pay_method: "card",
    // merchant_uid: "ORD20180131-0000011",   // 주문번호
    name: orderItem,
    amount: totalAmount,                         // 숫자 타입
    // buyer_email: "gildong@gmail.com",
    // buyer_name: "홍길동",
    // buyer_tel: "010-4242-4242",
    // buyer_addr: "서울특별시 강남구 신사동",
    // buyer_postcode: "01181"
  }, function (rsp) { // callback
    //rsp.imp_uid 값으로 결제 단건조회 API를 호출하여 결제결과를 판단합니다.
  });
}