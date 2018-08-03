const fs = require('fs-extra');

const status = [{
  stats: {
    vpnStatus: {},
    on: null,
  },
}];

const readFiles = async(file) => {
    const response = await fs.readFile(file);
    const data = await response.toString();
    status[0].stats.vpnStatus = data;
    status[0].stats.on = data.includes('Manjaro');
  }

const setVPN = async () => {
  await readFiles('/etc/issue');
  console.log(status);
  console.log(status[0].stats.vpnStatus);
};

// (async () => {
//     setVPN();
// })();

setVPN();