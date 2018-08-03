const fs = require('fs-extra');

const status = [{
  sysd: {
    vpnStatus: {
        build: {},
        on: null,

    },
    deviceStatus: {

    }
  },
  logs: {
      openvpn: {
          stats: {},
          logs: {}
      },
      firehole: {
          iptables: {}
      }
  }
}];

// const readFiles = async(file) => {
//     const response = await fs.readFile(file);
//     const data = await response.toString();
//     status[0].stats.vpnStatus = data;
//     status[0].stats.on = data.includes('Manjaro');
//   }

const setVPN = async (file) => {
  const response = await fs.readFile(file);
  const data = await response.toString();
  status[0].sysd.vpnStatus.build = data;
  status[0].sysd.vpnStatus.on = data.includes('Linux Mint');
};

const vpnLogs = async(file) => {
  const response = await fs.readFile(file);
  const data = await response.toString();
  status[0].logs.openvpn.stats = data
//   console.log(status[0].logs.openvpn.stats);

}

// (async () => {
//     setVPN();
// })();

const readObj = async() => {
    let ctr = 0;
    await console.log('Overall Obj:', status[0]);
    const statusVpn = status[0].logs.openvpn.stats.split('\n');
    statusVpn.forEach(element => {
        console.log(ctr +' ===== '+ element);
        ctr++
    });

}

const constructObj = async() => {
    await setVPN('/etc/issue');
    await vpnLogs('./openvpn-status.log');
    await readObj();
}

constructObj();