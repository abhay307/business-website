



let btns = document.querySelectorAll(".button button")

let items = document.querySelectorAll(".portTypChild")

btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        let type = btn.getAttribute('data-type');

        items.forEach(img => img.classList.add('hide'));
        
            if (type === "all" ){
               items.forEach(img =>img.classList.remove('hide'));

            }else{
               let selected =Array.from(items).filter(img => img.classList.contains(type));

            selected.slice(0, 2).forEach(img => img.classList.remove('hide'));
            }
        });
    });
