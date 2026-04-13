import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from '@routes/routes';
import { AppContainer } from './AppContainer';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppContainer />}>
                    {routers().map((route) => (
                        <Route
                            key={route.route}
                            path={route.route}
                            element={
                                route.element
                            }
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
