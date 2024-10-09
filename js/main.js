const nameField = document.getElementById("nameField");
const descField = document.getElementById("descField");
const userField = document.getElementById("userField");
const siteLink = document.getElementById("siteLink");
const dateField = document.getElementById("dateField");

window.onload = function(){
    let totalProj = proj.length;
    totalProj--;

    nameField.innerHTML = proj[totalProj].projName;
    descField.innerHTML = proj[totalProj].desc;
    userField.innerHTML = `This project was uploaded to the ${proj[totalProj].account} github account.`
    dateField.innerHTML = `Project was released: ${proj[totalProj].date}`
    
    siteLink.innerHTML = `Project link: ${proj[totalProj].projName}`;
    siteLink.setAttribute("href", proj[totalProj].link)
}