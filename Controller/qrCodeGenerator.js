// mainly to generate current time in a customized way
const uuidGenerator = () => {
    let d = new Date();
    let date = new Intl.DateTimeFormat('en',
        {year: '2-digit',
         month : '2-digit',
         day : '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit'}
         ).format(d).replaceAll('/','')
         // replace the PM & AM with null
         .replaceAll('AM','').replaceAll('PM','').
         replaceAll(',','').replaceAll(' ','').replaceAll(':','');
        let uuid = `${date}`
        // return uuid back
        return uuid;
  }

  module.exports = {
    uuidGenerator: uuidGenerator
  }