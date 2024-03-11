// let nam =("Name : Dr Shumaila Murk");
// let roll =("<br>Roll number : B18159035");
// let teacher =("<br>Teacher name: Miss Shafaq Anees");
// document.write(nam+roll+teacher);

// document.write("<table border =3px>");
// let Surgery = 98;
// let Emergency = 85;
// let Anatomy = 88;
// let Physiology =70;
// let Cardiology = 80;

// document.write("<tr><th bgcolor=gray><center>Subject</th><th bgcolor=gray>Obtained Marks</th><th bgcolor=gray>Marks</th></tr>");
// document.write("<tr><td bgcolor=pink><center>Surgery</td><td bgcolor=pink>",Surgery,"</td><td bgcolor=pink>100</td></tr>");
// document.write("<tr><td bgcolor=pink><center>Emergency</td><td bgcolor=pink>",Emergency,"</td><td bgcolor=pink>100</td></tr>");
// document.write("<tr><td bgcolor=pink><center>Anatomy</td><td bgcolor=pink>",Anatomy,"</td><td bgcolor=pink>100</td></tr>");
// document.write("<tr><td bgcolor=pink><center>Physiology</td><td bgcolor=pink>",Physiology,"</td><td bgcolor=pink>100</td></tr>");
// document.write("<tr><td bgcolor=pink><center>Cardiology</td><td bgcolor=pink>",Cardiology,"</td><td bgcolor=pink>100</td></tr>");

// // Total************

// let total= Surgery+Emergency+Anatomy+Physiology+Cardiology
// document.write("<tr><td bgcolor=pink>Obtained Marks</td><td bgcolor=pink>",total,"</td><td bgcolor=pink>500</td></tr>");

// // percentage
// let per = 421/500*100;
// document.write("<tr><td bgcolor=pink>Percentage</td><td bgcolor=pink>",per,"</td><td bgcolor=pink>out of 100%</td></tr>");

// // Grade************
// if (per>=80)
// {grade = 'A+1'}

// else if (per>=70)
// {grade = 'A'}

// else if (per>=60)
// {grade = 'B'}

// else if (per>=50)
// {grade = 'C'}

// else if (per>=40)
// {grade = 'D'}

// document.write("<tr><td bgcolor=yellow>Grade</td><td>",grade,"</td></tr>");

function press(e){
     document.getElementById("inp").value +=e

}
function eq(){
    var a=document.getElementById("inp")
    a.value=eval(a.value)
}
function clr(){
    document.getElementById("inp").value =''
}
function clr1(){
    var a = document.getElementById("inp")
    a.value = a.value.slice(0,-1)
}

















