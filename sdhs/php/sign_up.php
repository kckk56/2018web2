<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>회원가입</title>
</head>
<body>
    <div class="wrap">
        <form action="./sign_up.php" name="sign_up" method="post" onsubmit="return checksubmit()">
            <div class="form_body">
                <p>이름</p>
                <div class="input_area">
                    <input type="text" name="name" class="name_input">
                </div>
                <p>아이디</p>
                <div class="input_area">
                    <input type="text" name="id" class="id_input">
                </div>
                <p>비밀번호</p>
                <div class="input_area">
                    <input type="password" name="pw" class="pw_input">
                </div>
                <p>비밀번호 확인</p>
                <div class="input_area">
                    <input type="password" name="pw_check" class="pw_check_input">
                </div>
                <button type="submit" class="sign_up_button">
                    가입
                </button>
                <button type="submit" class="cancel">
                    취소
                </button>
            </div>
        </form>
    </div>
</body>
</html>
