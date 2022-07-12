import { useDebugValue } from "react";

export default bug 
//making a fake model to use for my bug. setting all the defines for the layout of the bug.
function bug(bug){
    if(bug != undefined){
        this._id=bug._id;
        this.name = bug.name;
        this.details=bug.detials;;
        this.steps = bug.steps;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.creater = bug.creater; 
        this. time = bug.time;
    }
}
