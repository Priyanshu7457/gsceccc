let data = "./Ccc notes-2.pdf";
let myState = {
    pdf: null,
    currentPage: 1,
    zoom: 1,
};

// Load PDF when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    pdfjsLib.getDocument(data).then((pdf) => {
        myState.pdf = pdf;
        // Call the render function after the PDF is fully loaded
        render();
    });
});

function render() {
    // Check if the PDF is fully loaded before rendering
    if (myState.pdf !== null) {
        myState.pdf.getPage(myState.currentPage).then((page) => {
            let canvas = document.getElementById("pdf_renderer");
            let ctx = canvas.getContext("2d");

            let viewport = page.getViewport(myState.zoom);
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            page.render({
                canvasContext: ctx,
                viewport: viewport,
            });
        });
    } else {
        // Handle the case where the PDF is not fully loaded yet
        console.log("PDF is not fully loaded yet.");
    }
}




document.getElementById("go_previous").addEventListener("click", (e) => {
    if (myState.pdf == null || myState.currentPage == 1) return;
    myState.currentPage -= 1;
    document.getElementById("current_page").innerHTML = myState.currentPage;
    render();
});
document.getElementById("go_next").addEventListener("click", (e) => {
    if (
        myState.pdf == null ||
        myState.currentPage > myState.pdf._pdfInfo.numPages
    )
        return;
    myState.currentPage += 1;
    document.getElementById("current_page").innerHTML = myState.currentPage;
    render();
});
document.getElementById("current_page").addEventListener("keypress", (e) => {
    if (myState.pdf == null) return;
    // Get key code
    let code = e.keyCode ? e.keyCode : e.which;

    // If key code matches that of the Enter key
    if (code == 13) {
        let desiredPage = document.getElementById("current_page").valueAsNumber;

        if (desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
            myState.currentPage = desiredPage;
            document.getElementById("current_page").value = desiredPage;
            render();
        }
    }
});
document.getElementById("zoom_in").addEventListener("click", (e) => {
    if (myState.pdf == null) return;
    myState.zoom += 0.5;
    render();
});
document.getElementById("zoom_out").addEventListener("click", (e) => {
    if (myState.pdf == null) return;
    myState.zoom -= 0.5;
    render();
});
