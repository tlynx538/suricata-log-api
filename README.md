# Suricata Log API

## 

This API allows Suricata's eve.json data to be accesible to multiple frotend interfaces.
## Usage: 
``` npm install ``` - installs the packages required by the API

To run this API, make sure suricata service is running

``` 
On Linux: systemctl status suricata
### Sample Output ###
● suricata.service - LSB: Next Generation IDS/IPS
     Loaded: loaded (/etc/init.d/suricata; generated)
     Active: active (running) since Fri 2021-11-19 14:47:28 UTC; 15h ago
       Docs: man:systemd-sysv-generator(8)
      Tasks: 10 (limit: 9302)
     Memory: 470.8M
     CGroup: /system.slice/suricata.service
             └─871 /usr/bin/suricata -c /etc/suricata/suricata.yaml --pidfile /var/run/suricata.pid --af-packet -D -vvv

Nov 19 14:47:26 nds-server1 systemd[1]: Starting LSB: Next Generation IDS/IPS...
Nov 19 14:47:28 nds-server1 suricata[774]: Starting suricata in IDS (af-packet) mode... done.
Nov 19 14:47:28 nds-server1 systemd[1]: Started LSB: Next Generation IDS/IPS.
```
If not, run ```systemctl start suricata```

Once after Suricata runs, run the following:

```npm start``` - this will start the API/web server on http://your-ip-address:8000 

## Current API routes:
http://your-ip-address:8000/all - shows the EVE JSON output containing outputs alerts, anomalies, metadata, file info and protocol specific records.

The JSON array is updated if and only if this API Endpoint is called.

--- Under Construction --