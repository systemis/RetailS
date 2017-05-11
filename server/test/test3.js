var express = require("express");
var userDM  = require('../models/database-user.js');
var app     = express();


class TongSinhVien {
    constructor() {
        this.soSinhVien = ["B", "A", "C"];
    }
}

class FindSinhVien extends TongSinhVien{
    constructor(tenSinhvien) {
        super(tenSinhvien);
        this.tenSinhvien = tenSinhvien;
    }
    
    findSinhVien(){
        console.log(this.tenSinhvien);
        
        if(this.soSinhVien.indexOf(this.tenSinhvien) >= 0) {
            console.log("Co sinh vien");
        }else{
            console.log("Khong co sinh vien");
        }
    }

    editSinhVien(name, andress, phonenumber){
        userDM.updateUserInfo(this.tenSinhvien, name, andress, phonenumber, (rs) => {
            console.log(rs);
        })
    }
}

new FindSinhVien("systemis@gmail.com").editSinhVien("na", "d", 99);

app.listen(3000, () => {

});