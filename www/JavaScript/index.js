function showSidebar(bar) {
    const sidebar = document.querySelector("." + bar)
    sidebar.style.display = "flex";
}

function hideSidebar(bar){
    const sidebar = document.querySelector("." + bar)
    sidebar.style.display = "none";
}