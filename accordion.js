document.getElementById('demo').innerHTML = "Hello HTML!";
const accordionItem = document.querySelectorAll('.accordion__item');
accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion__header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggle(item);
        if (openItem && openItem!== item){
            toggle(openItem);
        }
    });

})
const toggle = (item) => {
    const accordionContent = item.querySelector('.accordion__content')
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        // 4. Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}
/*toggle(item)*/