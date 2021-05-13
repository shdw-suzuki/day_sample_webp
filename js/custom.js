// JavaScript Document

$(document).ready(function(){



    var gallery_id_array = ["CALENDAR", "CRAFT", "FOOD", "HOTEL", "LANDSCAPE", "LIFESTYLE", "STUDIO"],
        gallery_num_array = ["2","6","5","2","6","1","2"],
        gallery_bgc_array = ["","#c0c1c6","","#c0c1c6","","","#c0c1c6"],

        sub_id_array = [["HAWAII CALENDAR2021", "Hawaii Style Calendar 2019"],
                        ["KIMURA LAUHARA SHOP _ HAWAII", "OTA MOKKO _ ODAWARA","SNOWPEAK _ TSUBAMESANJO","TADAFUSA _ TSUBAMESANJO","TAKEUCHI OPTICAL _ SABAE","YOSHINORI TAKEMURA"],
                        ["今日の晩ごはん", "フランスの季節を楽しむお菓子作り","大豆で美味しい毎日レシピ", "自慢の煮込み","ON THE DISH"],
                        ["DISCOVER JAPAN", "Tokyo Lifestyle Hotel"],
                        ["ESTONIA", "hawaii 01","hawaii 02","hawaii 03","HIMALAYA", "LATVIA"],
                        ["LIFESTYLE","LIFESTYLE"],
                        ["BIGDOG", "RERIC"]
                       ],
        sub_num_array = [["14","9"],
                         ["12","30","7","24","20","15"],
                         ["14","23","14","11","7"],
                         ["36","60"],
                         ["39","35","0","0","46","31"],
                         ["0","0"],
                         ["22","8"]
                        ]

    function gallery_load(id, label){

        var myhtml = "",
            k = "";

        $("#gallery").empty();
        myhtml += '<div class="gallery_label">'+label+'</div>';

            id = id.substr(3);

            myhtml += '<ul class="gallery" id="gallery'+id+'">';
                for(i = 0; i < gallery_num_array[id]; i++){
                    myhtml += '<li data-original="photo/'+gallery_id_array[id]+'/'+sub_id_array[id][i]+'/001.webp" class="lazy g'+id+'s'+i+'">'+
			'<div  class="_title">'+sub_id_array[id][i]+'</div></li>'
                }
            myhtml += '</ul></div>';
            $("#gallery").append(myhtml);
            $('.g0s0').on('click', function () {gls('gn_0', '0','HAWAII CALENDAR2021');});
            $('.g0s1').on('click', function () {gls('gn_0', '1','Hawaii Style Calendar 2019');});
            $('.g1s0').on('click', function () {gls('gn_1', '0','KIMURA LAUHARA SHOP _ HAWAII');});
            $('.g1s1').on('click', function () {gls('gn_1', '1','OTA MOKKO _ ODAWARA');});
            $('.g1s2').on('click', function () {gls('gn_1', '2','SNOWPEAK _ TSUBAMESANJO');});
            $('.g1s3').on('click', function () {gls('gn_1', '3','TADAFUSA _ TSUBAMESANJO');});
            $('.g1s4').on('click', function () {gls('gn_1', '4','TAKEUCHI OPTICAL _ SABAE');});
            $('.g1s5').on('click', function () {gls('gn_1', '5','YOSHINORI TAKEMURA');});
            $('.g2s0').on('click', function () {gls('gn_2', '0','今日の晩ごはん');});
            $('.g2s1').on('click', function () {gls('gn_2', '1','フランスの季節を楽しむお菓子作り');});
            $('.g2s2').on('click', function () {gls('gn_2', '2','大豆で美味しい毎日レシピ');});
            $('.g2s3').on('click', function () {gls('gn_2', '3','自慢の煮込み');});
            $('.g2s4').on('click', function () {gls('gn_2', '4','ON THE DISH');});
            $('.g3s0').on('click', function () {gls('gn_3', '0','DISCOVER JAPAN');});
            $('.g3s1').on('click', function () {gls('gn_3', '1','Tokyo Lifestyle Hotel');});
            $('.g4s0').on('click', function () {gls('gn_4', '0','ESTONIA');});
            $('.g4s1').on('click', function () {gls('gn_4', '1','hawaii 01');});
            $('.g4s2').on('click', function () {gls('gn_4', '2','hawaii 02');});
            $('.g4s3').on('click', function () {gls('gn_4', '3','hawaii 03');});
            $('.g4s4').on('click', function () {gls('gn_4', '4','HIMALAYA');});
            $('.g4s5').on('click', function () {gls('gn_4', '5','LATVIA');});
            $('.g5s0').on('click', function () {gls('gn_5', '0','LIFESTYLE');});
            $('.g5s1').on('click', function () {gls('gn_5', '1','LIFESTYLE');});
            $('.g6s0').on('click', function () {gls('gn_6', '0','BIGDOG');});
            $('.g6s1').on('click', function () {gls('gn_6', '1','RERIC');});


        $( ".lazy" ).lazyload(
            {
                threshold: 200 ,			// 200pxの距離まで近づいたら表示する
                effect: "fadeIn" ,		// じわじわっと表示させる
                effect_speed: 1500 ,		// 3秒かけて表示させる
            } ) ;

	$("body,#wrapper").css("background-color",gallery_bgc_array[id]);

    };

    function gls(id, sid ,label){

        var myhtml = "",
            k = "";
            id = id.substr(3);

    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン
            $("#gallery").empty();
            myhtml += '<div class="gallery_label">'+label+'</div><div class="nav_back'+id+'" style="position:fixed;top:5%;right:10%;font-size:2em;">×</div><ul class="gallery" id="gallery'+id+sid+'">';
            for(i = 1; i <= sub_num_array[id][sid]; i++){
                if(i < 10) {k = "00"+i;} else {k = "0"+i;}
                myhtml += 
                    '<li style="display: list-item; background-image: url(&quot;photo/'+gallery_id_array[id]+'/'+sub_id_array[id][sid]+'/'+k+'.webp&quot;);"><a href="photo/'+gallery_id_array[id]+'/'+sub_id_array[id][sid]+'/'+k+'.webp"></a>'+
                    '</li>' 
            }
            myhtml += '</ul></div>';
            $("#gallery").append(myhtml);
            $("#gallery"+id+sid).slickLightbox({});
            $('.nav_back0').on('click', function () {gallery_load("gn_0","CALENDAR");});
            $('.nav_back1').on('click', function () {gallery_load("gn_1","CRAFT");});
            $('.nav_back2').on('click', function () {gallery_load("gn_2","FOOD");});
            $('.nav_back3').on('click', function () {gallery_load("gn_3","HOTEL");});
            $('.nav_back4').on('click', function () {gallery_load("gn_4","LANDSCAPE");});
            $('.nav_back5').on('click', function () {gallery_load("gn_5","LIFESTYLE");});
            $('.nav_back6').on('click', function () {gallery_load("gn_6","STUDIO");});

    } else {
        // PC

            var position = $('#gallery').offset().top;
            $("body,html").animate({scrollTop: position}, 50,  'easeInOutExpo');

        $(".modal-window").empty();

            myhtml += '<div class="gallery_category" style="margin-bottom:3vh">'+gallery_id_array[id]+'</div><div class="gallery_label">'+label+'</div>';

            myhtml += '<div class="flexslider" id="gallery'+id+'"><ul class="slides">';  //

            for(i = 1; i <= sub_num_array[id][sid]; i++){
                if(i < 10) {k = "00"+i;} else {k = "0"+i;}
                myhtml += 
                    '<li ><a href="photo/'+gallery_id_array[id]+'/'+sub_id_array[id][sid]+'/'+k+'.webp"  data-lightbox="lgbpc">'+
                    '<img src="photo/'+gallery_id_array[id]+'/'+sub_id_array[id][sid]+'/'+k+'.webp" class="lazy"></a></li>'
            }

            myhtml += '</ul></div>';
            $(".modal-window").append(myhtml);
            $("body").addClass("no_scroll");
            $('#overlay, .modal-window').fadeIn();


        $( ".lazy" ).lazyload(
            {
                threshold: 200 ,			// 200pxの距離まで近づいたら表示する
                effect: "fadeIn" ,		// じわじわっと表示させる
                effect_speed: 1500 ,		// 3秒かけて表示させる
            } ) ;


        $('.flexslider').flexslider({
		animation: "slide",
    		animationLoop: true,
                slideshow: false,
                itemWidth: 350,
                itemMargin: 15,
                minItems: 1,
		move: 1
	});
    }


    };


    function opening_load(){

        var myhtml = "",
            k = "";

        $("#gallery").empty();
        myhtml += '<div class="gallery_label"></div>';

    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン

    } else {
        // PC
            myhtml += '<ul class="gallery" id="gallery99">';
            for(id = 0; id <= 7; id++){
                for(i = 0; i < gallery_num_array[id]; i++){
                    myhtml += '<li data-original="photo/'+gallery_id_array[id]+'/'+sub_id_array[id][i]+'/001.webp" class="lazy g'+id+'s'+i+'">'+
			'<div  class="_title">'+sub_id_array[id][i]+'</div></li>'
                }
            }
            myhtml += '</ul></div>';
            $("#gallery").append(myhtml);
            $('.g0s0').on('click', function () {gls('gn_0', '0','HAWAII CALENDAR2021');});
            $('.g0s1').on('click', function () {gls('gn_0', '1','Hawaii Style Calendar 2019');});
            $('.g1s0').on('click', function () {gls('gn_1', '0','KIMURA LAUHARA SHOP _ HAWAII');});
            $('.g1s1').on('click', function () {gls('gn_1', '1','OTA MOKKO _ ODAWARA');});
            $('.g1s2').on('click', function () {gls('gn_1', '2','SNOWPEAK _ TSUBAMESANJO');});
            $('.g1s3').on('click', function () {gls('gn_1', '3','TADAFUSA _ TSUBAMESANJO');});
            $('.g1s4').on('click', function () {gls('gn_1', '4','TAKEUCHI OPTICAL _ SABAE');});
            $('.g1s5').on('click', function () {gls('gn_1', '5','YOSHINORI TAKEMURA');});
            $('.g2s0').on('click', function () {gls('gn_2', '0','今日の晩ごはん');});
            $('.g2s1').on('click', function () {gls('gn_2', '1','フランスの季節を楽しむお菓子作り');});
            $('.g2s2').on('click', function () {gls('gn_2', '2','大豆で美味しい毎日レシピ');});
            $('.g2s3').on('click', function () {gls('gn_2', '3','自慢の煮込み');});
            $('.g2s4').on('click', function () {gls('gn_2', '4','ON THE DISH');});
            $('.g3s0').on('click', function () {gls('gn_3', '0','DISCOVER JAPAN');});
            $('.g3s1').on('click', function () {gls('gn_3', '1','Tokyo Lifestyle Hotel');});
            $('.g4s0').on('click', function () {gls('gn_4', '0','ESTONIA');});
            $('.g4s1').on('click', function () {gls('gn_4', '1','hawaii 01');});
            $('.g4s2').on('click', function () {gls('gn_4', '2','hawaii 02');});
            $('.g4s3').on('click', function () {gls('gn_4', '3','hawaii 03');});
            $('.g4s4').on('click', function () {gls('gn_4', '4','HIMALAYA');});
            $('.g4s5').on('click', function () {gls('gn_4', '5','LATVIA');});
            $('.g5s0').on('click', function () {gls('gn_5', '0','LIFESTYLE');});
            $('.g5s1').on('click', function () {gls('gn_5', '1','LIFESTYLE');});
            $('.g6s0').on('click', function () {gls('gn_6', '0','BIGDOG');});
            $('.g6s1').on('click', function () {gls('gn_6', '1','RERIC');});
    }


        $( ".lazy" ).lazyload(
            {
                threshold: 200 ,			// 200pxの距離まで近づいたら表示する
                effect: "fadeIn" ,		// じわじわっと表示させる
                effect_speed: 1500 ,		// 3秒かけて表示させる
            } ) ;

	$("body,#wrapper").css("background-color",gallery_bgc_array[id]);

    };



    $('#gallery_nav .gallery_nav_item').bind('click', function() {


        var myID = $(this).attr("id");
        var myLabel = $(this).find('.gallery_title').text();

        //ナビアイテムのアクティブ化
        var $navItem = $("#gallery_nav").find('.gallery_nav_item');
        $navItem.removeClass("active");
        $(this).addClass("active");


        var position = $('#gallery').offset().top;
        $("body,html").animate({scrollTop: position}, 1500,  'easeInOutExpo');


        gallery_load(myID, myLabel);
	$('#dropdown-menu').css('display','none');

        $('#nav_wrapper').removeClass('is-visible');

    });





    var $header = $('body');
    var headerHidden = true;

    var outlineTop = $("#header_logo").offset().top;
    var globalnavTop = $("#global_nav").offset().top;
    var gallerynavTop = $("#gallery_nav").offset().top;

    function scroll_effect(){
        if( $(this).scrollTop() > gallerynavTop ) {
            $("#gallery_nav").addClass("sticky");
        } else {
            $("#gallery_nav").removeClass("sticky");
        }

        if( $(this).scrollTop() > globalnavTop ) {
            $("#global_nav").addClass("sticky");
        } else {
            $("#global_nav").removeClass("sticky");
        }

        if( $(this).scrollTop() > outlineTop ) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
        if( $(this).scrollTop() > 550) {
            $("#global_nav").addClass("sticky");
        } else {
            $("#global_nav").removeClass("sticky");
        }

        if( $(this).scrollTop() > 200 ) {
            if( headerHidden ) {
                $header.removeClass("opening");
                headerHidden = false;
            }
        }else {
            if( !headerHidden ) {
                $header.addClass("opening");
                headerHidden = true;
            }
        }
    };

    $(window).scroll(function () {
        scroll_effect();
    });

    scroll_effect();


    var timer = false;
    $(window).resize(function() {
        if (timer !== false) {clearTimeout(timer);}
        timer = setTimeout(function() {
            scroll_effect();
        }, 200);
    });




    var $nav = $('#global_nav');
    $("#smp_btn").click(function (){
        $nav.addClass("is-visible");
        return false;
    });

    $("#profile_btn").click(function (){
        $("#profile_wrapper").addClass("is-visible");
        return false;
    });

    $("#profile_wrapper").click(function (){
        $("#profile_wrapper").removeClass("is-visible");
        return false;
    });

    $(window).load(function() {
        $('body,html').animate({scrollTop:0}, 1, 'easeInOutExpo');
        $("body").css({"opacity":1});
    });

$(function() {
    $('.multiple-item').slick({
          infinite: true,
          dots:true,
          slidesToShow: 6,
          slidesToScroll: 6,
          responsive: [{
               breakpoint: 768,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
               }
          },{
               breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                    }
               }
          ]
     });
});



$(function () {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン
        $('#mobile_nav').css('display','block');


    var $nav = $('#nav_wrapper');
	$('#dropdown').click(function (){
        	$nav.addClass('is-visible');
    	});


    	$('#nav_close').click(function (){
        	$nav.removeClass('is-visible');
	});

    } else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
        // タブレット
	$(function() {
	$('.dropdown').hover(function() {
	$('#dropdown-menu').slideToggle();
	}, function() {
	$('#dropdown-menu').hide();
	});
	});
    } else {
        // PC
	$(function() {
	$('.dropdown').hover(function() {
	$('#dropdown-menu').slideToggle();
	}, function() {
	$('#dropdown-menu').hide();
	});
	});
        opening_load();
        $('#dropdown').click(function (){
		        opening_load();
            var position = $('#gallery').offset().top;
            $("body,html").animate({scrollTop: position}, 1500,  'easeInOutExpo');
    	});
    };
        $('.js-close , #overlay').click(function () {
          $("body").removeClass("no_scroll"); // 背景固定させるクラス削除
          $('#overlay, .modal-window').fadeOut();
        });
});



});