document.addEventListener("DOMContentLoaded", function(){
    
    let div = document.createElement('div');
    div.className = "header-container";
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.className = "first";
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    h2.className = "second";
    let h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.className = "third";
    let h3Text = document.createTextNode("This is an h3");
    h3.appendChild(h3Text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.className = "fourth";
    let h4Text = document.createTextNode("This is an h4");
    h4.appendChild(h4Text);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.className = "fifth";
    let h5Text = document.createTextNode("This is an h5");
    h5.appendChild(h5Text);
    div.appendChild(h5);

    let h6 = document.createElement('h6')
    h6.className = "sixth";
    let h6Text = document.createTextNode("This is an h6");
    h6.appendChild(h6Text);
    div.appendChild(h6);


   
   
   

   
});