import changeNumInput from "./changeNumInput";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
         input = document.querySelectorAll('input');

         changeNumInput('input[name="user_phone"]');

    const message = {
        loading: 'Loading',
        success: 'Success',
        error: 'Error'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    const clearInput = () => {
        input.forEach(item => {
            item.value = '';
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) =>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end"){
                for(let key in state){
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res)
                    statusMessage.textContent = message.success;
                })
                .catch(()=> statusMessage.textContent = message.error)
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000)
                })

        })
    });
}

export default forms;