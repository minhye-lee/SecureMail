const fs = require('fs');
const Path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

// const Email = require('../lib/Email').default;

// const STYLE_TAG = '%STYLE%';
const CONTENT_TAG = '%CONTENT%';
const PASSWORD_TAG = '%PASSWORD%';

/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
 */
function getFile(relativePath) {
    return new Promise((resolve, reject) => {
        const path = Path.join(__dirname, relativePath);

        return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
            if (err) return reject(err);
            return resolve(file);
        })
    });
}

/**
 * Renders the React app with the passed data.
 * Returns a promise that resolves to the full email HTML.
 * @param {Object} data
 * @return {Promise.<String>}
 */
function createEmail(content, password) {
    return Promise.all([
        // getFile('../src/inlined.css'),
        getFile('./email.html'),
        console.log('success')
    ])
        .then((template) => {
            // const emailElement = React.createElement(Email, { data });
            // const content = ReactDOMServer.renderToStaticMarkup(emailElement);
            // console.log('content',content)
            // console.log('template', template)
            // Replace the template tags with the content
            let emailHTML = String(template)
            emailHTML = emailHTML.replace(CONTENT_TAG, String(content));
            emailHTML = emailHTML.replace(PASSWORD_TAG, String(password));
            // emailHTML = emailHTML.replace(STYLE_TAG, style);

            return emailHTML;
        });
}

module.exports = createEmail;