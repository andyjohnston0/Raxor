//lesson scenarios classes
class Scenario1 {
    constructor(scenarioPath, scenarioState){
        this.scenarioPath = scenarioPath;
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
                             +  "<li>- Gain access to the target network's mail server.</li>"
                             +  "<li><H4><b>The steps:</b></H4></li>"
                             +  "<li>1. Get the IP addresess of all responsive machines on the target network.</li>"
                             +  "<li>2. Scan these targets for open ports and services.</li>"
                             +  "<li>3. Exploit any vulnerablities to access the target machine.</li>"
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
                             +  "<li>Remember, we are looking for a mail server. So we are looking for <span id ='light'>port 25 and/or port 110</span>. These should be found on any host acting as a mail server.</li>"
                             +  "<li>Type <span id ='light'>'next'</span> to continue.....</li>";                      
    }
    nmapUse(){
        this.scenarioPath = 5;
        let outputText = document.getElementById("testOutput");
        outputText.innerHTML = "";
        outputText.innerHTML += "<li><H3><b>Using NMAP to retrieve IP addresses</b></H3></li>"
                             +  "<li>Type '<span id ='light'>nmap</span>' followed by the IP addresses you have found.</li>"
                             +  "<li>Example: nmap 123.234.12.121</li>"
                             +  "<li><H4><b>The steps:</b></H4></li>"
                             +  "<li>Type <span id ='light'>'nmap'</span> in the command terminal.</li>"
                             +  "<li>You should now see a a list of open ports on that machine. If you find the ports we are looking for. <span id ='light'>Note the IP address of that machine.</span></li>"
                             +  "<li>(Hint: Type '<span id ='light'>notes</span>' at any time to bring up a log of previous results you have discovered in this scenario so far..... Try it now!)</li>"
                             +  "<li>Type <span id ='light'>'next'</span> when you are ready to continue.....</li>";
    }
}