function generateCover() {
    const Name = document.getElementById('name').value;
    const Roll_Number = document.getElementById('roll-number').value;
    const Year_Semester = document.getElementById('year-semester').value;
    const Subject = document.getElementById('subject').value;
    const Topicname = document.getElementById('topic-name').value;

    // Correcting the variable name in the if condition
    if (!Name || !Roll_Number || !Year_Semester || !Subject || !Topicname) {
        alert("Please fill all the details");
        return;
    }

    const coverDiv = document.getElementById('cover-page');
    coverDiv.innerHTML = `
        <br><br><br><br><br>
        <h3>Name: ${Name}</h3><br>
        <h3>Roll Number: ${Roll_Number}</h3><br>
        <h3>Year/Semester: ${Year_Semester}</h3><br>
        <h3>Subject/Subject Code: ${Subject}</h3><br>
        <h3>Topic Name: ${Topicname}</h3><br>
    `;
    coverDiv.style.display = 'block';

    document.getElementById('download-btn').style.display = 'block';
}

function downloadCoverPage() {
    const coverPageDiv = document.getElementById('cover-page');

    // Use html2canvas to render the div, scale it up to 1920x1080
    html2canvas(coverPageDiv, {      // Scale the content (optional: adjust to fit the resolution better)
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'cover-page.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
