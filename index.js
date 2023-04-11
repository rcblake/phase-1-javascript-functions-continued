function saturdayFun (saturdayAction = `roller-skate`) {
    return (`This Saturday, I want to ${saturdayAction}!`)
}

function mondayWork (mondayAction = `go to the office`) {
    return (`This Monday, I will ${mondayAction}.`)
}


function wrapAdjective (flairStyle = `*`,) {
    return function encouragingPrompt (flairText = `special`) {
        return (`You are ${flairStyle}${flairText}${flairStyle}!`)
        
}
}
