import { Route, Switch , BrowserRouter } from 'react-router-dom';
import Page1 from './First/Page1';
import Page2 from './Second/Page2';
import Page3 from './Third/Page3';
import Error from './End/Error';

const Router = () => {
     return (

         <BrowserRouter>
         <Switch>
            
         <Route path="/page1" component={Page1 } />  
         <Route path="/page2" component={Page2 } />
         <Route path="/page3" component={() => <Page3 />} />
         <Route component={Error} />
        {Router === "Page1" ? <Page1/> : <Page2/> }
         </Switch>
         </BrowserRouter>

     );
};
export default Router;