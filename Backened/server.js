const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 4000 ;


app.use(cors());
app.use(express.json());

// data 
const candidate = [
    { id: 1, name: 'Ankit', skills: 'React, JavaScript', experience: 5 },
    { id: 2, name: 'Om', skills: 'Node.js, Express', experience: 3 },
    { id: 3, name: 'Aryan', skills: 'HTML, CSS, JavaScript', experience: 4 },
    { id: 4, name: 'Kartikey', skills: 'Python, Django', experience: 6 },
    { id: 5, name: 'Ayush', skills: 'Java, Spring', experience: 2 },
    { id: 6, name: 'Aman', skills: 'React, Redux', experience: 7 },
    { id: 7, name: 'Nadeem', skills: 'JavaScript, TypeScript', experience: 5 },
    { id: 8, name: 'Badal', skills: 'PHP, Laravel', experience: 3 },
    { id: 9, name: 'Prem', skills: 'Ruby, Rails', experience: 4 },
    { id: 10, name: 'Himanshu', skills: 'C++, Python', experience: 6 },
];

app.get('/api/candidates' , (req , res) => {
    res.json(candidate);
});


app.listen(PORT , () => {
    console.log (`Server is Listening on port ${PORT}`);
});

