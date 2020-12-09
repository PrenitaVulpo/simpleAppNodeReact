import React, {useState, useEffect} from 'react'
import Header from './components/header'
import background from './assets/imgs/background.jpeg'
import api from './services/api'
import './App.css'

function App(){
    const [projects, setProjects] = useState([])

    async function handleAddProject(){
        const response = await api.post('projects',{
            title: `Front-end ${Date.now()}`,
            owner: "Paulo Guilherme"
        })

        const project = response.data

        setProjects([...projects, project])
    }

    function handleDeleteProject(id){
        api.delete(`projects/${id}`)
    }

    useEffect(()=>{
        api.get('projects').then(response=>{
            setProjects (response.data)
        })
    }, [])

    return (
        <>
            <Header title="Projects"/>
            <img width="300" src={background} alt="tela de fundo"/>
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}<button onClick={handleDeleteProject(project.id)}>deletar-me</button></li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Add proj</button>
        </>
    )
}

export default App