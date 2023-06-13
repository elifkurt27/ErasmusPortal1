

function sifreKontrol() {

    var kullanici =
        [(document.getElementById("email").value), (document.getElementById("sifre").value)];


    var sifre2 = document.getElementById("reSifre").value;



    var yazi = document.getElementById("sonuc");

    if (kullanici[1] == sifre2) {

        yazi.innerHTML = "Hesap Oluþturuldu!";
        yazi.style.color = "green";

        sessionStorage.setItem("user", kullanici);

    }
    else {
        yazi.innerHTML = "Þifreler Eþleþmiyor.";
        yazi.style.color = "red";
    }
}

function girisKontrol() {

    var kullanicilar = sessionStorage.getItem("user");

    kullanici = kullanicilar.split(",");

    var isLogin = "false";




    var mail = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;

    var yazi = document.getElementById("sonuc");

    if (mail == kullanici[0] && sifre == kullanici[1]) {

        yazi.innerHTML = "Giriþ bilgileri doðru!";
        yazi.style.color = "green";

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanýcý:" + kullanici[0];
        document.getElementById("logout_Btn").style.display = "";

        document.getElementById("basvuru").style.display = "";


        isLogin = "true";

        sessionStorage.setItem("isLogin", isLogin);

    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalý.";
        yazi.style.color = "red";
    }


}

function logout() {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;

    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";

    document.getElementById("basvuru").style.display = "";

    location.reload();
    const yonlendir = (url, sure) => {
        setTimeout(() => {
            window.location.href = url;
        }, sure);
    }
    window.addEventListener("load", yonlendir("giris.html", 2000))



}





function checkLogin() {

    var isLogin = sessionStorage.getItem("isLogin");

    var user = sessionStorage.getItem("user");
    user = user.split(",");

    var username = user[0];

    if (isLogin == "true") {

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanýcý: " + username;
        document.getElementById("logout_Btn").style.display = "block";
        document.getElementById("basvuru").style.display = "";
    }
}




function aciklamaGoster() {
    var engeldurum = document.getElementById("engel").value;
    var aciklamaDiv = document.getElementById("aciklamaDiv");
    if (engeldurum == "var") {
        aciklamaDiv.style.display = "block";
    } else {
        aciklamaDiv.style.display = "none";
    }
}



