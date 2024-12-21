function showSidebar(bar) {
    const sidebar = document.querySelector("." + bar)

    sidebar.style.display = "flex";

    if(bar === "sidebar") {
        const otherBar = "l-sidebar";
        hideSidebar(otherBar);
    }
    else if(bar === "l-sidebar") {
        const otherBar = "sidebar";
        hideSidebar(otherBar);
    }
}

function hideSidebar(bar){
    const sidebar = document.querySelector("." + bar)

    sidebar.style.display = "none";
}

const mediaQuery = window.matchMedia('(min-width: 826px)');

mediaQuery.addEventListener('change', () => hideSidebar("sidebar"));
