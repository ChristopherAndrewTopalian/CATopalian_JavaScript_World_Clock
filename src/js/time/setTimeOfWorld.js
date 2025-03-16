// setTimeOfWorld.js

function setTimeOfWorld()
{
    let theDate = new Date();

    let hours = theDate.getHours();

    let theMinutes = theDate.getMinutes();

    let amOrPm;

    let currentTime = hours + ":" + theMinutes + " " + amOrPm;

    let honolulu = new Date().toLocaleString('en-US',
    {
        timeZone: 'Pacific/Honolulu'
    });

    let california = new Date().toLocaleString('en-US',
    {
        timeZone: 'America/Los_Angeles'
    });

    let boston = new Date().toLocaleString('en-US',
    {
        timeZone: 'America/New_York'
    });

    let puertoRico = new Date().toLocaleString('en-US',
    {
        timeZone: 'America/Puerto_Rico'
    });

    let ireland = new Date().toLocaleString('en-US',
    {
        timeZone: 'Europe/Dublin'
    });

    let colorado = new Date().toLocaleString('en-US',
    {
        timeZone: 'America/Denver'
    });

    let texas = new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago'
    });

    let england = new Date().toLocaleString('en-US',
    {
        timeZone: 'Europe/London'
    });

    let kiev = new Date().toLocaleString('en-US',
    {
        timeZone: 'Europe/Kiev'
    });

    let russia = new Date().toLocaleString('en-US',
    {
        timeZone: 'Europe/Moscow'
    });

    let iran = new Date().toLocaleString('en-US',
    {
        timeZone: 'Asia/Tehran'
    });

    let india = new Date().toLocaleString('en-US', {
        timeZone: 'Indian/Cocos'
    });

    let china = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Hong_Kong'
    });

    let japan = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo'
    });

    //-//

    // am or pm
    if (hours < 12)
    {
        amOrPm = "am";
    }
    else
    {
        amOrPm = "pm"
    }

    //-//

    // conver from military time
    if (hours > 12)
    {
        hours -= 12;
    }
    else if (hours === 0)
    {
       hours = 12;
    }

    //-//

    // add a zero if less than 10
    if (theMinutes < 10)
    {
        theMinutes = "0" + theMinutes;
    }

    // set the value from the specified textBox input

    ge("honoluluTime").value = honolulu;

    ge("pstTime").value = california;

    ge("mtTime").value = colorado;

    ge("ctTime").value = texas;

    ge("estTime").value = boston;

    ge("astTime").value = puertoRico;

    ge("irelandTime").value = ireland;

    ge("ukraineTime").value = kiev;

    ge("russiaTime").value = russia;

    ge("iranTime").value = iran;

    ge("indiaTime").value = india;

    ge("chinaTime").value = china;

    ge("japanTime").value = japan;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

