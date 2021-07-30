const checkForSpam = function(message) {
    return message.toLowerCase().includes ('spam') 
    || message.toLowerCase().includes ('sale')
};
console.log(checkForSpam('[SPAM] How to earn fast money?'))
console.log(checkForSpam('Latest technology news'))