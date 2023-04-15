const projects = [
    { name: "Console Based Shopping Application", technology: "C" },
    { name: "Window forms based Shopping Application", technology: "C# Windows Forms" },
    { name: "Artificial Neural Network with linked lists", technology: "C++" },
    { name: "Linux System call handling the dining philosophers problem", technology: "Linux + C" },
    { name: "Decoration Ecommerce Website", technology: "Python Django" },
    { name: "Product Title Classification", technology: "Python Keras and tensorflow / AI" },
    { name: "Image Forgery Detection", technology: "Python OpenCV" },
    { name: "Multilabel Image Classification on ImageNet 2013 dataset", technology: "Python Keras and Tensorflow" },

];

const courses = [
    "Maths",
    "Physics",
    "Urdu",
    "English",
    "Sindhi",
    "Computer",
    "Calculus",
    "Programming Fundamentals",
    "OOP",
    "DS",
    "OS",
    "DB",
    "CN",
    "Information Security",
    "DLP",
    "DevOps"

];


function filterProjects() {
    let filterInput = document.getElementById("filterInput");
    let projectsList = document.getElementById("projectsList");
    let filter = filterInput.value.toUpperCase();
    let filteredProjects = projects.filter(project => project.technology.toUpperCase().includes(filter));

    projectsList.innerHTML = "";
    filteredProjects.forEach(project => {
        let projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.textContent = project.name + " (" + project.technology + ")";
        projectsList.appendChild(projectDiv);
    });
}


function populateCourses() {
    console.log("Here")
    let coursesList = document.getElementById("coursesList");

    courses.forEach(course => {
        let courseLi = document.createElement("li");
        courseLi.className = "course";
        courseLi.textContent = course;
        coursesList.appendChild(courseLi);
    });
}

function showProjects(){
    let projectsList = document.getElementById("projectsList");
    console.log(projectsList)
    projects.forEach(project => {
        let projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.textContent = project.name + " (" + project.technology + ")";
        projectsList.appendChild(projectDiv);
    });
}

