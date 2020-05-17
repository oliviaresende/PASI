import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home/index'))
const Professional = React.lazy(() => import('./pages/Professional/index'))
const Patient = React.lazy(() => import('./pages/Patient/index'))
const Construction = React.lazy(() => import('./pages/Construction/index'))


const Routes = props => (
    <Suspense fallback="Loading..." >
        <Switch>
            <Route exact path="/" component={routerProps => <Home {...routerProps} />} />
            <Route exact path="/professional" component={routerProps => <Professional {...routerProps} />} />
            <Route exact path="/patient" component={routerProps => <Patient {...routerProps} />} />
            <Route exact path="/construction" component={routerProps => <Construction {...routerProps} />} />
        </Switch>
    </Suspense>
)

export default Routes
