let btnLoadStudent = document.getElementById("btn-load-students");

btnLoadStudent.addEventListener("click", () => {
  fetch("http://localhost:8080/student")
    .then((response) => response.json())
    .then((json) => {
      let studentTable = document.getElementById("student-list");

      let tableRow = `<tr>
        <td>First Name</td>
        <td>Last Name</td>
        </tr>`;

      json.forEach((element) => {
        tableRow += `<tr>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            </tr>`;
      });
      studentTable.innerHTML = tableRow;
    });
});
