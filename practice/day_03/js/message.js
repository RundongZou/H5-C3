/*
* @Author: Marte
* @Date:   2016-11-23 19:48:14
* @Last Modified by:   Marte
* @Last Modified time: 2016-11-23 21:29:07
*/

'use strict';
$(document).ready(function(){
    var $username = $(".username");
    var $message = $("#message");
    //检测输入框里的内容是否为空
    function detect($username,$message){
        return $username.val() !== '' && $message.val() !== '';
    }

    function displayMessage(){
         for(var key in localStorage){
               $(".messageList").append('<div>'+key+"说道： "+localStorage[key]+'</div>');
           }
    }


    $(".btn").click(function(){
        $(".messageList").html('');
        if(detect($username,$message)){
           localStorage.setItem($username.val(),$message.val());
           $username.val('');
           $message.val('');
            displayMessage();
        }else{
            alert("输入有误，请仔细检查");
        }
    })






})