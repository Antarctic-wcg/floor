$(function(){
    $(".main3>div").css({"width":47.4315/5+"rem","height":25/5+"rem"});//每个地板宽高
    $(".mu .mu1").css({"width":26.808/5+"rem","height":22/5+"rem"});//每个挡板mu宽高
    // $(".oneg").css({"width":26.808/5+"rem","height":22/5+"rem"});

    $(".main3,.btnfloor").click(function(){
        console.log("main被点击了")
        $(".btnfloor ul").css("display",function(index,value){
            return value == "none" ? "block":"none";
        })
    })


    //循环输出地板
    var x = 9.4863;
    var y = 5;
    var item = 1;// 记录够5满一行的时候
    var oneX = 1.5;//每次X偏移
    var oneY = 0.5;//每次Y偏移
    // var row = 1;//记录行数
    
    $(".main3 .floor1").eq(0).css({"position":"absolute","left":2*x+"rem","bottom": 0});
    for(var i = 1; i <= 24; i++){
        
        if(item === 5){
                oneX =2.5;
                oneY =0.5;
        }else if(item === 10){
                oneX = 3;
                oneY = 1;
        }else if(item ===15){
                oneX = 3.5;
                oneY = 1.5;
        }else if(item === 20){
                oneX = 4;
                oneY = 2;
        }
        $(".floor1").eq(0).clone().appendTo(".main3");
        $(".main3 .floor1").eq(i).css({"position":"absolute","left": oneX*x+"rem","bottom": oneY*y+"rem"});
        oneX -= 0.5;
        oneY += 0.5;
        item += 1;
    }
    //循环输出地板end---------------

    //循环输出挡板mu
    var id = 1;
    for(var j = 1; j <= 25; j++){
        id += 1;
        if(j < 25){
            $(".mu .mu1").eq(0).clone().attr("id",id).appendTo(".mu");
        }
        $(".mu #"+j).click(function(e){
            //阻止事件冒泡
            e.cancelBubble = true;
            e.stopPropagation();
            $(".btnfloor ul").css("display","block");
            color = parseInt($(this).attr("id"));
            
        })
    }
    //循环输出挡板mu end------------

    $(".floor1:odd img").attr("src","./img/红格.png");

    //列表点击切换
    var color;
    $(".btnfloor ul li").click(function(index){
        console.log(color,"------")
        if($(this).text() == "绿"){
            if(color !== undefined){
                $(".floor1:eq("+(color-1)+") img").attr("src","./img/绿格.png")
            }
        }else{
            if(color !== undefined){
                $(".floor1:eq("+(color-1)+") img").attr("src","./img/红格.png")
            }
        }
    })
    //列表点击切换end---------------

    //固定格子
    function drag(e){
        var who = $(this).parent().attr("id");
        // console.log(who);
        if(who == "two"){
            lastLeft = cftLeftend ? cftLeftend:cftLeft;
            lastTop = cftTopend ? cftTopend:cftTop;
            // console.log(lastLeft,lastTop)
            cftLeftend = $("#two").position().left;
            cftTopend = $("#two").position().top;

            if(status == "shu"){
                for(var i = 0; i < 5; i++){
                    if(cftLeftend>=(i*main3Width) && cftLeftend<((i+1)*main3Width)){
                        if(cftTopend>=(-1*main3Height) && cftTopend<0){
                            $("#two").css({
                                "left" : (i+1)*main3Width/fontSize+"rem",
                                "top" : 0
                            })
                        }
                    }
                }
            //    第一种笨方法固定格子
                // if(cftLeftend >= 0 && cftLeftend < main3Width/2){// (1/2)
                //     if(cftTopend >= (-main3Height) && cftTopend <0){
                //         console.log("1-1");
                //         $("#two").css({
                //             "left" : main3Width/fontSize+"rem",
                //             "top" : "0rem"
                //         })
                //     }else if(cftTopend >= 0 && cftTopend < 2*main3Height){
                //         console.log("1-2");
                //         $("#two").css({
                //             "left" : "0rem",
                //             "top" : main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= 2*main3Height && cftTopend < 4*main3Height){
                //         console.log("1-3");
                //         $("#two").css({
                //             "left" : main3Width/fontSize+"rem",
                //             "top" : 2*main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= 4*main3Height){
                //         console.log("1-4");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : 3*main3Height/fontSize+"rem"
                //         })
                //     }
                // }else if(cftLeftend >= main3Width/2 && cftLeftend < main3Width){// (1)
                //     if(cftTopend >= (-1.5*main3Height) && cftTopend < (-main3Height)){
                //         console.log("2-1");
                //         $("#two").css({
                //             "left" : main3Width/fontSize+"rem",
                //             "top" : "0rem"
                //         })
                //     }else if(cftTopend >= (-main3Height) && cftTopend < main3Height){
                //         console.log("2-2");
                //         $("#two").css({
                //             "left" : main3Width/fontSize+"rem",
                //             "top" : "0rem"
                //         })
                //     }else if(cftTopend >= main3Height && cftTopend < (main3Height*3)){
                //         console.log("2-3");
                //         $("#two").css({
                //             "left" : main3Width/fontSize+"rem",
                //             "top" : 2*main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= (main3Height*3)){
                //         console.log("2-4");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : 3*main3Height/fontSize+"rem"
                //         })
                //     }
                // }else if(cftLeftend >= main3Width && cftLeftend < (1.5*main3Width)){// 1.5
                //     if(cftTopend >= (-2*main3Height) && cftTopend < (-1.5*main3Height)){
                //         console.log("3-1");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : (-1*main3Height)/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= (-1.5*main3Height) && cftTopend < (-1*main3Height)){
                //         console.log("3-2");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : (-1*main3Height)/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= (-1*main3Height) && cftTopend < (0.5*main3Height)){
                //         console.log("3-3");
                //         $("#two").css({
                //             "left" : main3Width/fontSize+"rem",
                //             "top" : "0rem"
                //         })
                //     }else if(cftTopend >= (0.5*main3Height) && cftTopend < main3Height){
                //         console.log("3-4");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= main3Height && cftTopend < (1.5*main3Height)){
                //         console.log("3-5");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= (1.5*main3Height) && cftTopend <(2.5*main3Height)){
                //         console.log("3-6");
                //         $("#two").css({
                //             "left" : main3Width/fontSize+"rem",
                //             "top" : 2*main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= (2.5*main3Height) && cftTopend < (4.5*main3Height)){
                //         console.log("3-7");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : 3*main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend > (4.5*main3Height)){
                //         $("#two").css({
                //             "left" : 3*main3Width/fontSize+"rem",
                //             "top" : 4*main3Height/fontSize+"rem"
                //         })
                //     }
                // }else if(cftLeftend >= (1.5*main3Width) && cftLeftend < (2*main3Width)){// 2
                //     if(cftTopend >= (-2*main3Height) && cftTopend < 0){
                //         console.log("4-1");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : -1*main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= 0 && cftTopend < (2*main3Height)){
                //         console.log("4-2");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= (2*main3Height) && cftTopend < (4*main3Height)){
                //         console.log("4-3");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : 3*main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= (4*main3Height)){
                //         console.log("4-4");
                //         $("#two").css({
                //             "left" : 3*main3Width/fontSize+"rem",
                //             "top" : 4*main3Height/fontSize+"rem"
                //         })
                //     }
                // }else if(cftLeftend >= (2*main3Width) && cftLeftend < (2.5*main3Width)){//2.5
                //     if(cftTopend >= (-2*main3Height) && cftTopend < 0){
                //         console.log("5-1");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : -1*main3Height/fontSize+"rem"
                //         })
                //     }else if(cftTopend >= 0 && cftTopend < 2*main3Height){
                //         console.log("5-2");
                //         $("#two").css({
                //             "left" : 2*main3Width/fontSize+"rem",
                //             "top" : main3Height/fontSize+"rem"
                //         })
                //     }
                // }
            }else if(status == "heng"){
                
            }
        }else if(who == "one"){

        }

    }
    //固定格子end-------------------------

    //长方体拖动start
    var _x_start,_y_start,_x_move,_y_move,_x_end,_y_end,left_start,top_start,cftLeftend,cftTopend,lastLeft,lastTop;
    var fontSize = parseFloat($("body").css("font-size"));//当前bodyfontsize
    var main3Width = parseFloat($(".main3").css("width"))/10;
    var main3Height = parseFloat($(".main3").css("height"))/10;
    // console.log(main3Height/main3Width);
    var cftLeft = $("#two").position().left;//初始长方体距离父元素左边距离
    var cftTop = $("#two").position().top;//初始长方体距离父元素上边距离
    // var zft = parseFloat($("#one").css("left"));//层级
    // var cft = parseFloat($("#two").css("left"));//层级
    
    // console.log($(".lg"));
    $(".cube").click(function(e){
         //阻止事件冒泡
         e.cancelBubble = true;
         e.stopPropagation();
    });
    //长方体旋转
    $(".lg").click(function(e){
        //阻止事件冒泡
        e.cancelBubble = true;
        e.stopPropagation();
        $(".long4").css("display",function(index,value){
            return value == "none" ? "block":"none";
        });
    })
    var degree = 0;
    var addj = "add";
    var status = "shu";
    var item = "ping";
    var once = 1;//多次旋转长方体，控制好边缘
    var c = 1;
    var first = true;
    $(".long4").click(function(e){
        e.cancelBubble = true;
        e.stopPropagation();
        degree += 180;
        $(".long4").css("display","none");

        if(c > 1){
            first ? once += 1 : once -=1;
            first = !first;
        }
        c = 2;

        //处理边边旋转情况1、右边’
        for(var k = 4; k < 8; k++){
            if(cftLeftend >= (k*main3Width-1) && cftLeftend <= ((k+1)*main3Width) && cftTopend >= ((-k+9)*main3Height) &&  cftTopend <= ((-k+10)*main3Height)){
                console.log(1)
                
                $(".twog").css("transform","rotateY("+degree+"deg) translateY("+(0)+"rem) translateX("+(main3Width/fontSize)+"rem)");
                addj = "jian";
                status = "heng";
                console.log(status);
                item = "ping";
                break;
            }else if(cftLeftend >= (k*main3Width-1) && cftLeftend <= ((k+1)*main3Width) && cftTopend >= ((k-6)*main3Height) && cftTopend <= ((k-5)*main3Height)){
                console.log("22--------------");
                // console.log(cftLeftend,cftTopend);
                $(".twog").css("transform","rotateY("+degree+"deg) translateY("+(main3Height/fontSize)+"rem) translateX("+(-main3Width/fontSize)+"rem)");
                addj = "add";
                status = "heng";
                item = "ping";

                cftLeftend = $("#two").position().left;
                cftTopend = $("#two").position().top;
                console.log(cftLeftend,cftTopend)
                
                break;
            }else{
                console.log(3);
                item = "you";
                status = "heng";
            }
        }
        if(item == "you"){
            if(addj == "add"){
                $(".twog").css("transform","rotateY("+degree+"deg) translateY("+(main3Height/fontSize)+"rem)");
                addj = "jian";
                status = "heng";
                // console.log(status);
            }else if(addj == "jian"){
                $(".twog").css("transform","rotateY("+degree+"deg) translateY("+(0)+"rem)");
                addj = "add";
            }
        }
            
    })

    $(".lg").on("touchstart",function(e){
        _x_start=e.touches[0].pageX;//指针相对文档左边缘位置
        _y_start=e.touches[0].pageY;//指针相对文档上边缘位置
        // console.log("start",_x_start)
        left_start=$("#two").css("left");
        top_start=$("#two").css("top");

        // if(cft > zft){
        //     $("#one").css("z-index","9");
        //     $("#two").css("z-index","9999");
        // }
    });
    $(".lg").on("touchmove",function(e){
        e.preventDefault();
        _x_move=e.touches[0].pageX;
        _y_move=e.touches[0].pageY;


        // console.log(parseFloat(left_start),parseFloat(_x_move))
        // console.log(parseFloat(fontSize));
        // console.log(parseFloat(_x_move)-parseFloat(_x_start)+parseFloat(left_start));
        var dongX = (parseFloat(_x_move)-parseFloat(_x_start)+parseFloat(left_start))/fontSize;
        var dongY = (parseFloat(_y_move)-parseFloat(_y_start)+parseFloat(top_start))/fontSize;
        // console.log(dongX);

        
        
        if(status == "shu"){
            if(dongX < 0){
                $("#two").css("left","0rem");
            }else if(dongX > (main3Width/fontSize*7)){
                $("#two").css("left",(main3Width/fontSize*7)+"rem");
            }else{
                $("#two").css("left",dongX+"rem");
            }
            if(dongY < (-2*main3Height/fontSize)){
                $("#two").css("top",(-2*main3Height/fontSize)+"rem");
            }else if(dongY > (5*main3Height/fontSize)){
                $("#two").css("top",(5*main3Height/fontSize)+"rem");
            }else{
                $("#two").css("top",dongY+"rem");
            }
        }else if(status == "heng"){
            if(once == 1){
                if(dongX < 0){
                    $("#two").css("left","0rem");
                }else if(dongX > (main3Width/fontSize*7)){
                    $("#two").css("left",(main3Width/fontSize*7)+"rem");
                }else{
                    $("#two").css("left",dongX+"rem");
                }
                if(dongY < (-3*main3Height/fontSize)){
                    $("#two").css("top",(-3*main3Height/fontSize)+"rem");
                }else if(dongY > (4*main3Height/fontSize)){
                    $("#two").css("top",(4*main3Height/fontSize)+"rem");
                }else{
                    $("#two").css("top",dongY+"rem");
                }
            }else{
                if(dongX < 0){
                    $("#two").css("left","0rem");
                }else if(dongX > (main3Width/fontSize*7)){
                    $("#two").css("left",(main3Width/fontSize*7)+"rem");
                }else{
                    $("#two").css("left",dongX+"rem");
                }
                if(dongY < (-2*main3Height/fontSize)){
                    $("#two").css("top",(-2*main3Height/fontSize)+"rem");
                }else if(dongY > (5*main3Height/fontSize)){
                    $("#two").css("top",(5*main3Height/fontSize)+"rem");
                }else{
                    $("#two").css("top",dongY+"rem");
                }
            }
        }
        // $("#two").css("top",dongY+"rem");
        

        // console.log(parseFloat($("#two").css("left")));

    });
    
    $(".lg").on("touchend",drag);
    //长方体拖动end----------------

    //地板中心点
    // console.log($(".yuan:eq(4)").position().left,main3Width);
    //地板中心点end

    //正方体拖动start
    var _x_start2,_y_start2,_x_move2,_y_move2,_x_end2,_y_end2,left_start2,top_start2;

    $(".cube").on("touchstart",function(e){
        _x_start2=e.touches[0].pageX;//指针相对文档左边缘位置
        _y_start2=e.touches[0].pageY;//指针相对文档上边缘位置
        // console.log("start",_x_start)
        left_start2=$("#one").css("left");
        top_start2=$("#one").css("top");

        // if(zft > cft){
        //     $("#one").css("z-index","9999");
        //     $("#two").css("z-index","9");
        // }
    });
    $(".cube").on("touchmove",function(e){
        e.preventDefault();
        _x_move2=e.touches[0].pageX;
        _y_move2=e.touches[0].pageY;
        // var fontSize2 = $("#one").css("font-size");


        // console.log(parseFloat(left_start),parseFloat(_x_move))
        // console.log(parseFloat(fontSize));
        // console.log(parseFloat(_x_move)-parseFloat(_x_start)+parseFloat(left_start));
        var dongX2 = (parseFloat(_x_move2)-parseFloat(_x_start2)+parseFloat(left_start2))/fontSize;
        var dongY2 = (parseFloat(_y_move2)-parseFloat(_y_start2)+parseFloat(top_start2))/fontSize;
        // console.log(dongX);

        $("#one").css("left",dongX2+"rem");
        $("#one").css("top",dongY2+"rem");

    });
    $(".cube").on("touchend",drag);

    //正方体拖动end------------------

    //小人入场
    $(".person").css({
        "width" : main3Width,
        "height" : 2*main3Height,
        "left" : main3Width/2,
        "top" : main3Height*7
    })
    
    var personRun = 4.75;
    var runLeft = main3Width/2;
    var runTop = main3Height*7;
    function run(){
        $(".person").css({
            "background-position" : -personRun+"rem 0rem",
            "left" : runLeft/fontSize+"rem",
            "top" : runTop/fontSize+"rem"
        });
        personRun = personRun + 4.75;
        runLeft += 4.8;
        runTop -= 2;
        if(runLeft >= (2.5*main3Width)){
            runLeft = 2.5*main3Width;
        }
        if(runTop <= (5.5*main3Height)){
            runTop = 5.5*main3Height;
        }
        if(personRun == 76){
            personRun = 4.75;
        }
        if(runLeft == 2.5*main3Width && runTop == 5.5*main3Height){
            clearTimeout(run1);
            ranDom();
        }else{
            setTimeout(run,150);
        }
        
    }

    var run1 = setTimeout(run,0);

    function ranDom(){
        var direct = Math.floor(Math.random() * 4 + 0);
        if(direct == 0){
            console.log(direct);
        }else if(direct ==1){
            console.log(direct);
        }else if(direct == 2){
            console.log(direct);
        }else if(direct == 3){
            console.log(direct);
        }
    }

    


})
