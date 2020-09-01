const camelCase = function(input) {
    // Your code here
    return input.split(' ').map(function(Word,index){
        if(index == 0){
          return Word.toLowerCase();
        }
        return Word.charAt(0).toUpperCase() + Word.slice(1).toLowerCase();
      }).join('');

    // input = (input === undefined || input === null) ? '' : input;
    //    input = input.replace(/_/g, " ").toLowerCase();
    //    return input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    //        if (+match === 0) return "";
    //        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    //    });
  };
  console.log(camelCase("this is a string"));
  console.log(camelCase("holy heck"));
  console.log(camelCase("supercalifragalisticexpialidocious"));

