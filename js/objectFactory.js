//objectFactory contains all object creation functions
let server = [];
let tools = [];
let completeIPstore = [];
let serverTypes = ["mail","dns","database"];
let mailBoxes = ["sys","admin","administrator","nullbyte","root"];
let scenarioMail = [];

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
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}
//select random mailboxes
function randomMail(){
    let liveMail = [];
    for(let i =0; i < 2; i++){
        liveMail.push(mailBoxes[Math.floor(Math.random()*mailBoxes.length)])
    }
    return liveMail;
}
//generate mailboxes for scenario
scenarioMail = randomMail();
//---------------------------------------Create The Server Objects-----------------------------------------
//create an array of server objects
serverGenerator();
//call Server to populate array
function serverGenerator(){
    //change this to alter the number of servers generated
    let randomNumber = randomNumberGen(1, 2);
    let subIP = [192,172,169,10];
    let types = '';
    let mailTest = 0;
    let port;
    //generate the IP addresses for the servers on a defined subnet
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
        //select a reasonable number of each server type
        types = randomItem(serverTypes);
        if (types === 'mail'){
            mailTest = 1;
            port = [25,23];
            serverTypes.splice(0,1);
        }
        else if(types === 'dns'){
            port = 53;
            serverTypes.splice(1,1);
        }
        else{
            port = 1433;
        }
        server[i] = new Server(types, randSub1 + "." + randSub2 + "." + randomIP(), port);
        //add IP address to completeIPstore array
        completeIPstore.push(server[i].getIP());        
    }
    //Check for existence of 'mail server': if none exists create an instance
    for(let i = 0; i <= server.length; i++){
        if(server[1].getType() === 'mail'){
            mailTest = 1;
        }
    }
    if(mailTest === 0){
        let serverM = new Server('mail', randSub1 + "." + randSub2 + "." + randomIP(), [25,23]);
        server.push(serverM);
        completeIPstore.push(serverM.ipAdd);
    }
    //form the complete range of possible IPs on the subnet generated above
    ipRange = (randSub1 + "." + randSub2 + "." + 0 + "." + 0 + "/" + randSub1 + "." + randSub2 + "." + 255 + "." + 255);
}
//---------------------------------------------Game Tool Creation------------------------------------------- 
let nmapTool = new Nmap("nmap", false);
tools.push(nmapTool.name);

let fpingTool = new Fping("fping", false);
tools.push(fpingTool.name);

let telnetTool = new Telnet("telnet", false);
tools.push(telnetTool.name);
tools.push("vrfy");
//-----------------------------------------All other required objects---------------------------------------
let helper = new Helper();
let scenario1 = new Scenario1(0);
let finalTest = new FinalTests();

//-------------------------------------function that holds players achievemnet path in local memory and checks on page load-------------------------
function scenarioMemory(){
    appText = new AppText();
    if(localStorage.scenario1Complete == "false" || localStorage.scenario1Complete == null){
        appText.intro();     
    }
    else{
        localStorage.scenario1Active = "false";
        scenario1.scenarioTest();
    }
}
//-----------------------------------reload function------------------------------------

