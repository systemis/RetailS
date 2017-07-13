class CookieManager{
    constructor(name){
        this.name = name + '=';
    }

    setCookie(value){
        var cookie = document.cookie.replace(this.name + this.getCookie() + "%", "");;
        cookie = cookie + this.name + value + "%" + "; path=/";
        document.cookie = cookie;
        console.log(cookie);
    }

    getCookie(){
        var cookie        = document.cookie;
        var cookie_array  = cookie.split('');
        var _cookie_array = [''];
        for(var i = 0; i < cookie_array.length; i++){
            if(i === cookie.indexOf(this.name)){
                i += this.name.length;
                for(var j = i; j < cookie_array.length; j++){
                    if(cookie_array[j] === "%"){
                        i = cookie_array.length + 1;
                        j = cookie_array.length + 1;
                    }else{
                        _cookie_array.push(cookie_array[j]);
                    }
                }
            }
        }

        var _cookie = _cookie_array.join('');
        console.log(_cookie_array.join(''));
        return _cookie
    }

    checkCookie(){
        if(!this.getCookie()){
            return false;
        }

        return true;
    }
};

module.exports = CookieManager;