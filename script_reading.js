function convertTextToHTML() {
    fetch('script.txt')
        .then(response => response.text())
        .then(data => {
            const htmlContent = textToHTML(data);
            document.getElementById('script_content').innerHTML = htmlContent;
        })
        .catch(error => console.error('Error reading the file:', error));
}

function textToHTML(text) {
    let html = text.split('\n').map(line => {
        const colonIndex = line.indexOf(':');
        const beforeColon = line.slice(0, colonIndex + 1);
        const afterColon = line.slice(colonIndex + 1);
        return `<p><strong>${beforeColon}</strong>${afterColon}</p>`;
    }).join('');
    return html;
}



