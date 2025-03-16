// makeInterface.js

function makeInterface()
{
    if (ge("main"))
    {
        ge("main").remove();
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "main";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection =  "column";
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = 0 + 'px';
    mainDiv.style.top = 0 + 'px';
    mainDiv.style.height = 400 + "px";
    mainDiv.style.borderRadius = 8 + "px";
    mainDiv.style.padding = 10 + "px";
    mainDiv.style.overflowY = "scroll";
    ba(mainDiv);

    //-//

    let labelHonolulu = ce("div");
    labelHonolulu.id = "labelHonolulu";
    labelHonolulu.className = "titles";
    labelHonolulu.textContent = "HST - Honolulu";
    mainDiv.append(labelHonolulu);

    //-//

    let textBoxHonolulu = ce("input");
    textBoxHonolulu.type = 'text';
    textBoxHonolulu.id = "honoluluTime";
    textBoxHonolulu.placeholder = "Honolulu";
    mainDiv.append(textBoxHonolulu);

    //----//

    let label002 = ce("div");
    label002.id = "label002";
    label002.className = "titles";
    label002.textContent = "PST - California";
    label002.title = 'pst';
    mainDiv.append(label002);

    //-//

    let textBox002 = ce("input");
    textBox002.type = 'text';
    textBox002.id = "pstTime";
    textBox002.placeholder = "California";
    mainDiv.append(textBox002);

    //-//

    let label003 = ce("div");
    label003.id = "label003";
    label003.className = "titles";
    label003.textContent = "MT - Colorado";
    label003.title = 'mtn';
    mainDiv.append(label003);

    //-//

    let textBox003 = ce("input");
    textBox003.type = 'text';
    textBox003.id = "mtTime";
    textBox003.placeholder = "Colorado";
    mainDiv.append(textBox003);

    //-//

    let labelCt = ce("div");
    labelCt.id = "labelCtId";
    labelCt.className = "titles";
    labelCt.textContent = "CT - Kansas, Missouri, Wisconsin";
    labelCt.title = 'ct';
    mainDiv.append(labelCt);

    //-//

    let textBoxCt = ce("input");
    textBoxCt.type = 'text';
    textBoxCt.id = "ctTime";
    textBoxCt.placeholder = "Kansas";
    mainDiv.append(textBoxCt);

    //-//

    let label001 = ce("div");
    label001.id = "label001";
    label001.className = "titles";
    label001.textContent = "EST - Massachusetts, New York, Detroit";
    label001.title = 'est';
    mainDiv.append(label001);

    //-//

    let textBox001 = ce("input");
    textBox001.type = 'text';
    textBox001.id = "estTime";
    textBox001.placeholder = "Massachusetts";
    mainDiv.append(textBox001);

    //-//

    let labelPuertoRico = ce("div");
    labelPuertoRico.id = "labelPuertoRico";
    labelPuertoRico.className = "titles";
    labelPuertoRico.textContent = "AST - Puerto Rico";
    mainDiv.append(labelPuertoRico);

    //-//

    let textBoxPuertoRico = ce("input");
    textBoxPuertoRico.type = 'text';
    textBoxPuertoRico.id = "astTime";
    textBoxPuertoRico.placeholder = "Puerto Rico";
    mainDiv.append(textBoxPuertoRico);

    //-//

    let label004 = ce("div");
    label004.id = "label004";
    label004.className = "titles";
    label004.textContent = "Ireland";
    mainDiv.append(label004);

    //-//

    let textBox004 = ce("input");
    textBox004.type = 'text';
    textBox004.id = "irelandTime";
    textBox004.placeholder = "Ireland";
    mainDiv.append(textBox004);

    //-//

    let label005 = ce("div");
    label005.id = "label005";
    label005.className = "titles";
    label005.textContent = "Ukraine";
    mainDiv.append(label005);

    //-//

    let textBox005 = ce("input");
    textBox005.type = 'text';
    textBox005.id = "ukraineTime";
    textBox005.placeholder = "Ukraine";
    mainDiv.append(textBox005);

    //-//

    let label006 = ce("div");
    label006.id = "label005";
    label006.className = "titles";
    label006.textContent = "Russia";
    mainDiv.append(label006);

    //-//

    let textBox006 = ce("input");
    textBox006.type = 'text';
    textBox006.id = "russiaTime";
    textBox006.placeholder = "Russia";
    mainDiv.append(textBox006);

    //-//

    let labelIran = ce("div");
    labelIran.id = "labelIran";
    labelIran.className = "titles";
    labelIran.textContent = "Iran";
    mainDiv.append(labelIran);

    //-//

    let textBoxIran = ce("input");
    textBoxIran.type = 'text';
    textBoxIran.id = "iranTime";
    textBoxIran.placeholder = "Iran";
    mainDiv.append(textBoxIran);

    //-//

    let labelIndia = ce("div");
    labelIndia.id = "labelIndia";
    labelIndia.className = "titles";
    labelIndia.textContent = "India";
    mainDiv.append(labelIndia);

    //-//

    let textBoxIndia = ce("input");
    textBoxIndia.type = 'text';
    textBoxIndia.id = "indiaTime";
    textBoxIndia.placeholder = "India";
    mainDiv.append(textBoxIndia);

    //-//

    let label007 = ce("div");
    label007.id = "label007";
    label007.className = "titles";
    label007.textContent = "China";
    mainDiv.append(label007);

    //-//

    let textBox007 = ce("input");
    textBox007.type = 'text';
    textBox007.id = "chinaTime";
    textBox007.placeholder = "China";
    mainDiv.append(textBox007);

    //-//

    let labelJapan = ce("div");
    labelJapan.id = "labelJapan";
    labelJapan.className = "titles";
    labelJapan.textContent = "Japan";
    mainDiv.append(labelJapan);

    //-//

    let textBoxJapan = ce("input");
    textBoxJapan.type = 'text';
    textBoxJapan.id = "japanTime";
    textBoxJapan.placeholder = "Japan";
    mainDiv.append(textBoxJapan);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

