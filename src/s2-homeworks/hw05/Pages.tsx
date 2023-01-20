import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre_junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
}

function Pages() {
    return (
        <div style={{width: '100%'}}>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />} />  прописываеться путь в url

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={'pre_junior'}   element={<PreJunior />} />
                <Route path={'junior'}   element={<Junior />} />
                <Route path={'junior_plus'}   element={<JuniorPlus />} />


                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
