function alertWebhook(req, res, settings, triggerControllers) {
    try { 
        const body = req.body;
        const {alert_title: reqTitle, alert_severity: reqSeverity} = body;
        if (!reqTitle || !reqSeverity){
            return res.status(400).send("Bad Webhook Format");
        }
    
        triggerControllers.forEach(trigger => {
            const {ALERT_TITLE: title, SEVERITY: severity} = trigger.params;
    
            if (title && !minimatch(reqTitle, title)) return;
            if (severity && reqSeverity !== severity) return;
    
            trigger.execute(reqTitle, body);
        });
        res.status(200).send("OK");
    }
    catch (err){
      res.status(422).send(err.message);
    }
}

module.exports = {
    ALERT_WEBHOOK: alertWebhook
}
