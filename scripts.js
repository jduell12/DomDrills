document.addEventListener("DOMContentLoaded", function () {

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

    //An array of 8 colors
    let colors = ['red', 'orange', 'green', 'blue', 'purple', 'yellow', 'brown', 'white'];

    //Event Listeners that change the color of the headings text to a random color from the colors array when the heading is double clicked
    h1.addEventListener('dblclick', function () {
        let randNum = Math.floor(Math.random() * colors.length);
        h1.style.color = colors[randNum];
    });

    h2.addEventListener('dblclick', function () {
        let randNum = Math.floor(Math.random() * colors.length);
        h2.style.color = colors[randNum];
    });

    h3.addEventListener('dblclick', function () {
        let randNum = Math.floor(Math.random() * colors.length);
        h3.style.color = colors[randNum];
    });

    h4.addEventListener('dblclick', function () {
        let randNum = Math.floor(Math.random() * colors.length);
        h4.style.color = colors[randNum];
    });

    h5.addEventListener('dblclick', function () {
        let randNum = Math.floor(Math.random() * colors.length);
        h5.style.color = colors[randNum];
    });

    h6.addEventListener('dblclick', function () {
        let randNum = Math.floor(Math.random() * colors.length);
        h6.style.color = colors[randNum];
    });

    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let btn = document.getElementsByTagName('button')[0];
    let listNum = 1;

    //Event listener that lists an item everytime the button is clicked 
    btn.addEventListener('click', function () {
        let li = document.createElement('li');
        let li1 = document.createTextNode("This is list item " + listNum);
        li.appendChild(li1);
        document.body.appendChild(li);
        listNum++;
        //Event listener that changes the color of the font of a list item if it is clicked once. The font color chnages to one of the colors in the array colors at random
        li.addEventListener('click', function () {
            let randNum = Math.floor(Math.random() * colors.length);
            li.style.color = colors[randNum];
        })
        //Event listener that removes a list item if it is double clicked
        li.addEventListener('dblclick', function(){
            this.remove();
        })
    });



});

