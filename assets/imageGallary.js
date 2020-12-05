/*
    Name        : PlayBox Demo Project
    Created By  : K.Deepak Kumar
    Contact at  : deepakplay14@gmail.com
*/

"use strict";
$(document).ready(function(){
    const imageList = ['images/image1.webp',
                    'images/image2.webp',
                    'images/image3.webp',
                    'images/image4.webp',
                    'images/image5.webp',
                    'images/image6.webp',
                    'images/image7.webp'];
    let active = 0;
    const imgListElement = $('.imageList');
    imageList.forEach((item)=>{
        imgListElement.append(`<img src="${item}">`);
    });

    const imgList = imgListElement.children();
    
    const setActive = function (index){
        $(imgList.get(active)).removeClass('active');
        $(imgList.get(index)).addClass('active');
        $('.bgImage').fadeOut(100, function(){
            $(this).attr('src', imageList[index]);
        }).fadeIn(200);
        active = index;
    }
    setActive(0);
    
    $('.arrow').click(function(event){
        const target = $(event.target);
        if(target.hasClass('leftarrow')){
            if(active-1 < 0){
                setActive(imageList.length-1);
            }else{
                setActive(active-1);
            }
        }else if(target.hasClass('rightarrow')){
            if(active+1 >= imageList.length){
                setActive(0);
            }else{
                setActive(active+1);
            }
        }
    });

    imgListElement.click(function(event){
        const target = $(event.target);
        if(target.is('img')){
            setActive(target.index());
        }
    });
});