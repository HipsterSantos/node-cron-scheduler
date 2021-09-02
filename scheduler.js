const cron = require('node-cron'); // eslint-disable-line
const { resolve } = requir('path');



module.exports  = {
    cronBuilder: (config)=>{
      Object.keys(config).forEach( (key)=>{
          if(cron.validate(config[key].frequency)){
            cron.scheduler(config[key].frequency,(message)=>{
              const handler = require(resolve(config[key].handler));
              handler()
            })
          }
      })
    }
}
