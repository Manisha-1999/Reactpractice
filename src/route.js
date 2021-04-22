import { Route, Switch , BrowserRouter } from 'react-router-dom';
import Page1 from './First/Page1';
import Page2 from './Second/Page2';
import Page3 from './Third/Page3';
import Error from './End/Error';
import New from './Fourth/New';
import Home from './Main/Home';
import Asd from './Condition';

const Router = () => {
     return (
         
         <BrowserRouter>
         <New/>
         <Asd />
         <Switch>
         <Route exact path="/" component={Home } />  
         <Route exact path="/page1" component={Page1 } />  
         <Route exact path="/page2" component={Page2 } />
         <Route exact path="/page3" component={() => <Page3 />} />
         <Route component={Error} />
         {/* <Route { Ter = "./page1" ?   page1  :  page3 } /> */}
         </Switch>
         </BrowserRouter>
        
     );
     };
    
export default Router;