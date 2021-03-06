var core_daemon_grpconf = [
    {
        "daemonConfigGroup": "group1",
        "daemon": "hellodaemon",
        "status": 1,
        "interval": 1800000,
        "jobs": {
            "hello": {
                "type": "global", // "tenant" || "global"
                "serviceConfig": {"mike": "tormoss"}, //if global
                "tenantExtKeys": [] //if tenant
            }
        }
    },
    {
        "daemonConfigGroup": "group1",
        "daemon": "hellodaemoncron",
        "status": 1,
        "type": "cron",
        "cronConfig": {
            "cronTime": '* * * * * *'
        },
        "jobs": {
            "hello": {
                "type": "global", // "tenant" || "global"
                "serviceConfig": {"mike": "tormoss CRON"}, //if global
                "tenantExtKeys": [] //if tenant
            }
        }
    }
];
