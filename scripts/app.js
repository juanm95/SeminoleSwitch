Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}

function updateAll() {
    var pre = document.getElementById("preDistance")
    var post = document.getElementById("postDistance")
    var convertTo = document.getElementById("myonoffswitch").checked;
    var distance = parseInt($("#units").get(0).value);
    if (convertTo) {
        pre.innerHTML = distance
        post.innerHTML = distance * 1.06
    } else {
        pre.innerHTML = distance * 1.06
        post.innerHTML = distance
    }

    // Time conversion
    pre = document.getElementById("preTime")
    post = document.getElementById("postTime")
    var minutes = parseInt($("#minutes").get(0).value);
    var seconds = parseInt($("#seconds").get(0).value);
    var centi = parseInt($("#milliseconds").get(0).value);
    var multiplier;
    multiplier = 1.065;
    pre.innerHTML = "" + minutes + ":" + seconds.pad() + ":" + centi.pad()
    seconds = minutes * 60 + seconds + centi * .01;
    if (convertTo) {
        seconds *= multiplier;
    } else {
        seconds /= multiplier;
    }
    minutes = Math.trunc(seconds / 60);
    seconds -= minutes * 60;
    centi = seconds - Math.trunc(seconds);
    seconds -= centi
    centi = centi * 100
    centi = Math.trunc(centi)
    post.innerHTML = "" + minutes + ":" + seconds.pad() + ":" + centi.pad()
    return false;
}