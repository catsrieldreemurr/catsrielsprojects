const projects = document.getElementById("projects");
const textArea = document.getElementById("textArea");

window.onload = function(){

    proj.forEach(element => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML =  `<h2>${element.projName}</h2>`;
        newDiv.innerHTML = `${newDiv.innerHTML} <p> ${element.desc} </p>`;
        newDiv.innerHTML = `${newDiv.innerHTML} <p>This project was uploaded to the ${element.account} github account</p>`;
        newDiv.innerHTML = `${newDiv.innerHTML} <p>Project was released: ${element.date}`;
        newDiv.innerHTML = `${newDiv.innerHTML} <a href="${element.link}">Project link: ${element.projName}</a>`;
        projects.appendChild(newDiv); 
    });
};