const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains('increase')){
            count++;
        }else if (styles.contains('decrease')){
            count--;
        }else {
            count = 0;
        }
        
        value.textContent = count;
    });
});
