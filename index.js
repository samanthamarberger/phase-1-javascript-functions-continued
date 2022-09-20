// code your solution here
function saturdayFun(activity) {
    if (!activity) {
        activity = "roller-skate";
    }
    let sundayActivity = `This Saturday, I want to ${activity}!`;
    return sundayActivity;
}

const mondayWork = function (activity) {
    if (!activity) {
        activity = "go to the office";
    }
    let mondayActivity = `This Monday, I will ${activity}.`;
    return mondayActivity;
}

function wrapAdjective(flair = '*') {
    return function (are = 'special') {
        return `You are ${flair}${are}${flair}!`;
    }
}