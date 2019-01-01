//custom commands for termly.js terminal
var customCommands = {
    //example custom command format
    helps: { // keep it equal to name till I change it
      name: 'helps', // keep it equal to the key till I change it
      type: 'builtin', // OPTIONAL default to 'usr' if not passed
      man: 'List of available commands', // Manual Entry for the command OPTIONAL
      fn: function help(ARGV) {
        return `Return the value of the command`
      },
    },
    help: { 
        name: 'help', 
        type: 'usr', // OPTIONAL default to 'usr' if not passed
        fn: function help(ARGV) {
          helper.getHelpMain();
          return 'ok'
        },
    },
    start: { 
      name: 'start',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function start(ARGV) {
        if(localStorage.getItem("scenario1") === true){
          scenario1.scenarioComplete()
        }
        else{
          scenario1.selector();
        }
        return 'ok'
      },
    },
    next: { 
      name: 'next', 
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function next(ARGV) {
        scenario1.next();
        return 'ok'
      },
    },
    back: { 
      name: 'back',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function back(ARGV) {
        scenario1.back();
        return 'ok'
      },
    },
    fping: {
      name: 'fping',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function fPing(ARGV) {
        let input = ARGV['_'];
        if(input == ipRange){
          fpingTool.getIpList();
          scenario1.fpingSuccess();
          return 'ok'
        }
        else{
          return 'incorrect range..... try again'
        }
      },
    },
    nmap: { 
      name: 'nmap',
      type: 'usr', // OPTIONAL default to 'usr' if not passed    
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
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function telnet(ARGV) {
        let input = ARGV['_'];
        for(let i =0; i<= server.length; i++){
          if(input == server[i].ipAdd && server[i].port == 23,25){
            telnetTool.connection(input);
            return 'telnet connected'
          }
          else{
            return 'cannot connect..... try again'
          }
        }
      }
    },
    vrfy: {
      name: 'vrfy',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function vrfy(ARGV) {
        let input = ARGV['_'];
        for(let i =0; i<= scenarioMail.length; i++){
          if(input == scenarioMail[i]){
            if(scenario1.scenarioActive == true){
              scenario1.scenarioState = true;
              //remember scenario was completed in local storage
              localStorage.setItem("scenario1", true);
              scenario1.next();
            }
            telnetTool.smtpVerifySuccess(input);
            return 'ok'
          }
          else{
            telnetTool.smptVerifyFailure(input);
            return 'user not found..... try again'
          }
        }
      }
    },
    ports: { 
      name: 'ports',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function ports(ARGV) {
        helper.portsList();
        return 'ok'
      },
    },
    notes: { 
      name: 'notes',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function notes(ARGV) {
        input = ARGV['_'];
        helper.notesList(input);
        return 'ok'
      },
    },
    tools: { 
      name: 'tools',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function notes(ARGV) {
        //input = ARGV['_'];
        helper.toolList();
        return 'ok'
      },
    },
}


