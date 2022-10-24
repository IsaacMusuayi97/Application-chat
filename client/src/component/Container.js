import React from 'react'

function Container() {
    return (
        <div>
            <Sidebar />
            <Middlebar setProfil={setProfil} profil={profil} />
            <Body profil={profil} />
        </div>
    )
}

export default Container
