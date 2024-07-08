function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = `${weight}px`;
        document.body.style.textTransform = `${transform}`;
        document.body.style.backgroundColor = `${background}`;
        document.body.style.color = `${color}`;
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!";
    document.body.append(paragraph);
    const spookyButton = document.createElement("button");
    spookyButton.innerHTML = "Spooky";
    document.body.append(spookyButton);
    spookyButton.addEventListener('click', () => {
        spooky();
    })

    const darkModeButton = document.createElement("button");
    darkModeButton.innerHTML = "Dark mode";
    document.body.append(darkModeButton);
    darkModeButton.addEventListener('click', () => {
        darkMode();
    })

    const screamModeButton = document.createElement("button");
    screamModeButton.innerHTML = "Scream mode";
    document.body.append(screamModeButton);
    screamModeButton.addEventListener('click', () => {
        screamMode();
    })

}

main();