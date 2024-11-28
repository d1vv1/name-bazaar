//Copy url to clipboard:
const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText('https://www.google.com')
        .then(() => {
            alert("URL copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
});

//Show and hide sidebar buttons functionality

function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none";
}