function Main(){
    if (localStorage.getItem("theme") == null) {
        SetDark()
    }
    else {
        if (localStorage.getItem("theme") == "light") {
            SetLight();
        } else
        {
            SetDark();
        }
    }
}

function ThemeBtnClick(){
    if (localStorage.getItem("theme") == "dark") {
        SetLight();
    } else
    {
        SetDark();
    }
}

function SetDark(){
    document.getElementById("themeBtnIcon").innerHTML = "light_mode";
    document.body.classList.remove('light-theme');
    //document.getElementsByClassName('card').classList.add('dark-theme');
    localStorage.setItem("theme", "dark");
}

function SetLight(){
    document.getElementById("themeBtnIcon").innerHTML = "dark_mode";
    document.body.classList.add('light-theme');
    //document.getElementsByClassName('card').classList.remove('dark-theme');
    localStorage.setItem("theme", "light");
}