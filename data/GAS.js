// 20250121 Maria 用於取得ㄓ用於取得 試算表的資料
function GetBirthDay (){
    var data ;
    $.ajax({
        // 因為我用git 去通過驗證，所以必須給 token 讓他通過
        "headers": {authorization: "Bearer AKfycbwMdriL5N0SjN7cECcyXJn9yvRe5MKA3kyYxZOaOw-U"},
        async: false,
        type: "post",
        data: {
            "method": "read",
            "sheetName": "生日",
        },
        // 填入網路應用程式網址
        url: GAS_URL,
        success:
            function (result) {
                data =  result;
            }
    });
    return data;
}
