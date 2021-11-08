/*单击左边栏跳出对应的内容*/
$(document).ready(function() {
    var temp = "none";

    $("#hdone").click(function () {
        openMatter(1);
    });
    $("#hdtwo").click(function () {
        openMatter(2);
    });
    $("#hdthree").click(function () {
        openMatter(3);
    });
    $("#hdfour").click(function () {
        openMatter(4);
    });
    function openMatter(obj) {
        for (var i = 1; i <= 4; i++) {
            if (i == obj) {
                temp = "block";
            } else {
                temp = "none";
            }
            document.getElementById("item" + i).style.display = temp;
        }
    }
});