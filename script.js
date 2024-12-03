document.addEventListener("DOMContentLoaded", () => {
    const highlights = document.querySelectorAll(".highlight");
    const tooltipBox = document.getElementById("tooltip-box");
    const tooltipText = document.getElementById("tooltip-text");
    const closeTooltip = document.getElementById("close-tooltip");

    highlights.forEach((highlight) => {
        highlight.addEventListener("mouseover", () => {
            const rect = highlight.getBoundingClientRect();
            tooltipText.textContent = highlight.getAttribute("data-detail");

            if (window.innerWidth > 600) {
                tooltipBox.classList.remove("small-screen");
                tooltipBox.style.top = `${rect.top + window.scrollY}px`;
                tooltipBox.style.left = `${rect.right + 10}px`;
                tooltipBox.style.display = "block";
            }
        });

        highlight.addEventListener("mouseout", () => {
            if (!tooltipBox.classList.contains("small-screen")) {
                tooltipBox.style.display = "none";
            }
        });

        highlight.addEventListener("click", () => {
            if (window.innerWidth <= 600) {
                tooltipBox.classList.add("small-screen");
                tooltipText.textContent = highlight.getAttribute("data-detail");
                tooltipBox.style.display = "block";
            }
        });
    });

    closeTooltip.addEventListener("click", () => {
        tooltipBox.style.display = "none";
    });
});
