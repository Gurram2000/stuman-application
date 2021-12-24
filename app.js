const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});



showData();
function saveData()
{
let redgno,name,email,dept;

redgno=document.getElementById("redgno").value;
name=document.getElementById("name").value;
email=document.getElementById("email").value;

dept=document.getElementById("dept").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "redgno":redgno,
  "name":name,
  "email":email,
  "dept":dept
})
localStorage.setItem("users",JSON.stringify(user_records));
document.getElementById("redgno").value="";
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("dept").value="";
alert("Your Data Has Been Saved SucessFully");

}
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {

      console.log(user_records);
      var showUsers = document.getElementById('showUsers');
      var tr = "<tr>";
      tr += "<td>" + user_records[i].redgno + "</td>";
      tr += "<td>" + user_records[i].name  + "</td>";
      tr += "<td>" + user_records[i].email  + "</td>";
      tr += "<td>" + user_records[i].dept + "</td></tr>";
      showUsers.innerHTML += tr;
  

    }
  }
  }