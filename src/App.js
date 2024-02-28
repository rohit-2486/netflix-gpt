
import { Provider } from 'react-redux';
import Body from './component/Body';
import appStore from './utlis/appStore';
function App() {
  return (
    <div >
      <Provider store={appStore}> <Body/> </Provider>
    </div>
  );
}

export default App;
