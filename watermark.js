document.addEventListener("DOMContentLoaded", () => {
    // Create the image placeholder
    const moreGamesLink = document.createElement("a");
    const moreGamesImage = document.createElement("img");

    // Set up the anchor (<a>) element
    moreGamesLink.href = "https://xutilities.github.io/play/"; // Update to your "More Games" URL
    moreGamesLink.target = "_blank"; // Opens link in a new tab
    moreGamesLink.style.position = "fixed";
    moreGamesLink.style.bottom = "10px";
    moreGamesLink.style.left = "10px";
    moreGamesLink.style.zIndex = "10000";

    // Set up the image (<img>) element
    moreGamesImage.src = "https://imgur.com/u4IsjPq.png"; // Placeholder image URL
    moreGamesImage.alt = "More Games Icon";
    moreGamesImage.style.width = "40px"; // Adjust width as needed
    moreGamesImage.style.height = "40px"; // Adjust height as needed
    moreGamesImage.style.objectFit = "contain"; // Keeps the image aspect ratio intact
    moreGamesImage.style.cursor = "pointer";

    // Append the image to the link
    moreGamesLink.appendChild(moreGamesImage);

    // Add the "More Games" link with the image to the webpage
    document.body.appendChild(moreGamesLink);
});
