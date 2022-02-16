const answers = ['Rock', 'Paper', 'Scissors']

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

const beatOrBeats = (selection) => selection === 'Scissors' ? 'beat' : 'beats'

function computerPlay() {
    return answers[Math.floor(Math.random() * answers.length)]
}

function playRound(playerSelection, computerSelection) {
    let computerIndex = answers.indexOf(computerSelection)
    let playerIndex = answers.indexOf(playerSelection)
    if (playerIndex === -1) {
        throw new Error('Player chose non-existing choice')
    }
    // weight = { 0: tie, 1: player wins, 2: computer wins }
    let weight = (playerIndex - computerIndex + answers.length) % answers.length
    if (weight === 2)
        weight = -1
    if (weight === 0) {
        console.log(`Tie! Both players chose ${playerSelection}`)
    } else if (weight === 1) {
        console.log(`You Win! ${playerSelection} ${beatOrBeats(playerSelection)} ${computerSelection}`)
    } else if (weight === -1) {
        console.log(`Computer Wins! ${computerSelection} ${beatOrBeats(computerSelection)} ${playerSelection}`)
    }
    return weight
}

function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection
        do {
            playerSelection = capitalize(prompt('Your choice?'))
        } while (!answers.includes(playerSelection))
        const computerSelection = computerPlay()
        score += playRound(playerSelection, computerSelection)
    }
    let res
    if (score > 0) {
        res = 'You won!'
    } else if (score === 0) {
        res = 'Tie!'
    } else {
        res = 'You lost'
    }
    console.log(res)
}

game()