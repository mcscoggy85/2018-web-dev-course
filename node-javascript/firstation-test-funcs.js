const fs = require('fs-extra');
const csv = require('csvtojson');
// const converter = csv(parserParams, streamOption);

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

// using /etc/issue as an example to set object vpn status to true or false
const setVpnSystemdStatus = async (file) => {
  const response = await fs.readFile(file);
  const data = await response.toString();
  status[0].sysd.vpnStatus.build = data;
  status[0].sysd.vpnStatus.on = data.includes('Linux Mint');
  const vpnSystemdStatus = status[0].sysd.vpnStatus.on;
  await console.log(vpnSystemdStatus);
};

// (async () => {
//     setVPN();
// })();

const readVpnStatusLogs = async(file) => {
    const vpnStatusLog = await csv().fromFile(file);
    await console.log('Reading csv as object:');
    const newStatusLog = await vpnStatusLog.map(row => Object.values(row).join(' '));
    status[0].logs.openvpn.stats = newStatusLog;
    // await console.log(status[0].logs.openvpn.stats);
    await status[0].logs.openvpn.stats.forEach(element => {
        console.log(element);
    });

}

const constructObj = async() => {
    await setVpnSystemdStatus('/etc/issue');
    await readVpnStatusLogs('./openvpn-status.log');
}

constructObj();