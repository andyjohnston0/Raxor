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
      fn: function help(ARGV) {
        scenario1.selector();
        return 'ok'
      },
    },
    next: { 
      name: 'next', 
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function help(ARGV) {
        scenario1.next();
        return 'ok'
      },
    },
    back: { 
      name: 'back',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function help(ARGV) {
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
          if(scenario1.getScenarioPath() == 2){
            scenario1.fpingSuccess();
            return 'ok'
          }
        }
        else if(scenario1.getScenarioPath() == 2){
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
          svIp = server[i].ipAdd;
          if(input == svIp){
            nmapTool.nmapBasic(input);
            return 'ok'
          }
        }       
      },
    },
    ports: { 
      name: 'ports',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function help(ARGV) {
        helper.portsList();
        return 'ok'
      },
    },
    notes: { 
      name: 'notes',
      type: 'usr', // OPTIONAL default to 'usr' if not passed
      fn: function help(ARGV) {
        input = ARGV['_'];
        helper.notesList(input);
        return 'ok'
      },
    },
}


