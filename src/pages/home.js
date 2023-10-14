import Sidebar from "../components/sidebar"
import LandingPage from "../components/landing"

export default function Home() {
    return (
        <div style ={{display: 'flex'}}>
            <Sidebar style={{flex: '1 auto'}}/>
            <LandingPage/>
        </div>
    )
}