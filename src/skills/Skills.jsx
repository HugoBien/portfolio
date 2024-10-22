import { useState } from 'react'
import './Skills.css'

function Skills() {

    return (
        <div>
            <h1>Compétences</h1>
            <div>
                <h3>Programming language</h3>
                <li>
                    <img src="https://skillicons.dev/icons?i=py,java,c,cpp,cs,js,css,html,php"/>
                </li>
            </div>
            <div>
            <h3>Framework ?</h3>
            <li>
                <img src="https://skillicons.dev/icons?i=angular,react,vite,spring,nodejs,postgres,mysql"/>
            </li>
            </div>

        </div>
    )
}

export default Skills