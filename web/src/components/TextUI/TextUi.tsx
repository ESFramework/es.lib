import { debugData } from '../../utils/debugData'
import './TextUi.css'
import $ from 'jquery'
// This will set the NUI to visible if we are
// developing in browser
debugData([
    {
      action: 'setVisible',
      data: true,
    }
])


const TextUi = () => {
    function removeClass() {
        $("#mainUI").removeClass();
        $("#UiComponent").removeClass();
    }
    let location = '';
    let anim = '';
    window.addEventListener('message', function(event) {
        let data = event.data
        if (data.action == 'open_textui') { 
            let position =  data.position;
            let message = data.message;
            let transition = data.transition;
            let theme = data.theme;
            let colour = data.colour;
            $('#txtmessage').html(message);
            console.log('show');
            
            if (position == 'right') {
                
                if (transition == 'slide') {
                    $('#TextUi').css('left', '');
                    $('#TextUi').css('right', '1%');
                    $('#TextUi').removeClass('slide-out-right');
                    $('#TextUi').removeClass('slide-in-left');
                    $('#TextUi').removeClass('bounce-in-right');
                    $('#TextUi').removeClass('bounce-out-right');
                    $('#TextUi').addClass('slide-in-right');
                    location = 'right';
                    anim = 'slide';
                } else if (transition == 'bounce') {
                    $('#TextUi').css('left', '');
                    $('#TextUi').css('right', '1%');
                    $('#TextUi').removeClass('slide-out-right');
                    $('#TextUi').removeClass('slide-in-right');
                    $('#TextUi').removeClass('bounce-in-left');
                    $('#TextUi').removeClass('bounce-out-left');
                    $('#TextUi').removeClass('bounce-out-right');
                    $('#TextUi').addClass('bounce-in-right');
                    location = 'right';
                    anim = 'bounce';
                }
            }

            if (position == 'left') {
                
                if (transition == 'slide') {
                    $('#TextUi').css('right', '');
                    $('#TextUi').css('left', '1%');
                    $('#TextUi').removeClass('slide-out-left');
                    $('#TextUi').removeClass('slide-in-right');
                    $('#TextUi').removeClass('slide-out-right');
                    $('#TextUi').removeClass('bounce-in-left');
                    $('#TextUi').removeClass('bounce-out-left');
                    $('#TextUi').addClass('slide-in-left');
                    location = 'left';
                    anim = 'slide';
                } else if (transition == 'bounce') {
                    $('#TextUi').css('right', '');
                    $('#TextUi').css('left', '1%');
                    $('#TextUi').removeClass('slide-out-left');
                    $('#TextUi').removeClass('slide-in-left');
                    $('#TextUi').removeClass('bounce-out-left');
                    $('#TextUi').removeClass('bounce-in-right');
                    $('#TextUi').removeClass('bounce-out-right');
                    $('#TextUi').addClass('bounce-in-left');
                    location = 'left';
                    anim = 'bounce';
                }
            }

            if (theme == "white") {
                if (colour == 'lightblue') {
                    removeClass();
                    $('#mainUI').addClass('lightblue-icon');
                    $('#UiComponent').addClass('lightblue lightblue-border');
                }
                else if (colour == 'darkblue') {
                    removeClass();
                    $('#mainUI').addClass('darkblue-icon');
                    $('#UiComponent').addClass('darkblue darkblue-border');
                }
                else if (colour == 'red') {
                    removeClass();
                    $('#mainUI').addClass('red-icon');
                    $('#UiComponent').addClass('red red-border');
                }
                else if (colour == 'black') {
                    removeClass();
                    $('#mainUI').addClass('black-icon');
                    $('#UiComponent').addClass('black black-border');
                }
                else if (colour == 'green') {
                    removeClass();
                    $('#mainUI').addClass('green-icon');
                    $('#UiComponent').addClass('green green-border');
                }
                else if (colour == 'yellow') {
                    removeClass();
                    $('#mainUI').addClass('yellow-icon');
                    $('#UiComponent').addClass('yellow yellow-border');
                }
                else if (colour == 'orange') {
                    removeClass();
                    $('#mainUI').addClass('orange-icon');
                    $('#UiComponent').addClass('orange orange-border');
                }
                else if (colour == 'cyan') {
                    removeClass();
                    $('#mainUI').addClass('cyan-icon');
                    $('#UiComponent').addClass('cyan cyan-border');
                }
            }

            if (theme == "dark") {
                if (colour == 'lightblue') {
                    removeClass();
                    $('#mainUI').addClass('lightblue2-icon');
                    $('#UiComponent').addClass('lightblue2 lightblue2-border');
                }
                else if (colour == 'darkblue') {
                    removeClass();
                    $('#mainUI').addClass('darkblue2-icon');
                    $('#UiComponent').addClass('darkblue2 darkblue2-border');
                }
                else if (colour == 'red') {
                    removeClass();
                    $('#mainUI').addClass('red2-icon');
                    $('#UiComponent').addClass('red2 red2-border');
                }
                else if (colour == 'white') {
                    removeClass();
                    $('#mainUI').addClass('white-icon');
                    $('#UiComponent').addClass('white white-border');
                }
                else if (colour == 'green') {
                    removeClass();
                    $('#mainUI').addClass('green2-icon');
                    $('#UiComponent').addClass('green2 green2-border');
                }
                else if (colour == 'yellow') {
                    removeClass();
                    $('#mainUI').addClass('yellow2-icon');
                    $('#UiComponent').addClass('yellow2 yellow2-border');
                }
                else if (colour == 'orange') {
                    removeClass();
                    $('#mainUI').addClass('orange2-icon');
                    $('#UiComponent').addClass('orange2 orange2-border');
                }
                else if (colour == 'cyan') {
                    removeClass();
                    $('#mainUI').addClass('cyan2-icon');
                    $('#UiComponent').addClass('cyan2 cyan2-border');
                }
            }

        } else if (data.action == 'hidetextui') {
            if (location == 'left') {
                if (anim == 'slide') {
                    $('#TextUi').removeClass('slide-out-right');
                    $('#TextUi').removeClass('slide-in-right');  
                    $('#TextUi').removeClass('bounce-in-left');
                    $('#TextUi').removeClass('bounce-out-left');
                    $('#TextUi').removeClass('bounce-in-right');
                    $('#TextUi').removeClass('bounce-out-right');
                    $('#TextUi').removeClass('slide-in-left');
                    $('#TextUi').addClass('slide-out-left');
                    location = '';
                    anim = '';
                    console.log('hide slide');
                } else if (anim == 'bounce') {
                    $('#TextUi').removeClass('slide-out-right');
                    $('#TextUi').removeClass('slide-in-right');
                    $('#TextUi').removeClass('slide-out-left');
                    $('#TextUi').removeClass('slide-in-left');
                    $('#TextUi').removeClass('bounce-out-right');
                    $('#TextUi').removeClass('bounce-in-right');
                    $('#TextUi').removeClass('bounce-in-left');
                    $('#TextUi').addClass('bounce-out-left');
                    location = '';
                    anim = '';
                    console.log('hide bounce');
                }
            }
            if (location == 'right') {
                if (anim == 'slide') {
                    $('#TextUi').removeClass('slide-out-left');
                    $('#TextUi').removeClass('slide-in-left');  
                    $('#TextUi').removeClass('bounce-out-left');
                    $('#TextUi').removeClass('bounce-in-left');
                    $('#TextUi').removeClass('bounce-in-right');
                    $('#TextUi').removeClass('bounce-out-right');
                    $('#TextUi').removeClass('slide-in-right');
                    $('#TextUi').addClass('slide-out-right');
                    location = '';
                    anim = '';
                    console.log('hide slide');
                } else if (anim == 'bounce') {
                    $('#TextUi').removeClass('slide-out-left');
                    $('#TextUi').removeClass('slide-in-left');
                    $('#TextUi').removeClass('slide-out-right');
                    $('#TextUi').removeClass('slide-in-right');
                    $('#TextUi').removeClass('bounce-in-left');
                    $('#TextUi').removeClass('bounce-out-left');
                    $('#TextUi').removeClass('bounce-in-right');
                    $('#TextUi').addClass('bounce-out-right');
                    location = '';
                    anim = '';
                    console.log('hide bounce');
                }
            }
        }
    })
  return (
    <div id="TextUi" className='noselect'>
        <div id="UiComponent">
            <div id="mainUI">
                <div id="txtmessage"></div>
            </div>
        </div>
    </div>
  )
}

export default TextUi