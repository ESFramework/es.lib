var message = "this is test"
function removeClass() {
	$("#mainUI").removeClass();
	$("#UiComponent").removeClass();
}
export function TestUIRight (){
    console.log("trigger");
	$('#txtmessage').html(message);
    $('#TextUi').css('left', '');
    $('#TextUi').css('right', '1%');
    $('#TextUi').removeClass('slide-out-right');
    $('#TextUi').removeClass('showleft');
    $('#TextUi').removeClass('bounce-in-right');
    $('#TextUi').removeClass('bounce-out-right');
    $('#TextUi').addClass('slide-in-right');
    removeClass();
	$('#mainUI').addClass('lightblue-icon');
	$('#UiComponent').addClass('lightblue lightblue-border');
}
export function TestUIHideRight() {
    console.log("hide");
    $('#TextUi').removeClass('hideleft');
    $('#TextUi').removeClass('showleft');  
    $('#TextUi').removeClass('bounce-out-left');
    $('#TextUi').removeClass('bounce-in-left');
    $('#TextUi').removeClass('bounce-in-right');
    $('#TextUi').removeClass('bounce-out-right');
    $('#TextUi').removeClass('slide-in-right');
    $('#TextUi').addClass('slide-out-right');
    // setTimeout(() => {
    //     $('#TextUi').css('right', '-100%');
    // }, 10000);
}

export function TestUILeft (){
    console.log("trigger");
    $('#txtmessage').html(message);
    $('#TextUi').css('right', '');
    $('#TextUi').css('left', '1%');
    $('#TextUi').removeClass('slide-out-left');
    $('#TextUi').removeClass('showright');
    $('#TextUi').removeClass('hideright');
    $('#TextUi').removeClass('bounce-in-left');
    $('#TextUi').removeClass('bounce-out-left');
    $('#TextUi').addClass('slide-in-left');
    removeClass();

	$('#mainUI').addClass('cyan-icon');
	$('#UiComponent').addClass('cyan cyan-border');

}
export function TestUIHideLeftt() {
    console.log("hide");
    $('#TextUi').removeClass('hideright');
    $('#TextUi').removeClass('showright');  
    $('#TextUi').removeClass('bounce-in-left');
    $('#TextUi').removeClass('bounce-out-left');
    $('#TextUi').removeClass('bounce-in-right');
    $('#TextUi').removeClass('bounce-out-right');
    $('#TextUi').removeClass('slide-in-left');
    $('#TextUi').addClass('slide-out-left');
    // setTimeout(() => {
    //     $('#TextUi').css('right', '-100%');
    // }, 10000);
}