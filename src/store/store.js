import { createStore } from 'redux';
import { Provider } from 'react-redux';
import salaryReducer from './reducers/salaryReducer';

const store = createStore(salaryReducer);

const AppStoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default AppStoreProvider;
