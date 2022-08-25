function canMove(piece, startingPos, finishPos){
    let sLetter = startingPos.charAt(0);
    let sNum = startingPos.charAt(1);
    let fLetter = finishPos.charAt(0);
    let fNum = finishPos.charAt(1);
    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let finalB = false;
    if(piece == 'Pawn'){
        if(sLetter == fLetter){
            let absDiff = Math.abs(sNum - fNum);
            if(absDiff == 2 || absDiff == 1){
                finalB = true;
            } 
        }
    }
    if(piece == 'Knight'){ //Knight needs work come back later
        let absOfIndex = Math.abs(letterArray.indexOf(sLetter) - letterArray.indexOf(fLetter));
        if(absOfIndex <= 2 && absOfIndex != 0){
            let absOfNum = Math.abs(sNum - fNum);
            if(absOfIndex == 1){
                if(absOfNum == 2){
                    finalB = true;
                }
            }else if(absOfIndex == 2){
                if(absOfNum == 1){
                    finalB= true;
                }
            }
        }
    }
    if(piece == 'Bishop'){
        if(sLetter != fLetter){
            let absOfIndex =  Math.abs(letterArray.indexOf(sLetter) - letterArray.indexOf(fLetter));
            let absOfNum = Math.abs(sNum - fNum);
            if(absOfNum <= absOfIndex){
                finalB = true;
            }
        }
    }
    if(piece == 'Rook'){
         if(sLetter == fLetter){
            let absOfNum = Math.abs(sNum - fNum);
            if(absOfNum > 0){
                finalB = true;
            }
         }else if(sNum == fNum){
            let absOfIndex =  Math.abs(letterArray.indexOf(sLetter) - letterArray.indexOf(fLetter));
            if(absOfIndex > 0){
                finalB =  true;
            }
         }
    }
    if(piece == 'Queen'){
        if(sLetter == fLetter){
            //Rook Move Type
            let absOfNum = Math.abs(sNum - fNum);
            if(absOfNum > 0){
                finalB = true;
            }
         }else if(sNum == fNum){
            //Rook Move Type
            let absOfIndex =  Math.abs(letterArray.indexOf(sLetter) - letterArray.indexOf(fLetter));
            if(absOfIndex > 0){
                finalB =  true;
            }
         }else if(sLetter != fLetter){
            //Bishop Move Type
            let absOfIndex =  Math.abs(letterArray.indexOf(sLetter) - letterArray.indexOf(fLetter));
            let absOfNum = Math.abs(sNum - fNum);
            if(absOfNum <= absOfIndex){
                finalB = true;
            }
        }
    }
    if(piece == 'King'){
        if(sLetter == fLetter){
            let absOfNum = Math.abs(sNum - fNum);
            if(absOfNum == 1){
                finalB = true;
            }
        }else if(sNum == fNum){
            let absOfIndex =  Math.abs(letterArray.indexOf(sLetter) - letterArray.indexOf(fLetter));
            if(absOfIndex == 1) finalB = true;
        }else if(sLetter != fLetter){
            let absOfIndex =  Math.abs(letterArray.indexOf(sLetter) - letterArray.indexOf(fLetter));
            let absOfNum = Math.abs(sNum - fNum);
            if(absOfIndex == 1 && absOfNum == 1) finalB = true;
        }
    }

    return finalB;
}

console.log(canMove('Knight', 'D8', 'B6'));
console.log(canMove('Knight', 'D8', 'E6'));
console.log(canMove('Rook', 'C3', 'B4'));
console.log(canMove("Rook", "A8", "H8"));
console.log(canMove("Bishop", "A7", "G1") );
console.log(canMove("Queen", "C4", "D6"));