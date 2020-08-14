import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import {Route} from 'react-router-dom';
import {Link as RouterLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default function SimpleBreadcrumbs() {
  return (
    <Route>
      {({location}) => {
        const pathnames = location.pathname.split('/').filter((x) => x);
        return (
          <Paper elevation={4} style={{padding: '0.6rem'}}>
            <Breadcrumbs aria-label="Breadcrumb">
              <RouterLink color="inherit" to="/">
                Home
              </RouterLink>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                  <Typography color="textPrimary" key={to}>
                    {value}
                  </Typography>
                ) : (
                  <RouterLink color="inherit" to={to}>
                    {value}
                  </RouterLink>
                );
              })}
            </Breadcrumbs>
          </Paper>
        );
      }}
    </Route>
  );
}
