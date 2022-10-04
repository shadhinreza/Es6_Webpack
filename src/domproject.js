// alert('hi')
// let btn = document.getElementById('btn')
// btn.addEventListener('click', amar)
// function amar(){
// document.getElementById('hyper').setAttribute('href', 'https://www.amazon.com/')
// }

window.onload = () => {
    return main()
}

function main(){
    let changebtn = document.getElementById('change-btn');
    let body = document.body;
    changebtn.addEventListener('click', function(){
        let bgColor = RGBgenarator();
        body.style.backgroundColor = bgColor;
    })
}

function RGBgenarator(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}
