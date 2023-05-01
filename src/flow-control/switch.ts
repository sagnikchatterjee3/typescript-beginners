//much more readable than if-else ladder

//only one case will be exceuted that matches the X value in the switch 

let x: number = 3;

switch (x) {
    case 1:
        console.log("Case 1"); break;
    case 2:
        console.log("Case 2"); break;
    default:
        console.log("No case matched"); break;
}

// break used to disrupt case flow and stop the iteration if some condition reached.
// if same logic for multiple cases, we can remove the break from it and let it fall through.


export {};