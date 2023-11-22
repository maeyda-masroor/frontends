import SectionIntro from "../component/SectionIntro";
import { Helmet } from 'react-helmet-async';
function Home(){
return (
        <div>
        <Helmet>
        <title>Remedial Hospital Center</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        </Helmet>
        <SectionIntro/>
        </div>
)    
}
export default Home;