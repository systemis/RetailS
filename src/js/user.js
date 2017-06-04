import $ from 'jquery';

class UserManager{
    checkAdmin(fn){ 
        $.ajax({
            url: '/check-admin',
            method: 'POST',
            success: isAdmin => {
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