import './Skills.css';

function Skills() {
    const habilidades = ['Styled Components', 'Bootsrap', 'CSS RAIZ', 'Tailwind', 'PHP'];

    return (
        <section>
        <p>Habilidades</p>
        <ul>As habilidades vão vir aqui
            {habilidades.map((habilidade) => (
               <li>{habilidade}</li>
))}
        </ul>
        </section>
    )

}

export default Skills;
