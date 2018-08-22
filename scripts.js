document.addEventListener("DOMContentLoaded", function(){
    let div1 = document.createElement('div');
    div1.className = "header-container";

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text);

    div1.appendChild(h1);
    div1.appendChild(h2);
    document.body.appendChild(div1);

   
});