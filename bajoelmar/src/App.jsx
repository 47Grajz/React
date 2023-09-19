import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
    return(
        //es lo mismo que hacer un react fragment ya que no se esta renderizando
        <section className='App'>
        <TwitterFollowCard
        initialItsFollowing  ={true}
        userName='midudev' >
            <h1>profe</h1>
        
        </TwitterFollowCard>

        <TwitterFollowCard  
         userName="wismichu">
        <h1>ismael</h1>
        </TwitterFollowCard>
        
        </section>
        
    )      
}