exports.homePage = (request, response) => {
    const posts = [
        { name: 'Michael Choi', createdAt: '23-01-2013', message: "This is my message    This is my message This is my message This is my messageThis is my message" },
        { name: 'Random name', createdAt: '05-06-2024', message: "This is my message    This is my message This is my message This is my messageThis is my message" },
        { name: 'Michael Choi', createdAt: '23-01-2013', message: "This is my message    This is my message This is my message This is my messageThis is my message" },
    ];

    const data = {
        posts: posts
    };

    response.render('index', data);
};