function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    // We are taking in some Number, we are going to have changes which are going to have a backup time and and id which going along with that backup time. What we want is the changes that have taking place where we have a unique ids for them.
    const fileIds: number[] = [];

    for(let change of changes){
        if(change[0] > lastBackupTime){
            if(!fileIds.includes(change[1])){
                fileIds.push(change[1]);      
            }
        }
    }

    return fileIds.sort((a,b) => a - b);
}

console.log(incrementalBackups(461620205, [[461620203, 1], 
                                           [461620204, 2], 
                                           [461620205, 6],
                                           [461620206, 5], 
                                           [461620207, 3], 
                                           [461620207, 5], 
                                           [461620208, 1]]));
