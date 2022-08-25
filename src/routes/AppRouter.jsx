import {Routes, Route} from 'react-router-dom'
import { HomePage, DemosHTML, DemosJavascript, DemosReact } from '../pages'


export default function AppRouter(){
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/html" element={<DemosHTML />}/>
            <Route exact path="/javascript" element={<DemosJavascript />}/>
            <Route exact path="/react" element={<DemosReact />}/>
        </Routes>
    )
}
