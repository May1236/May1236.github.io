
function showMessage()
{
    let x = 5;
    let name = "Jame"
    let age = 21;
    let bonus = age + 5;
    let school = "SADT";
    let message = "Hey "+ name+", your age is "+ age +" You are qualified to be at "+ school +". You have got a bonus of" + bonus
    alert( message);


}
function checkAge()
{
    let age = 19;
    if (age>=18)
    {
        alert("Hey you can enter the party. You are old enough!")
    }
    else
    {
        alert("Hey, you are too young.")
    }
}
function showMany()
    {
        for(let i=1;i<=10;i=i+1)
        {
            alert("Don't close me! You clicked me "+i +" times")
        }
    }
    function changeColor()
    {
        document.getElementById("main").style.color="red";
        document.getElementById("main").style.backgroundColor="black";
    }
    function changeToLuna()
    {
        document.getElementById("lunasimba").src="https://www.rspcansw.org.au/wp-content/uploads/2025/01/Robbie-and-Coco-016-1-1024x1024.jpg";
    }
    function changeToSimba()
    {
        document.getElementById("lunasimba").src="https://static.wixstatic.com/media/103d43_9ecc1086f64147b9afe8a9c3333b1a1a~mv2.jpg/v1/fill/w_640,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/103d43_9ecc1086f64147b9afe8a9c3333b1a1a~mv2.jpg"
    }
    function changeTheme()
    {
        document.getElementById("css").href="./style/css/styless.css";
    }
    function changeInner()
    {
        document.getElementById("okButton").innerHTML="click me"
    }
    /* function hoverFunction()
    {
        document.getElementById('id').style.background = 'value'
    } */