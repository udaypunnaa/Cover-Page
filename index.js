function generateCover() {
    document.getElementById("out-name").innerText = document.getElementById("name").value;
    document.getElementById("out-rollno").innerText = document.getElementById("rollno").value;
    document.getElementById("out-yearsem").innerText = document.getElementById("yearsem").value;
    document.getElementById("out-subject").innerText = document.getElementById("subject").value;
    document.getElementById("out-topic").innerText = document.getElementById("topic").value;
}

function downloadPNG() {
    html2canvas(document.getElementById("cover")).then(canvas => {
        let link = document.createElement("a");
        link.download = "cover.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    html2canvas(document.getElementById("cover")).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save("cover.pdf");
    });
}