<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
<div class="sign">
    <div id="sign_wrap">
<form action="">
    <h1>회원 가입</h1>
    <dl class="item_id">
        <dt><label for="id">아이디</label></dt>
        <dd><input type="text" id="id" name="id" placeholder=아이디></dd>
    </dl>
    <dl class="item_pw">
        <dt><label for="pw">비밀번호</label>
        <dd><input type="password" id="pw" name="pw" placeholder="비밀번호"></dd>
        <dt><label for="pw_check">비밀번호 확인</label></dt>
        <dd><input type="password" id="pw_check" name="pw_check"placeholder="비밀번호 확인"></dd>
    </dl>
    <dl class="item_name">
        <dt><label for="">이름</label></dt>
        <dd><input type="text" id="name" name="name" placeholder="이름"></dd>
    </dl>
    <dl class="item_address">
        <dt><label for="">주소</label></dt>
        <dd><input type="text" id="address" name="address" placeholder="주소"></dd>
    </dl>
    <button id="sign_ok" type="submit">확인</button>
</form>
</div>
</div>
</body>
</html>