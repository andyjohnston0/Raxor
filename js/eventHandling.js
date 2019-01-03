//custom commands for termly.js terminal
var customCommands = {
    help: { 
        name: 'help', 
        type: 'usr', 
        fn: function help(ARGV) {
          helper.getHelpMain();
          return 'ok'
        },
    },
    start: { 
      name: 'start',
      type: 'usr', 
      fn: function start(ARGV) {
        if(localStorage.scenario1Complete === "true"){
          finalTest.finalTests();
        }
        else{
          scenario1.selector();
        }
        return 'ok'
      },
    },
    next: { 
      name: 'next', 
      type: 'usr', // 
      fn: function next(ARGV) {
        scenario1.next();
        return 'ok'
      },
    },
    back: { 
      name: 'back',
      type: 'usr', 
      fn: function back(ARGV) {
        scenario1.back();
        return 'ok'
      },
    },
    fping: {
      name: 'fping',
      type: 'usr', 
      fn: function fPing(ARGV) {
        let input = ARGV['_'];
        if(input == ipRange){
          fpingTool.getIpList();
          if(localStorage.scenario1Active === "true"){
            scenario1.fpingSuccess();
          }
          return 'ok'
        }
        else{
          return 'incorrect range..... try again'
        }
      },
    },
    nmap: { 
      name: 'nmap',
      type: 'usr',   
      fn: function nmap(ARGV) {
        let input = ARGV['_'];
        for(let i=0; i<server.length; i++){
          let svIp = server[i].ipAdd;
          if(input == svIp){
            nmapTool.nmapBasic(input);
            return 'ok'
          }
        }       
      },
    },
    telnet: {
      name: 'telnet',
      type: 'usr', 
      fn: function telnet(ARGV) {
        let input = ARGV['_'];
        try{
          for(let i = 0 ; i<= server.length; i++){
            if(input == server[i].ipAdd && server[i].port[0] === 25){
              telnetTool.connection(input);
              return 'telnet connected'
            }
          }
        }
        catch{
          return 'cannot connect.... try again'
        }
      }
    },
    vrfy: {
      name: 'vrfy',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function vrfy(ARGV) {
        let input = ARGV['_'];
        try{
          for(let i =0; i<= scenarioMail.length; i++){
            if(input == scenarioMail[i] && localStorage.scenario1Active === "true"){
              scenario1.scenarioComplete();
              telnetTool.smtpVerifySuccess(input);
              //remember scenario was completed in local storage
              localStorage.setItem("scenario1Complete", "true");
              return 'ok'
            }
            else if(input == scenarioMail[i] && localStorage.scenario1Active === "false"){
              telnetTool.smtpVerifySuccess(input);
              return 'ok'
            }
          }
        }
        catch{
          telnetTool.smptVerifyFailure(input);
          return 'user not found..... try again'
        }
      }
    },
    ports: { 
      name: 'ports',
      type: 'usr', 
      fn: function ports(ARGV) {
        helper.portsList();
        return 'ok'
      },
    },
    notes: { 
      name: 'notes',
      type: 'usr', 
      fn: function notes(ARGV) {
        input = ARGV['_'];
        helper.notesList(input);
        return 'ok'
      },
    },
    tools: { 
      name: 'tools',
      type: 'usr', 
      fn: function notes(ARGV) {
        //input = ARGV['_'];
        helper.toolList();
        return 'ok'
      },
    },
}


