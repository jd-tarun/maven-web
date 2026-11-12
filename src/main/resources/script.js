// Sample student dataset (Name, ID, Department)
const students = [
    { id: "CS-101", name: "Alice Smith", department: "Computer Science" },
    { id: "CS-102", name: "Bob Jones", department: "Computer Science" },
    { id: "CS-103", name: "Charlie Brown", department: "Computer Science" },
    { id: "CS-104", name: "Diana Prince", department: "Computer Science" }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("student-list");

    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card";
        card.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Department:</strong> ${student.department}</p>
        `;
        container.appendChild(card);
    });
});