// Here are constructors for all objects

//This array stores all IP addresses of Network compeonents created
completeIPstore = [];
//this array stores the range of IP addresses
//alert(ipRange);
//This array stores the list of port numbers and their associated services
let ports = {ftp: 21, ssh:22, telnet: 23, smtp: 25, dns: 53, http: 43, pop3: 110, rpc: 135, sql: 1434, netbios: 137};
//Helper contains all methods that give the user global game help. Tool specific help is maintained within the tool classes
class Helper{
    constructor(){
    }
    getHelpMain(){
        let outputText = document.getElementById("lessonText");
        outputText.innerHTML = "";   
        outputText.innerHTML += "<li><h3>Commands:</h3><li>"
                             + "<li><b>'help'</b> : Bring up the command list.</li>"
                             + "<li><b>'clear'</b> : Clear text from the terminal window.</li>"
                             + "<li><b>'next'</b> : Continue to next instruction.</li>"
                             + "<li><b>'back'</b>: Return to previous instruction.</li>"
                             + "<li><b>'ports'</b>: Show a list of port numbers and their associated services.</li>"
                             + "<li><b>'notes'</b>: Bring up a log of results you have discovered so far. Example: <b>notes fping</b></li>"
                             + "<li><b>'tools'</b>: List all tools available to you.</li>";                            
    }
    portsList(){
        let outputText = document.getElementById("lessonText");
        outputText.innerHTML = "";   
        outputText.innerHTML += "<li><h3>Port Numbers:</h3><li>"
                             + "<li><b>FTP (File Transfer Protocol)</b> : TCP port 21</li>"
                             + "<li><b>SSH (Secure Shell)</b> : TCP port 22</li>"
                             + "<li><b>Telnet</b> : TCP port 23</li>"
                             + "<li><b>SMTP (Simple Mail Transfer Protocol)</b>: TCP port 25</li>"
                             + "<li><b>HTTP (Hypertext Transport Protocol)</b>: TCP port 443</li>"
                             + "<li><b>POP3 (Post Office Protocol version 3)</b>: TCP port 110</li>"
                             + "<li><b>Windows RPC</b>: TCP and UDP ports 137–139</li>"
                             + "<li><b>Microsoft SQL Server</b>: TCP port 1433 and UDP port 1434</li>"
                             + "<li><b>DNS</b>: TCP and UDP port 53</li>";                            
    }
    toolList(){
        let outputText = document.getElementById("lessonText");   
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><h3>Penetration Testing Tools:</h3><li>"
        for(let i=0; i<tools.length; i++){
            outputText.innerHTML += "<li>" + tools[i] + "</li>";
        }
    }
    notesList(tool){
        if (tool == 'fping' && fpingTool.state === true){
            let outputText = document.getElementById("lessonText");
            outputText.innerHTML = "";
            outputText.innerHTML = "<li>fping found the following IP addressses:</li>"
            for(let i=0; i<completeIPstore.length; i++){
                outputText.innerHTML += "<li>" + JSON.stringify(completeIPstore[i]) + "</li>";
            }
        }
        else if(tool == 'nmap' && nmapTool.state === true){
            let outputText = document.getElementById("lessonText");
            outputText.innerHTML = "";
            outputText.innerHTML = "All open ports.......\n\n\n";
            for(let i=0; i<server.length; i++){
                outputText.innerHTML += "<li>" + JSON.stringify(server[i].ipAdd) + "  ---  Ports: " + JSON.stringify(server[i].port) + "</li>";
            }
        }
        else {
            let outputText = document.getElementById("lessonText");
            outputText.innerHTML = "";
            outputText.innerHTML += "<li><h2>Logs:</h2><li>"
                                 + "<li>No logs found.....</li>";
        }
    }
}
class FinalTests{
    constructor(){}
    finalTests(){
            location.reload();
    }
}
//----------------------------------------Network component objects-----------------------------------------
class Server{
    constructor(type, ipAdd, port=[0,0,0]) {
        this.type = type;
        this.ipAdd = ipAdd;
        this.port = port;
        this.contents;
    }
    getIP(){
        return (this.ipAdd);
    }
    getType(){
        return (this.type);
    }
}
class Computer{
    constructor(userName, password, ipAdd) {
        this.username = userName;
        this.password = password;
        this.ipAdd = ipAdd;
    }
}

class Router{}

class Firewall{}

class WirelessAP{}
//--------------------------------------------Hacking tool objects----------------------------------------
//The NMAP tool. Modelled to return IP addresses, Ports, Names ect.
class Nmap {
    constructor(name, state){
        this.name = name;
        this.state = state;
        this.updateAP = 1;
    }
    getName(){
        return this.name;
    }
    //has the user ran the nmap tool to retrieve ip addresses
    getState(){
        return this.state;
    }
    //give the user information on the nmap tool and usage
    getToolDescription(){    
        let outputText = document.getElementById("testOutput");   
        outputText.innerHTML = "";
        outputText.innerHTML += "<li>NMAP</li>"
                              + "<li>This tool returns the IP addresses of network components</li>"
                              + "<li>Cost: 1 Action Point</li>"
                              + "<li>Strengths: Low cost tool to retrieve all IP addresses on network</li>"
                              + "<li>Weaknesses: Chance to fail if the network has more than 1 Firewall</li>"
                              + "<li>Tip: Once nmap has retrieved the ip address list.</li>"
                              + "<li>To get more details of each discovered component:</li>"
                              + "<li>nmap ip</li>";
    }
    //give the user more detailed information on network components
    nmapBasic(ip){
        this.state = true;
        let outputText = document.getElementById("toolOutput");
        outputText.innerHTML = "";
        outputText.innerHTML = "NMAP found the following open ports.......\n\n\n";
        for(let i=0; i<server.length; i++){
            if(ip == server[i].ipAdd){
                outputText.innerHTML += "<li>" + JSON.stringify(server[i].ipAdd) + "  ---  Ports: " + JSON.stringify(server[i].port) + "</li>";
            }
        }
    }
    nmapFull(){
        this.state = true;
        let outputText = document.getElementById("toolOutput");
        outputText.innerHTML = "";
        outputText.innerHTML = "All open ports.......\n\n\n";
        for(let i=0; i<server.length; i++){
            outputText.innerHTML += "<li>" + JSON.stringify(server[i]) + "</li>";
        }
    }
}
class Fping{
    constructor(name, state){
        this.name = name;
        this.state = state;
        this.updateAP = 1;
    }
    getIpList(){
        this.state = true;
        let outputText = document.getElementById("toolOutput");
        outputText.innerHTML = "";
        outputText.innerHTML = "<li>fping got responses from the following machines at:</li>"
        for(let i=0; i<completeIPstore.length; i++){
            outputText.innerHTML += "<li>" + JSON.stringify(completeIPstore[i]) + "</li>";
        }
    }
}
class Telnet{
    constructor(name, state){
        this.name = name;
        this.state = state;
    }
    connection(ip){
        this.state = true;
        let outputText = document.getElementById("toolOutput");
        outputText.innerHTML = "";
        outputText.innerHTML = "<li>Trying " + ip + ".... </li>"
        outputText.innerHTML += "<li>Connected to " + ip + ".... </li>";
    }
    smtpVerifySuccess(user){
        let outputText = document.getElementById("toolOutput");
        outputText.innerHTML += "<li>vrfy "+ user +"</li>"
        outputText.innerHTML += "<li>252 2.0.0 "+ user +"</li>";
        localStorage.setItem("scenario1Complete", "true");
    }
    smptVerifyFailure(user){
        let outputText = document.getElementById("toolOutput");
        outputText.innerHTML += "<li>vrfy "+ user +"</li>"
        outputText.innerHTML += "<li>550 5.1.1 <"+ user +">: Recipient address rejected: User unknownin local recipient table</li>";
    }
}








