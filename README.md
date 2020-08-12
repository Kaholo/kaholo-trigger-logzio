# kaholo-trigger-logzio
Kaholo Trigger for Logz.io

# Methods:

## Logz.io Alert Webhook

This webhook listen on POST http://<Your URL>/webhook/logzio/alert

**Parameters:**

1) Alert title
2) Alert Severity

When creating the notification endpoint in Logz.io you should transfer in the payload JSON

```
{
    "alert_title": "{{alert_title}}",
    "alert_event_samples": "{{alert_samples}}"
}
```

In Kaholo's trigger you need to add the alert title as well as the severity from the drop down list in order to start the map.
