# kaholo-trigger-logzio
Kaholo Trigger for Logz.io

## How To Use

After installing this trigger on the Kaholo Serve make sure to add a notifications endpoint in Logz.io,
with a URL of the wanted webhook.

# Methods:

## Logz.io Alert Webhook

This webhook listen on POST \<Kaholo-URL\>/webhook/logzio/alert

**Parameters:**

1) Alert Title (String) **Optional** - If specified accept only incoming requests with the specified alert title.
2) Alert Severity (Options) **Optional** -  If specified, accept only requests with the specified alert Severity.
