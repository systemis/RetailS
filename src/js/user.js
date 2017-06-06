import $ from 'jquery';

class UserManager{
    checkLogin(fn){
        $.ajax({
            url: '/check-login',
            type: 'POST',
            success: isLogin => {
                return fn(isLogin);
            },
            
            error: err => {
                console.log("Error when check login" + err);
            }
        })
    }

    checkAdmin(fn){ 
        $.ajax({
            url: '/check-admin',
            method: 'POST',
            success: isAdmin => {
                console.log("is admin:" + isAdmin);
                return fn(isAdmin);
            },
            error: err => console.log(err)
        })
    }

    logOut(){
        $.ajax({
            url: '/logout',
            method: 'POST',
            success: result => {
                console.log(result);
                if(result){
                    return location.reload();
                }

                return ;
            },
            error: err => console.log(err)
        })
    }
}

module.exports = new UserManager();