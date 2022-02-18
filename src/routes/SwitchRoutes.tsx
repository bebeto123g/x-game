import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes';
import PageLoader from '../components/UI/Loader/PageLoader';

const SwitchRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, Element }) => (
                    <Route path={path} key={path} element={<Element />} />
                ))}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>{' '}
        </Suspense>
    );
};

export default SwitchRoutes;
