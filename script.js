function generateDorks() {
    let domain = document.getElementById("domain").value.trim();
    
    if (domain === "") {
        alert("Please enter a domain!");
        return;
    }

    document.getElementById("directoryListing").href = `https://www.google.com/search?q=site%3A*.${domain}+intitle%3A%22Index+of+%2F%22+OR+inurl%3A%2F`;
    document.getElementById("configurationFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext:env | ext:xml | ext:json | ext:yaml | ext:conf | ext:config intext:password)`;
    document.getElementById("databaseFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext%3Asql+OR+ext%3Adb+OR+inurl%3A.bak)`;
    document.getElementById("logFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext%3Alog+OR+inurl%3Alogs+OR+ext%3Atxt+inurl%3Alog)`;
    document.getElementById("gitFolder").href = `https://www.google.com/search?q=site%3A*.${domain}+(inurl%3A.git+OR+intitle%3A%22git+repository%22+OR+inurl%3A.git%2Fconfig)`;
    document.getElementById("backupFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext:bak | ext:old | ext:backup)`;
    document.getElementById("exposedFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext:doc OR ext:docx OR ext:odt OR ext:pdf OR ext:rtf OR ext:ppt OR ext:pptx OR ext:csv OR ext:xls OR ext:xlsx OR ext:txt OR ext:xml OR ext:json OR ext:zip OR ext:rar OR ext:md OR ext:log OR ext:bak OR ext:conf OR ext:sql)`;
    document.getElementById("apikeySecrets").href = `https://www.google.com/search?q=site%3A*.${domain}+(intext:"api_key" | "secret_key" | "access_token" | "auth_key")`;
    document.getElementById("exposedAdminPanels").href = `https://www.google.com/search?q=site%3A*.${domain}+(inurl:admin | inurl:dashboard | inurl:admin login)`;

    document.getElementById("exposeds3").href = `https://www.google.com/search?q=site:s3.amazonaws.com inurl:${domain}`;
    document.getElementById("exposedGoogleDrive").href = `https://www.google.com/search?q=(site:drive.google.com OR site:docs.google.com) ${domain} ("confidential" OR "internal")`;
    document.getElementById("pastebinLeaks").href = `https://www.google.com/search?q=site:pastebin.com ${domain}`;
}

