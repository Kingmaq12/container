import React, { useEffect, useState } from 'react';
import { createNanoEvents } from './utils/nanoevents';
import { Route, Switch, Link } from 'react-router-dom';
import i18n from '../config/i18n/i18n';
import './Main.scss';
import Sidebar from './components/Sidebar/Sidebar';

const rickRoutes = import('RickAndMorty/routes');
const RickAndMorty = React.lazy(() => import('RickAndMorty/Main'));
const pokemonRoutes = import('Pokemon/routes');
const Pokemon = React.lazy(() => import('Pokemon/Main'));
const emitter = createNanoEvents();

i18n.on('languageChanged', (lng: any) => {
    emitter.emit('languageChanged', lng);
});

const createLinksByMF = (microfrontName: string, routesPromise: Promise<any>) => {
    const [mapedRoutes, setMapedRoutes] = useState<any[]>([]);
    useEffect(() => {
        routesPromise.then((routes) => {
            return setMapedRoutes(
                routes.default.map((route: any) => (
                    <div className="button-link" key={`${microfrontName}${route.path}`}>
                        <Link className={'menu-text font-bold'} to={`/${microfrontName}${route.path}`}>
                            {route.title}
                        </Link>
                    </div>
                )),
            );
        });
    }, [microfrontName, routesPromise]);
    return mapedRoutes;
};

const renderMFE = (MFE: any) => {
    return (
        <React.Suspense fallback="Loading...">
            <MFE emitter={emitter} />
        </React.Suspense>
    );
};

const Main = () => {
    const links = [
        ...createLinksByMF('RickAndMorty', rickRoutes),
        ...createLinksByMF('Pokemon', pokemonRoutes)
    ];

    return (
        <div className="wrapper">
            <Sidebar links={links} />
            <main>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/RickAndMorty" render={(_) => renderMFE(RickAndMorty)} />
                        <Route path="/Pokemon" render={(_) => renderMFE(Pokemon)} />
                    </Switch>
                </React.Suspense>
            </main>
        </div>
    );
};

export default Main;
