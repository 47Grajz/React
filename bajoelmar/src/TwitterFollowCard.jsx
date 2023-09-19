import { useState } from "react"
export function TwitterFollowCard({ children,userName,initialItsFollowing}){
const [itsFollowing,setItsFollowing]=useState(initialItsFollowing)

    const text=itsFollowing? 'siguiendo':'seguir'
    const btnClassname=itsFollowing
    ?'tw-followCard-btn is-following'
    :'tw-followCard-btn'

    const handleClick =()=>{
        setItsFollowing(!itsFollowing)
    }
    // const imageSrc=`https://unavatar.io/${userName}`//forma facil creando na constante para poder evaluar el userName
    return(
        <article className='tw-followCard'>
            <header className='tx-followCard-header'>
                <img 
                className='tw-avatar'
                alt="el avatar de midudev" 
                src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={btnClassname} onClick={handleClick}>
                    {text}
                    <span className="tw-folloowCard-stopFollow">dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}