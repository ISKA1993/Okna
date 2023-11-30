import changeNumInput from "./changeNumInput";


const changeModalState = (state) =>{
    const windowsForm = document.querySelectorAll('.balcon_icons img'),
         windowWidth = document.querySelectorAll('#width'),
         windowHeight = document.querySelectorAll('#height'),
         windowType = document.querySelectorAll('#view_type'),
         windowProfile = document.querySelectorAll('.checkbox');

        changeNumInput('#width')
        changeNumInput('#height')

    

        function bindActionElements (event, elem, prop) {
            elem.forEach((item, i) =>{
                item.addEventListener(event, () =>{
                    switch (item.nodeName){
                        case 'SPAN':
                            state[prop] = i
                            break;
                        case 'IMG':
                            state['form'] = i; 
                            break;
                        case 'INPUT':
                            if (item.getAttribute('type') === 'checkbox'){
                                i === 0 ? state[prop] = 'Холодное': state[prop] = 'Teплое';
                                elem.forEach((box, j) =>{
                                    box.checked = false;
                                    if(i == j) {
                                        box.checked = true
                                    }
                                });                                
                            }else{
                                state[prop] = item.value;
                            }
                            break;
                        case 'SELECT': 
                            state[prop] = item.value;
                            break;
                    }
                });
             })
             
        }

        bindActionElements('click', windowsForm, 'form');
        bindActionElements('input', windowHeight, 'height');
        bindActionElements('input', windowWidth,'width');
        bindActionElements('change', windowType, 'type');
        bindActionElements('change', windowProfile, 'profile')
        

         
}

export default changeModalState