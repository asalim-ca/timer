let alarms = process.argv.slice(2).map( input => Number(input))

let sortedAlarms =alarms.slice()

for (let i = 0; i < sortedAlarms.length; i++) {
  for (let j = i + 1; j < sortedAlarms.length; j++) {
    if (alarms[j] < sortedAlarms[i]) {
      let tmp = sortedAlarms[i];
      sortedAlarms[i] = sortedAlarms[j];
      sortedAlarms[j] = tmp
    }
  }
}


const beep = (sec) => process.stdout.write(`\r${sec} elapsed!`)

sortedAlarms.forEach(sec => {
  (!Number.isInteger(sec) || (sec < 0) ||
    setTimeout(() => {
    beep(sec);
    }, sec * 1000) )
});


