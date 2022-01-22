import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import classes from "../../assets/css/cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loding..";
  }
  console.log();
  return (
    <>
      <div className={classes.container}>
        <Grid container spacing={3} justifyContent="center">
          <Grid
            item
            component={Card}
            xs={12}
            className={cx(classes.card, classes.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography veriant="body2">
                Number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          <Grid
            item
            component={Card}
            xs={12}
            className={cx(classes.card, classes.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography veriant="body2">
                Number of recoveries of COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          <Grid
            item
            component={Card}
            xs={12}
            className={cx(classes.card, classes.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography veriant="body2">
                Number of deaths caused by COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Cards;
