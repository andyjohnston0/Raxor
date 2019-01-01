//lesson scenarios classes
class AppText {
    constructor(){
    }
    intro(){
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3>Welcome to RaXoR</H3></li>"
                             +  "<li>Here you will learn the basic tools and principles of penetration testing and cybersecurity.</li>"
                             +  "<li>A new simulated network environment is initialised by <span id = 'light'>RaXoR</span> each time you play.</li>"
                             +  "<li>You will be introduced to penetration testing tools in a safe and simplified way through various scenarios.</li>"
                             +  "<li>At the end of each scenario, you will be given challenges to perform on the simulated network.</li>"
                             +  "<li>This is a safe environment to learn.</li>"
                             +  "<li>Type <span id ='light'>'next'</span> to continue...</li>";                      
    }
} 
class Scenario1 {
    constructor(scenarioPath, scenarioActive, scenarioState){
        this.scenarioPath = scenarioPath;
        this.scenarioActive = scenarioActive;
        this.scenarioState = scenarioState;
    }
    selector(){
        if(this.scenarioPath === 0){
            this.intro();
        }
        else if(this.scenarioPath === 1){
            this.fPingIntro();
        }
        else if(this.scenarioPath === 2){
            this.fPingUse();
        }
        else if(this.scenarioPath === 3){
            this.ports();
        }
        else if(this.scenarioPath === 4){
            this.nmapIntro();
        }
        else if(this.scenarioPath === 5){
            this.nmapUse();
        }
        else if(this.scenarioPath === 6){
            this.smtpMailIntro();
        }
        else if(this.scenarioPath === 7){
            this.smtpTelnet();
        }
        else if(this.scenarioPath === 8){
            this.smtpEmail();
        }
        else if(this.scenarioPath === 9){
            this.scenarioComplete();
        }
        else if(this.scenarioPath === 10){
            this.scenarioTest();
        }
        else{
            return 0;
        }
    }
    next(){
        this.scenarioPath = this.scenarioPath + 1;
        this.selector();
    }
    back(){
        if(this.scenarioPath >= 1){
            this.scenarioPath = this.scenarioPath - 1;
            this.selector();
        }
        else{
            return 0;
        }
    }
    getScenarioState(){
        return this.scenarioState;
    }
    getScenarioPath(){
        return this.scenarioPath;
    }
    intro(){
        this.scenarioPath = 0;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>In this beginner scenario you will:</b></H3></li>"
                             +  "<li>- Gain access to the target network's mail server. Then verify and retrieve an email address to be used in a later attack.</li>"
                             +  "<li><H4><b>The steps:</b></H4></li>"
                             +  "<li>1. Get the IP addresess of all responsive machines on the target network.</li>"
                             +  "<li>2. Scan these targets for open ports and services.</li>"
                             +  "<li>3. Exploit any vulnerablities to access the target machine.</li>"
                             +  "<li>4. Verify and retrieve an email address.</li>"
                             +  "<li>(Hint: Type <span id ='light'>'clear'</span> at any time to remove text from the terminal... try it now!)</li>"
                             +  "<li>Type <span id ='light'>'next'</span> to continue...</li>";                      
    }
    fPingIntro(){
        this.scenarioPath = 1;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>1. Get the IP addresses of live machines on the network:</b></H3></li>"
                             +  "<li>(Hint: Type <span id ='light'>'help'</span> at any time to show available commands... try it now!)</li>"
                             +  "<li>A <b>ping</b> is a network packet called a Internet Control Message Protocol(ICMP) packet.</li>"
                             +  "<li>Sending  one of these <b>echo request packets</b> to a machine requires that machine to respond if it is alive and not restricted.</li>"
                             +  "<li>Pinging each individual machine on a network is labourious. We can instead do a <b>ping sweep</b> to target all machines on a network at once.</li>"
                             +  "<li>We will use a tool called <span id ='light'>Fping</span> to do this.</li>"
                             +  "<li>Type <span id ='light'>'next'</span> to continue.....</li>";   
    }
    fPingUse(){
        this.scenarioPath = 2;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>Using Fping to retrieve IP addresses</b></H3></li>"
                             +  "<li>We will be pinging a range of IP addresses on the same subnet - All the addresses will begin with the same number.</li>"
                             +  "<li>We know the first part of the subnet range to be <span id ='light'>" + randSub1 + "." + randSub2 +"</span></li>"
                             +  "<li><H4><b>The steps:</b></H4></li>"
                             +  "<li>Type <span id ='light'>'fping'</span> followed by the range of IP addresses to be pinged.</li>"
                             +  "<li>Example: fping 192.168<span id = 'light'>.0.0/</span>192.168<span id = 'light'>.255.255</span></li>";
                               
    }
    fpingSuccess(){
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML +=  "<li>You should now see a list of IP addresses.</li>"
                             +  "<li><b>One</b> of these addresses belongs to our <b>target machine</b>.</li>"
                             +  "<li>Type <span id ='light'>'next'</span> to continue.....</li>";
    } 
    ports(){
        this.scenarioPath = 3;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>2. Scan these targets for open ports and services</b></H3></li>"
                             +  "<li>We have used Fping to successfully retrieve the addresses of all responsive machines on the target network. Now we need to find more information about those specific machines.</li>"
                             +  "<li><H4>Ports:</H4></li>"
                             +  "<li>Each of these machines is communicating on a network. To facilitate this communication each machine will have certain <b>ports</b> open which can hint to that machine's function."
                             +  "<li>Each port is given a number. By finding which port numbers are open on a target machine, we can often determine it's function.</li>"
                             +  "<li>(Hint: Type <span id ='light'>'ports'</span> at any time to bring up list of port numbers associated with particular services... Try it now!)</li>"
                             +  "<li>In this scenario we are trying to find a mail server. Which port numbers are typically associated with this type of communication?</li>"
                             +  "<li>Type <span id ='light'>'next'</span> to continue.....</li>";                      
    }
    nmapIntro(){
        this.scenarioPath = 4;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>NMAP port scanner</b></H3></li>"
                             +  "<li>You can use the IP addresses you have discovered with the nmap tool.</li>"
                             +  "<li>Nmap can identify which ports are open and, using this information, which services are running on a particular host. Nmap can perform a number of scan types.</li>"
                             +  "<li>We will run a basic nmap scan here. This uses the TCP Three-Way Handshake function. This method is utilised when two computers want to establish a communication channel.</li>"
                             +  "<li>By default nmap will try to complete a Three-Way Handshake with the first 1000 ports on a host.</li>"
                             +  "<li>Type <span id ='light'>'next'</span> to continue.....</li>";                      
    }
    nmapUse(){
        this.scenarioPath = 5;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>Using NMAP to find open ports</b></H3></li>"
                             +  "<li>Remember, we are looking for a mail server. So we are looking for <span id ='light'>port 25 and/or port 110</span>. These should be found on any host acting as a mail server.</li>"
                             +  "<li>Type '<span id ='light'>nmap</span>' followed by the IP addresses you have found.</li>"
                             +  "<li>Example: nmap 123.234.12.121</li>"
                             +  "<li><H4><b>Outcome:</b></H4></li>"
                             +  "<li>You should now see a a list of open ports on that machine. If you find the ports we are looking for. <span id ='light'>Note the IP address of that machine.</span></li>"
                             +  "<li>(Hint: Type '<span id ='light'>notes</span>' followed by the '<span id ='light'>tool name</span>' at any time to bring up a log of previous results you have discovered in this scenario so far.....</li>"
                             +  "<li>Example: <span id ='light'>notes fping</span> Try it now!)</li>"
                             +  "<li>Type <span id ='light'>'next'</span> when you are ready to continue.....</li>";
    }
    smtpMailIntro(){
        this.scenarioPath = 6;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>3. Exploit any vulnerablities to access the target machine</b></H3></li>"
                             +  "<li>If the mail server you have discovered has <span id ='light'>port 25</span> open you have discovered an <span id ='light'>SMTP server</span>.</li>"
                             +  "<li>SMTP stands for Simple Mail Transport Protocol and is a server-to-server protocol. Email clients use POP3 or IMAP protocols to communicate with SMTP servers.</li>"
                             +  "<li>SMTP servers use the SMTP protocol to communicate to other SMTP servers.</li>"
                             +  "<li><span id ='light'>The SMTP server maintains a database of every email address in the organisation.</span></li>"
                             +  "<li>We are going to query this database to confirm an email address exists. This address can be used in a later attack.</li>"
                             +  "<li>Type <span id ='light'>'next'</span> when you are ready to continue.....</li>";

    }
    smtpTelnet(){
        this.scenarioPath = 7;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>Connecting to the SMTP Server</b></H3></li>"
                             +  "<li>If you check the nmap results for the SMTP server you will see another open port was found. Check this port in the 'ports' list.</li>"
                             +  "<li><span id ='light'>Port 23</span> is open. This is the port for the <span id ='light'>Telnet</span> protocol which provides remote access to machines. It could be your way in....</li>"
                             +  "<li><H4><b>Try to access the target machine using Telnet:</b></H4></li>"
                             +  "<li>Type '<span id ='light'>telnet</span>' followed by the IP address of the SMTP mail server</li>"
                             +  "<li>Example: telnet 192.168.2.22</li>"
                             +  "<li>(Hint: Remember, if you need help you can access all commands by typing '<span id ='light'>help</span>')</li>"
                             +  "<li>Type <span id ='light'>'next'</span> when you are ready to continue.....</li>";
    }
    smtpEmail(){
        this.scenarioPath = 8;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>4. Verify and retrieve an email address</b></H3></li>"
                             +  "<li>The SMTP protocol has it's own set of commands. You will will use the VRFY command to find an email address we can use later.</li>"
                             +  "<li>The <span id ='light'>VRFY</span> (verify) command asks the server to verify if a email user's mailbox exists.</li>"
                             +  "<li><H4><b>Try to verify a mailbox for one of the following:</b></H4></li>"
                             +  "<li>1. '<span id ='light'>"+ mailBoxes[0] +"</span>'</li>"
                             +  "<li>2. '<span id ='light'>"+ mailBoxes[1] +"</span>'</li>"
                             +  "<li>3. '<span id ='light'>"+ mailBoxes[2] +"</span>'</li>"
                             +  "<li>4. '<span id ='light'>"+ mailBoxes[3] +"</span>'</li>"
                             +  "<li>5. '<span id ='light'>"+ mailBoxes[4] +"</span>'</li>"
                             +  "<li>Example usage: vrfy root</li>"
                             +  "<li>Type <span id ='light'>'next'</span> when you are ready to continue.....</li>";
    }
    scenarioComplete(){
        this.scenarioPath = 9;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>Congratulations! You have completed your Introductory Scenario.</b></H3></li>"
                             +  "<li><H4><b>The steps you completed:</b></H4></li>"
                             +  "<li>1. Get the IP addresess of all responsive machines on the target network.</li>"
                             +  "<li>2. Scan these targets for open ports and services.</li>"
                             +  "<li>3. Exploit any vulnerablities to access the target machine.</li>"
                             +  "<li>4. Verify and retrieve an email address.</li>"
                             +  "<li><span id ='light'>You now should be able to use the tools and methods you have learned to complete a similar scenario on your own!</span></li>"
                             +  "<li>Type <span id ='light'>'start'</span> when you are ready to begin.....</li>";
    }
    scenarioTestSet(){
        this.scenarioPath = 10;
        if(localStorage.getItem("scenario1") == true){
            location.reload();
        }
        else{
            this.back();
        }
    }
    scenarioTest(){
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>Scenario 1: Test Simulator</b></H3></li>"
                             +  "<li><H4><b>The steps to complete:</b></H4></li>"
                             +  "<li>1. Get the IP addresess of all responsive machines on the target network.</li>"
                             +  "<li>2. Scan these targets for open ports and services.</li>"
                             +  "<li>3. Exploit any vulnerablities to access the target machine.</li>"
                             +  "<li>4. Verify and retrieve an email address.</li>"
                             +  "<li><span id ='light'>Remember all the available commands you can access through the 'help' menu.</span></li>"
                             +  "<li>Test network environment has been initialised......begin.....</li>";
    }
}