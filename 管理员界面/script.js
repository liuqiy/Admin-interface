$(function() {

    /*主界面切换*/
    $('.childNav').click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        var index_nav = $(".childNav").index(this);
        // alert(index_nav);
        if (index_nav == 0) {
            $('.main-text').css("display", "none");
            $('.person-text').css("display", "none");
            $('.work-text').css("display", "block");
        } else if (index_nav == 1) {
            $('.main-text').css("display", "none");
            $('.work-text').css("display", "none");
            $('.person-text').css("display", "block");
        }

    })

    /*信息编辑按钮 */
    $('.bth-normal').click(function() {
        var btnText = $(this).attr('value');
        if (btnText == "编辑") {
            $('.unimproved').hide();
            $('.improved').hide();
            $('.edit').show();
        } else if (btnText == "保存") {
            $('.edit').hide();
            $('.improved').show();
        }
    })

    /*复选框删除按钮 */
    var groupCheckbox = $("input[type='checkbox']");
    var isChecked = false;

    $("input[type='checkbox']").each(function(i) {
        // alert(i);
        $(this).click(function() {
            for (i = 0; i < groupCheckbox.length; i++) {
                if (groupCheckbox[i].checked) {
                    isChecked = true;
                    break;
                    // console.log(isChecked);
                } else if (i == groupCheckbox.length - 1) {
                    isChecked = false;
                }
            }
            if (this.checked == true) {
                $(".delete").css("background-color", "#009900");
                $(".delete").css("color", "white");
            } else if (!isChecked) {
                $(".delete").css("background-color", "#fff");
                $(".delete").css("color", "black");
            }
        });

    });

    /* 打卡状态的颜色*/
    var arr_status = [];
    var arr_time = [];
    var arr_depart = [];
    var arr_num = [];

    // var normal = true;
    // console.log(groupTd[0].innerText);
    $('table tr').each(function() {
        var res_status = $(this).find('td').eq(4).text();
        var res_time = $(this).find('td').eq(1).text();
        var res_depart = $(this).find('td').eq(2).text();
        var res_num = $(this).find('td').eq(3).text();
        arr_status.push(res_status);
        arr_time.push(res_time);
        arr_depart.push(res_depart);
        arr_num.push(res_num);
    })

    /*详情界面显示 */
    $(".detail").click(function() {
        var index = $(".detail").index(this);
        // alert(index);
        // alert(arr_status[index + 2]);
        //赋值
        $('.time').text(arr_time[index + 2] + "  8:50");
        $('.depart').text(arr_depart[index + 2]);
        $('.num').text(arr_num[index + 2]);

        if (arr_status[index + 2] == "正常") {
            $(".status").text("正常");
            $('.reason').text("无");
            $('.reason').css("color", "black");
            $('.detailPage').show();
        } else if (arr_status[index + 2] == "异常") {
            $('div>strong').text("王五");
            $(".status").text("异常");
            $('.reason').text("安全装备佩戴异常");
            $('.reason').css("color", "red");
            $('.detailPage').show();
        }

    })
    $(".detail-return").click(function() {
        $('.detailPage').hide();
    })

    /*首页*/
    $('#home').click(function() {
        $('.main-text').css("display", "block");
        $('.person-text').css("display", "none");
        $('.work-text').css("display", "none");
        $(".active").removeClass("active");
    })

    /*信息栏显示*/

    var timer;
    var inside = false;
    // if (typeof($("#badge").attr("display")) == undefined) {}
    // 问题：使用非jQuery语言/只有if没有else
    $("#news").hover(function() {
        if ($('#badge').is(':visible')) {
            $('.message').css("display", "block");
        } else {
            $('.message').hide();
        }
        $("#badge").hide();

    }, function() {
        if (inside == false) {
            timer = setTimeout(function() {
                $('.message').hide();
            }, 1000);
        }
    });
    $(".message").hover(function() {
            inside = true;
            clearTimeout(timer);
            $('.message').show();
        }, function() {
            inside == false;
            $('.message').hide();
        })
        // console.log(typeof($("#badge").attr("display")));


    $('.getDeal').click(function() {
        $('.childNav:eq(0)').addClass("active");
        $('.main-text').css("display", "none");
        $('.person-text').css("display", "none");
        $('.work-text').css("display", "block");
    })


    /*个人信息界面*/
    $('#personalBtn').hover(function() {
        $('.personal').show();
    }, function() {
        timer = setTimeout(function() {
            $('.personal').hide();
        }, 1000);
    });
    $(".personal").hover(function() {
        clearTimeout(timer);
        $('.personal').show();

    }, function() {
        inside == false;
        $('.personal').hide();
    });

    /*页码 */
    // var arr_page = [];
    // 使用for循环给tab数组每一项设置监听
    $('.page span').each(function() {
        $(this).click(function() {
            // 排他思想,把所有元素属性清空
            $(".page-current").removeClass("page-current");
            // 点击后把current属性加上
            $(this).addClass('page-current');
            var page_num = $(this).text();
            // alert(page_num);
            if (page_num == 1) {
                $("#mange-1th").css("display", "block");
                $("#mange-2th").css("display", "none");
            } else if (page_num == 2) {
                $("#mange-1th").css("display", "none");
                $("#mange-2th").css("display", "block");

            }

        })

    })




});






// function f() {
//     document.getElementById('.message').style.display = 'block'
// }

// function f1() {
//     document.getElementById('.message').style.display = 'none'
// }



/*页面切换*/


// 找到tab栏标题的每一项li存到tab数组中
// var tab = document.querySelector(".item").querySelectorAll(".childNav");
// // 使用for循环给tab数组每一项设置监听
// for (var i = 0; i < tab.length; i++) {
//     tab[i].onclick = function() {
//         // 排他思想,把所有元素属性清空
//         for (var j = 0; j < tab.length; j++)
//             tab[j].className = '';
//         // 点击后把current属性加上
//         this.className = 'current';
//     }
// }

/*tab下划线切换*/

// function clickTab(that) {
//     console.log(that);
//     var pages = document.getElementsByClassName("page-current");
//     for (var i = 0; i < tabs.length; i++) {
//         pages[i].classList.remove("page-current");
//     }
//     that.classList.add("page-current");
// }
// // 动态滑动
// function clickTabNew(t) {
//     // setTimeout();
//     console.log(t);
//     var lef = document.getElementById("botLine").style.left;

//     lef = t.offsetLeft;
//     // botLine.style.left = t.offsetLeft; //底部下划线开始的位置 = t 的左侧偏移值
// }