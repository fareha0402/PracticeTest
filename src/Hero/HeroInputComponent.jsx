import React from 'react'
const Hero = ({list}) =>{
    return(
    <div className="offset-2 col-sm-10">
        <h2>Hero Component</h2>
        <ul style={{display:"flex"}}>
        <li className="col-sm-3">NAME:</li>
        <li className="col-sm-3">Alt:</li>
        <li className="col-sm-3">TEAM:</li>
        </ul>
      {list.map((ele) => (
          <ol key={ele.name} style={{display:"flex"}} >
        <li className="col-sm-3" style={{listStyle:"none"}} >{ele.name}</li>
        <li className="col-sm-3" style={{listStyle:"none"}}>{ele.alt}</li>
        <li className="col-sm-3" style={{listStyle:"none"}}>{ele.team}</li>
        </ol>
      ))}
    </div>)
}
const HeroInputComponent = () =>{
    const [name,setName] =React.useState('');
    const [alt,setAlt] = React.useState('');
    const [team,setTeam] = React.useState('');
    const [heros,setHerosList] = React.useState([]);
    function submit(e){
        e.preventDefault();
        setHerosList([...heros,{
            "name": name,
            "alt":alt,
            "team":team
        }])
        console.table(heros);
    }
    return (
    <div>
        <form onSubmit={(e) => submit(e)} style={{display:"flex", flexDirection:"column"}}>
        <span className="offset-1">Name:{name}</span>
        <input className="offset-1 col-sm-2 input" value={name} onChange={(e) => setName(e.target.value)}></input>
        <span className="offset-1">Alt:{alt}</span>
        <input className="offset-1 col-sm-2" value={alt} onChange={(e) => setAlt(e.target.value)}></input>
        <span className="offset-1">Team: {team}</span>
        <input className="offset-1 col-sm-2" value={team} onChange={(e) => setTeam(e.target.value)}></input>
        <button className="offset-1 col-sm-1 btn btn-primary" style={{position:"relative",top:"10px"}}>Submit</button>
        </form>
        <Hero list={heros}/>
    </div>
    )
}
export default HeroInputComponent