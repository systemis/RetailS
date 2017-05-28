import $ from 'jquery';

class UserInfomationManagaer{
    getUserInfo(fn) {
        $.ajax({
            url: "/get-user-information", 
            type: "GET",
            success: data => {
                if(data === 'err'){
                    return 'err'
                }

                fn(data);
            },
            error: err => {
                return fn("err")
            }
        })
    }

    changePassWord = (oldPass, newPass) => {
        $.ajax({
            url: "/change-user-password",
            type: "POST",
            data: {oldPass: oldPass, newPass: newPass},
            success: data => {
                switch(data) {
                    case "password_c": 
                        alert("Mật khẩu không đúng !, vui lòng kiểm tra lại .");
                        break;
                    case "err":
                        alert("Có lỗi xảy ra, vui lòng thử lại sau 3 phút .");
                        break;
                    default: 
                        alert("Đổi mật khẩu thành công .");
                        location.reload();  
                }
            },
            error: err => {
                alert("Có lỗi xảy ra, vui lòng thử lại sau 3 phút .");
                console.log("Error when change password: " + err);
            }
        })
    }
}

module.exports = new UserInfomationManagaer();