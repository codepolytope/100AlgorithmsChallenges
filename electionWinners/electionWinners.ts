function electionsWinners(votes: number[], k: number): number {
    // We are trying to find out how many possible election winners we can have . We are taking in an array of numbers (which are essentiay people running in the race) and K (which is the amount of votes left) and we want to find out how many people can possibly still be a winner .
    // First we need to find out whats the largest vote is . Then we sort the array of votes because in edge cases when there are no votes left we need to find out if there is a winner or not . After that we just keep  track of in-the-running VoteCount and just subtract MostVotes from the CurrenVote and see if its less then the votes left , if it is we add one and we return that .
    let inTheRunning = 0;
    // Will "unwrap" the votes and gives us the Largest value 
    const mostVotes = Math.max(...votes);
    // Will return the largest to smallest vote
    const sortedVotes = votes.sort((a,b) => b - a);
    // In the case that if the largest vote we have is not equal to votes index 1 AND there is no votes left meaning that we have a winner and we dont need to count any votes ,return a one
    if(sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
    }
    // Then we iterate 
    votes.forEach((voteCount) => {
        if(mostVotes - voteCount < k) {
            inTheRunning++;
        }
    });
    // Finally we return whos left in the running 
    return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));