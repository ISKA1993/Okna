import './slider'
import modals from './modules/modals'
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import startTimer from './modules/timer';
import img from './modules/img'

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};

    changeModalState(modalState)

    const deadline = new Date('2023-12-12T00:00:00').getTime();
    

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content >div>div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block'  )
    forms(modalState);
    startTimer(deadline);
    img();

})