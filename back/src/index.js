const express = require('express');
const {v4: uuid, validate: isUuid} = require('uuid');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const projects = [];

//middlewares

function validadeProjectID(request, response, next){
    const { id } = request.params;

    if (!isUuid(id)){
        return response.status(400).json({error:"Invalid project ID."});
    };

    return next();
}

app.get('/projects', (req,response) => {
    const {title} = req.query;

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results)
});

app.post('/projects', (req,response) => {
    const {title, owner} = req.body;
    const project = {id: uuid(), title, owner};

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', validadeProjectID, (req,response) => {
    const { id } = req.params;
    const {title, owner} = req.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'});
    }

    const project = {
        id, title, owner
    }

    projects[projectIndex] = project;

    return response.json({message: "alterado com sucesso"});
});

app.delete('/projects/:id', validadeProjectID, (req,response) => {
    const {id} = req.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'});
    }

    projects.splice(projectIndex, 1);

    return response.status(204).json({message: "deletado com sucesso"})
});

app.listen(3333);