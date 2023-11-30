
const images = () =>{
    const impPopup = document.createElement('div'),
          workSectiom = document.querySelector('.works'),
          bigImage = document.createElement('img');

    impPopup.classList.add('popup');
    workSectiom.appendChild(impPopup);

    impPopup.style.justifyContent = 'center';
    impPopup.style.alignItems = 'center';
    impPopup.style.display = 'none';

    impPopup.appendChild(bigImage);

    workSectiom.addEventListener('click', (e) =>{
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            impPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')){
            impPopup.style.display = 'none';
        }
    })

}

export default images;