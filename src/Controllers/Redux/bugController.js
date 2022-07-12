import bugModel from '../Model/bugModel'
//creating information for the bug.
export function retrieveBugs(){
    let data = []

    data.push(new bugModel({
        _id:232766,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open app and it wil crash",
        version:"V2.0",
        assigned:"Evan Linder",
        creator:"Evan Linder",
        prioity:1,
        time:"23:38",
    }))

    
    data.push(new bugModel({
        _id:232766,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open app and it wil crash",
        version:"V2.0",
        assigned:"Evan Linder",
        creator:"Evan Linder",
        prioity:3,
        time:"23:38",
    }))
}
//will grab one bug, and take away prioritys and order them. basically sorts them by there level.
let sorted = data.sort((a,b)=>{return a.prioity - b.prioity})
return sorted;