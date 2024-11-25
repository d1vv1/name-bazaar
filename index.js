const copyButton = document.getElementById('copy-button');



copyButton.addEventListener('click', () => {

    navigator.clipboard.writeText('https://www.google.com')

        .then(() => {

            alert("URL copied to clipboard!");

        })

        .catch(err => {

            console.error("Failed to copy: ", err);

        });

});