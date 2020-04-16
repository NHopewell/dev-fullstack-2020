returnDiceRoll= function(nRolls) {
    // Rolls n dice and returns their respecitive values as an array.
    // Dice rolls are between 1 and 6.
    var allRolls = [];

    for (i=0; i <nRolls; i++) {
        // get random roll from 1 to 6
        var roll = Math.floor( (Math.random() * 6) + 1 );
        // push message
        allRolls.push( roll );
    }

    return allRolls;
}

returnDiceRollStr= function(rollArr, prefix, suffix) {
    // Adds prefix and suffix to all rolls of an array 
    // containing n dice rolls
    var rollsStr = [];

    for (i=0; i<rollArr.length; i++) {
        rollsStr.push(prefix+rollArr[i]+suffix);
    }

    return rollsStr;

}

checkRollResult = function(rollOne, rollTwo) {
    // checks results of rolls, returns winning string
    var msg = "";

    if (rollOne > rollTwo) {
        msg = "Player 1 Wins!";
    } else if (rollTwo > rollOne) {
        msg = "Player 2 Wins!"
    } else {
        msg = "It was a draw. No one wins."
    }

    return msg;

}

// roll die 2 times -> get strs
var rolls = returnDiceRoll(2);
var rollStrs = returnDiceRollStr(rolls, "dice", ".png")

// get rolls fo p1
var dieRollPlayer1 = rolls[0]; 
var dieRollPlayer1Img = rollStrs[0];
//updates p1 roll img
document.querySelector(".playerOne-roll").src = "images/"+dieRollPlayer1Img 


// get rolls for p2
var dieRollPlayer2 = rolls[1]; 
var dieRollPlayer2Img = rollStrs[1];
//updates p2 roll img
document.querySelector(".playerTwo-roll").src = "images/"+dieRollPlayer2Img 

// get results message:
var msg = checkRollResult(rolls[0], rolls[1]);
document.querySelector("#middle .fluid-container .player-row").innerHTML = "<div>"+msg+"</div>";
document.querySelector("#middle .fluid-container .player-row").classList.add("result-message");