document.addEventListener("DOMContentLoaded", function(){
    
    let div1 = document.createElement('div');
    div1.className = "header-container";

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    h1.className = "first";
    h1.appendChild(h1Text);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");
    h2.className = "second";
    h2.appendChild(h2Text);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3");
    h3.className = "third";
    h3.appendChild(h3Text);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4");
    h4.className = "fourth";
    h4.appendChild(h4Text);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5");
    h5.className = "fifth";
    h5.appendChild(h5Text);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6");
    h6.className = "sixth";
    h6.appendChild(h6Text);

    div1.appendChild(h1);
    div1.appendChild(h2);
    div1.appendChild(h3);
    div1.appendChild(h4);
    div1.appendChild(h5);
    div1.appendChild(h6);
    document.body.appendChild(div1);

   
});