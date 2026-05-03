fetch("data/projects.json")
    .then(response => response.json())
    .then(data => {

        let projects = data.club.projects;
        let table = document.getElementById("projectTable");

        projects.forEach(project => {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${project.title}</td>
                <td>${project.details.difficulty}</td>
                <td>${project.details.info.motors}</td>
                <td>${project.details.info.sensors}</td>
            `;

            table.appendChild(row);
        });

    })
    .catch(error => {
        console.log("Error loading JSON:", error);
    });