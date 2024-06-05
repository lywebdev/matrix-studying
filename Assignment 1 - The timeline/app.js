const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


const posts = [
    { name: 'Michael Choi', createdAt: '23-01-2013', message: "This is my message    This is my message This is my message This is my messageThis is my message" },
    { name: 'Random name', createdAt: '05-06-2024', message: "This is my message    This is my message This is my message This is my messageThis is my message" },
    { name: 'Michael Choi', createdAt: '23-01-2013', message: "This is my message    This is my message This is my message This is my messageThis is my message" },
];

app.get('/', (request, response) => {
    const filePath = path.join(__dirname, 'views', 'index.html');
    fs.readFile(filePath, 'utf-8', (err, html) => {
        if (err) {
            response.status(500).send('Error loading the page');
            return;
        }

        let postsHtml = '<ul>';
        posts.forEach(post => {
            postsHtml += `
                <li>
                    <h2 style="font-weight: bold;">${post.name}</h2>
                    <p>${post.message}</p>
                    <span style="font-size: 14px;">${post.createdAt}</span>
                </li>
            `;
        });
        postsHtml += `<ul>`;

        html = html.replace('{{posts}}', postsHtml);

        response.send(html);
    });
});


app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}`);
});
