//Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.//
var biological;
var chemistry;
var physical;
biological = prompt(`nhập vào điểm sinh`);
chemistry= prompt(`nhập vào điểm Toán`);
physical = prompt(`nhập vào điểm hoá`)
var bio = parseInt(biological);
var chem =parseInt(chemistry);
var phy = parseInt(physical);
var average = ( bio + chem + phy )/3;
document.write(`Điểm trung bình cộng là :` + average);
//Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F
var C
    C =prompt(`nhập độ c mà bạn muốn đổi`)
var  a = parseInt(C);
var ketQua = (a * 1.8) + 32;
document.write(`ĐỘ F của bạn là:`+ ketQua);
// bài 3:viết chương trình tính diện tích hình tròn
var r;
var r =prompt(`nhập vào bán kình hình tròn`);
var R = parseInt(r);
var S = (r*r)*3.14;
document.write(`Diện tích Hình tròn là :` + S);
//Bài 4: Viết chương trình chu vi hình tròn
var D = (r*2)*3.14;
document.write(`chu vi hình tròn`+ D);


