(()=>{
    const menu = ()=>{
        var menuShow = document.querySelector('.menu-action');
        const toggle = ()=>{
            let menu = document.querySelector('.menu-hollie');
            if(menu.classList.contains('active')){
                menu.classList.remove('active');
                document.body.style.overflowY = 'initial'
                document.body.style.overflowX = 'hidden'
            }else{
                menu.classList.add('active');
                document.body.style.overflow = 'hidden'
            }
            
        }
        menuShow.addEventListener('click',toggle);
    }
    menu()
})();