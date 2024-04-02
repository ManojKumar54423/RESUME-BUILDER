//generating cv
function generateCV1()
{
    let nameField=document.getElementById('nameField').value
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML = nameField;
    document.getElementById('nameT2').innerHTML=nameField;
    
    document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;
    document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;
    document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
    document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;
    document.getElementById('gitT').innerHTML=document.getElementById("gitField").value;
    document.getElementById('objectT').innerHTML=document.getElementById("objectField").value;
    document.getElementById('workT').innerHTML=document.getElementById("workField").value;
    document.getElementById('skillT').innerHTML=document.getElementById("skillField").value;
    document.getElementById('degT').innerHTML=document.getElementById("degField").value;
    document.getElementById('interT').innerHTML=document.getElementById("interField").value;
    document.getElementById('sclT').innerHTML=document.getElementById("sclField").value;

    let file=document.getElementById('imageField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function() {
        
    document.getElementById('imageT').src=reader.result;

    }

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template1').style.display="block";


}






//generating cv
function generateCV2()
{
    let nameField=document.getElementById('nameField').value
    let nameT1=document.getElementById('nameT3')
    nameT1.innerHTML = nameField;
    document.getElementById('nameT4').innerHTML=nameField;
    
    document.getElementById('contactT1').innerHTML=document.getElementById("contactField").value;
    document.getElementById('addressT1').innerHTML=document.getElementById("addressField").value;
    document.getElementById('fbT1').innerHTML=document.getElementById("fbField").value;
    document.getElementById('linkedT1').innerHTML=document.getElementById("linkedField").value;
    document.getElementById('gitT1').innerHTML=document.getElementById("gitField").value;
    document.getElementById('objectT1').innerHTML=document.getElementById("objectField").value;
    document.getElementById('workT1').innerHTML=document.getElementById("workField").value;
    document.getElementById('skillT1').innerHTML=document.getElementById("skillField").value;
    document.getElementById('degT1').innerHTML=document.getElementById("degField").value;
    document.getElementById('interT1').innerHTML=document.getElementById("interField").value;
    document.getElementById('sclT1').innerHTML=document.getElementById("sclField").value;

    let file=document.getElementById('imageField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function() {
        
    document.getElementById('imageT1').src=reader.result;

    }

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template2').style.display="block";


}


function generateCV3()
{
    let nameField=document.getElementById('nameField').value
    let nameT1=document.getElementById('nameT5')
    nameT1.innerHTML = nameField;
    document.getElementById('nameT6').innerHTML=nameField;
    
    document.getElementById('contactT2').innerHTML=document.getElementById("contactField").value;
    document.getElementById('addressT2').innerHTML=document.getElementById("addressField").value;
    document.getElementById('fbT2').innerHTML=document.getElementById("fbField").value;
    document.getElementById('linkedT2').innerHTML=document.getElementById("linkedField").value;
    document.getElementById('gitT2').innerHTML=document.getElementById("gitField").value;
    document.getElementById('objectT2').innerHTML=document.getElementById("objectField").value;
    document.getElementById('workT2').innerHTML=document.getElementById("workField").value;
    document.getElementById('skillT2').innerHTML=document.getElementById("skillField").value;
    document.getElementById('degT2').innerHTML=document.getElementById("degField").value;
    document.getElementById('interT2').innerHTML=document.getElementById("interField").value;
    document.getElementById('sclT2').innerHTML=document.getElementById("sclField").value;

    let file=document.getElementById('imageField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function() {
        
    document.getElementById('imageT2').src=reader.result;

    }

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template3').style.display="block";


}


















function printCV()
{
    window.print();
}