
$(document).ready(function() {
    var temp = "none";

    $("#li-one").click(function () {
        openMatter(1);
    });
    $("#li-two").click(function () {
        openMatter(2);
    });
    $("#li-three").click(function () {
        openMatter(3);
    });
    $("#li-four").click(function () {
        openMatter(4);
    });
    function openMatter(obj) {
        for (var i = 1; i <= 4; i++) {
            if (i == obj) {
                temp = "block";
            } else {
                temp = "none";
            }
            document.getElementById("matter" + i).style.display = temp;
        }
    }
});