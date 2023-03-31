export {  rps, rpsls }

let rpsChoices = ['rock', 'paper', 'scissors'];
let rpslsChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// this function takes in a list of choices and returns a randomly selected element from the given list
// taken from https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy and modified by me
function getComputerChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

//this function returns the result of the normal rps game
function rpsResult(player, opp) {
    let res = '';
    if (player == opp) { res = 'tie'; }

    if ((player == 'rock' && opp == 'paper') || (player == 'paper' && opp == 'scissors') || (player == 'scissors' && opp == 'rock')) {
        res = 'lose';
    } else {
        res = 'win';
    }
    return res;
}

function rpslsResult(player, opp) {
    let res = '';
    if (player == opp) { res = 'tie'; }

    if ((player == 'rock' && (opp = 'paper' || opp == 'spock')) ||
         (player == 'paper' && (opp = 'scissors' || opp == 'lizard')) ||
         (player == 'scissors' && (opp = 'spock' || opp == 'rock')) ||
         (player == 'lizard' && (opp = 'rock' || opp == 'scissors')) ||
         (player == 'spock' && (opp = 'lizard' || opp == 'paper'))) {
            res = 'lose';
    } else {
        res = 'win';
    }
    return res;
}

//this funcitons is given a player choice, and  returns an object that contains the player choice, the computer choice, and the result of the match
function rps(shot) {
    let rand = getComputerChoice(rpsChoices);
    let res = ''
    if (shot == null) {
        return { player: rand };
    }
    else {
        shot = shot.toLowerCase();            
        res = rpsResult(shot, rand);
    }
    return {
        player: shot,
        opponent: rand,
        result: res
    }    
}

function rpsls(shot) {
    let rpslsRand = getComputerChoice(rpslsChoices);
    let rpslsRes = ''
    if (shot == null) {
        return { player: rpslsRand };
    }
    else {
        shot = shot.toLowerCase();
        rpslsRes = rpslsResult(shot, rpslsRand);
    }
    return {
        player: shot,
        opponent: rpslsRand,
        result: rpslsRes
    }
}