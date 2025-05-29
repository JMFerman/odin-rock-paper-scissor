const getComputerChoic = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * getComputerChoic.length);
    return getComputerChoic[randomIndex];
}
