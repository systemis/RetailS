var express    = require('express');
var connection = require('../config/mainDB.js');
var app        = express();

connection.connect((err) => {
    if(err){
        console.log(err);
        return console.log('Ket noi that bai !');
    }

    console.log('Ket noi thanh cong ');
})

app.get('/', (req, res) => {
    
    connection.query("INSERT INTO mySampleDB SET name='thinh'", (err) => {
        if(!err) return console.log('Thanh cong ');
        console.log(err);
        console.log('That bai')
    })

    // Xoá dòng dữ liệu nếu name bằng 'thinh' .
    connection.query("DELETE FROM mySampleDB WHERE name='thinh'", (err, result) => {
        if(err) return console.log('Loi !');
        
        // Kiểm tra coi tên có đã được lưu hay không .
        if(result.affectedRows == 0) {
            // Nếu affectedRows bằng 0 là tên chưa được lưu trong data .

            console.log('Tên không tồn tại !');
        }else{
            console.log('Xoa thanh cong ');
        }
    });

    connection.query('SELECT * FROM mySampleDB', (err, rows, fields) => {
        if(err) {
            console.log(err);
            return console.log('Connect fail !');
        }

        console.log('Connect success !');
        console.log(rows[0].name);
        rows.map((row, index) => {
            console.log(row);
        })
    })

    
    //Khởi tạo table bằng code (nên dùng cách này! ).
    connection.query("CREATE TABLE IF NOT EXISTS tyMySQL(id int primary key, name varchar(255))", (err, result) => {
        if(err) return console.log(err);

        console.log("Create new table success ");
        console.log('Client is creating ')
    })
})

app.listen(3000, () => {

})