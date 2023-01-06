class MyBigNumber {

    // Initialize empty log
    log = '';

    sum(stn1, stn2) {
        // Kiểm thử nếu st1 hoặc stn2 là số âm
        const isNegative1 = stn1[0] === '-';
        const isNegative2 = stn2[0] === '-';

        // Xóa dấu trừ nếu như nó có (vì là cộng chuỗi)
        stn1 = isNegative1 ? stn1.substring(1) : stn1;
        stn2 = isNegative1 ? stn2.substring(1) : stn2;

        // Khởi tạo 1 biến result dưới dạng chuỗi
        let result = '';

        // Khởi tạo 1 biến carry bằng 0
        let carry = 0;

        // Khởi tạo index = 0
        let i = 0;

        // Lặp khi các biến số có các kí số hoặc biến carry KHÔNG BẰNG 0
        while (i < stn1.length || i < stn2.length || carry !== 0) {
            // Lấy ra kí số (digit) tại index hiện tại của cả 2 số
            // Nếu 1 trong 2 số có độ dài ngắn hơn, lấy 0
            const digit1 = i < stn1.length ? parseInt(stn1[stn1.length - 1 - i]) : 0;
            const digit2 = i < stn2.length ? parseInt(stn2[stn2.length - 1 - i]) : 0;

            // Thêm các kí số đã lấy vào biến carry
            const sum = digit1 + digit2 + carry;

            // Cập nhật carry cho vòng lặp tiếp theo 
            carry = sum >= 10 ? 1 : 0;

            // Nối chữ số hàng đơn vị của tổng với kết quả
            result = (sum % 10).toString() + result;

            // Log phép tính mà chúng ta có
            this.log += `${digit1} + ${digit2} + ${carry} = ${sum}\n`;

            // Tăng giá trị index
            i++;
        }

        // Nếu 1 trong 2 số có giá trị là âm, thêm dấu trừ trước kết quả
        if (isNegative1 || isNegative2) {
            result = '-' + result;
        }

        return result;
    }
}

const form = document.getElementById('form');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultOutput = document.getElementById('result');
const logOutput = document.getElementById('log');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const num1 = num1Input.value;
  const num2 = num2Input.value;

  const bigNumber = new MyBigNumber();
  const result = bigNumber.sum(num1, num2);
  resultOutput.textContent = result;
  logOutput.textContent = bigNumber.log;
});