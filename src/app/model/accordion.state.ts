export class getAccordionData {
    accData : AccObj[]
    constructor() {
       this.accData = [ 
           {  
            id:1, 
            acctitle : "App downloaded,not registered",
            accrepeat : ["S","M"],
            accfromTime : "7:00 am",
            accToTime : "8:00pm",
            "timeRoundInfo": {
                1: 2,
                2: 3,
                3: 3,
                4: 30
           }},
           {id:2,acctitle : "Registered,assessment not started",accrepeat : ["S"],accfromTime : "7:00 am",accToTime : "8:00pm",  "timeRoundInfo": {1: 2,2: 3,3: 3,4: 30}},
           {id:3,acctitle : "Assessment completed,next steps",accrepeat : ["S"],accfromTime : "7:00 am",accToTime : "8:00pm",  "timeRoundInfo": {1: 2,2: 3,3: 3,4: 30}},
           {id:4,acctitle : "Assessment started not completed  Finish your assessment",accrepeat : ["S"],accfromTime : "7:00 am",accToTime : "8:00pm",  "timeRoundInfo": {1: 2,2: 3,3: 3,4: 30}},
       ]
    }
}

 export interface AccObj {
     id : number
     acctitle : string;
     accrepeat : string[];
     accfromTime : string;
     accToTime : string;
     timeRoundInfo : {};
 }