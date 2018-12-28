//objectFactory contains all object creation functions
let server = [];
let tools = [];
let completeIPstore = [];
let serverTypes = ["mail", "dns", "database"];

//------------------------------Functions required for Object generation-----------------------------------
//Generate Random number in given range
function randomNumberGen(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Generate IP addressses
function randomIP(){
    return (Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
}
//Pick random item from array
function randomItem(items){
    return item = items[Math.floor(Math.random()*items.length)]
}
//---------------------------------------Create The Server Objects-----------------------------------------
//create an array of server objects
serverGenerator();
//call Server to populate array
function serverGenerator(){
    let randomNumber = randomNumberGen(2, 3);
    let subIP = [192,172,169,10];
    randSub1 = subIP[Math.floor(Math.random() * subIP.length)];
    randSub2 = 0;
    if(randSub1 == 192){
        randSub2 = 168;
    }
    else if(randSub1 == 169){
        randSub2 = 254;
    }
    else if(randSub1 == 172){
        randSub2 = 16;
    }
    else{
        randSub2 = 0;
    }
    for(let i = 0; i <= randomNumber; i++){
        let types = randomItem(serverTypes);
        if(types === 'mail'){
            var port = 25;
        }
        else{
            port = 0;
        }
        server[i] = new Server(types, randSub1 + "." + randSub2 + "." + randomIP(), port);
        //add IP address to completeIPstore array
        completeIPstore.push(server[i].getIP());        
    }
    ipRange = (randSub1 + "." + randSub2 + "." + 0 + "." + 0 + "/" + randSub1 + "." + randSub2 + "." + 255 + "." + 255);
}
//---------------------------------------------Game Tool Creation------------------------------------------- 
nmapTool = new Nmap("nmap", false);
tools.push(nmapTool.name);
tools.push('ports');

fpingTool = new Fping("fping", false);
tools.push(fpingTool.name);
tools.push('ping_sweep');
//-----------------------------------------All other required objects---------------------------------------
helper = new Helper();
feedback = new Feedback();
actionPoints = new ActionPoints(10);
scenario1 = new Scenario1(0,true);


//Notes: 