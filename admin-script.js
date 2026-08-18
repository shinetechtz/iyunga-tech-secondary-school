document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-form');
    const studentList = document.getElementById('student-list');
    const totalStudentsElem = document.getElementById('total-students');

    let students = JSON.parse(localStorage.getItem('students')) || [];
    let editIndex = null;

    // Function ya kuonyesha wanafunzi kwenye Table (READ)
    function renderStudents() {
        studentList.innerHTML = '';

        students.forEach((student, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.fullName}</td>
                <td>${student.regNo}</td>
                <td>${student.gender}</td>
                <td>${student.studentClass}</td>
                <td>
                    <button class="btn-edit" onclick="editStudent(${index})">Edit</button>
                    <button class="btn-delete" onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;
            studentList.appendChild(tr);
        });

        // Update Total Students Count
        totalStudentsElem.textContent = students.length;
        localStorage.setItem('students', JSON.stringify(students));
    }

    // Function ya kuongeza au kubadilisha mwanafunzi (CREATE & UPDATE)
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const regNo = document.getElementById('regNo').value;
        const gender = document.getElementById('gender').value;
        const studentClass = document.getElementById('studentClass').value;

        if (editIndex === null) {
            // Create New Student
            students.push({ fullName, regNo, gender, studentClass });
        } else {
            // Update Existing Student
            students[editIndex] = { fullName, regNo, gender, studentClass };
            editIndex = null;
            document.querySelector('.btn-submit').textContent = 'Add Student';
        }

        studentForm.reset();
        renderStudents();
    });

    // Function ya kumpa fomu data za kuedit (UPDATE Setup)
    window.editStudent = function(index) {
        const student = students[index];
        document.getElementById('fullName').value = student.fullName;
        document.getElementById('regNo').value = student.regNo;
        document.getElementById('gender').value = student.gender;
        document.getElementById('studentClass').value = student.studentClass;

        editIndex = index;
        document.querySelector('.btn-submit').textContent = 'Update Student';
    };

    // Function ya kufuta mwanafunzi (DELETE)
    window.deleteStudent = function(index) {
        if (confirm('Are you sure you want to delete this student record?')) {
            students.splice(index, 1);
            renderStudents();
        }
    };

    // Initial Load
    renderStudents();
});