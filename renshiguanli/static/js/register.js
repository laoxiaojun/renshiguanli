$(function () {
    //验证用户名是否存在
    function checkusername() {
        var username = $('#username').val();
        if (username != "") {
            $.get('/user/checkuser', {"username": username}, function (rs) {
                if (rs.retCode == 1) {
                    $("#msg").html("用户名已存在");
                    return;
                } else {
                    $("#msg").html("");
                }
            })
        }
    }

    //用户名失去焦点的时候，检查用户名
    $('#username').blur(function () {
        checkusername();
    });

    //发送验证码
    $('#btnyzm').click(function () {
        var email = $('#email').val();
        if (email == "") {
            $("#msg").html("手机号码不能为空");
            return;
        } else {
            $("#msg").html("");
        }
        $.post("/user/sms/", {"phoneNo": email}, function (rs) {
            if (rs.retCode == 1) {
                $("#msg").html("已发送");//正常发送清空消息提示

            } else {
                $("#msg").html("2分中内不能重复发送");//频繁发送，提示用户不能发送
                return;
            }
        })
    });

    //注册按钮
    $("#btnregister").click(function () {
        var username = $('#username').val();
        if (username == "") {
            $("#msg").html("用户名不能为空");
            return;
        } else {
            $("#msg").html("");
        }
        var password = $('#pwd').val();

        if (password == "") {
            $("#msg").html("密码不能为空");
            return;
        } else {
            $("#msg").html("");
        }
        password = encryptRequest(password);

        var email = $('#email').val();
        if (email == "") {
            $("#msg").html("邮箱不能为空");
            return;
        } else {
            $("#msg").html("");
        }
        var yzm = $('#yzm').val();
        if (yzm == "") {
            $("#msg").html("验证码不能为空");
            return;
        } else {
            $("#msg").html("");
        }

        data = {
            "username": username,
            "password": password,
            "email": email,
            "yzm": yzm
        };
        $.post("", data, function (rs) {
            if (rs.retCode == 1) {
                $("#msg").html();
                window.location.href = rs.retMsg;
            } else {
                $("#msg").html(rs.retMsg);
                return;
            }
        })
    });

});