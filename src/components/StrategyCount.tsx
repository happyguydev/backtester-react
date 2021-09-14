import React from "react";
import { useQuery } from "@apollo/client";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";
import {strategyCount} from "../services/apollo";
import gql from "graphql-tag";

// TODO - Rename to StrategyCount
export default function StrategyCount(){

    const { loading, error, data } = useQuery(gql`
        query StrategiesCountQuery {
            strategyCount @client
        }
    `);

    if(loading) {
        return <div>loading</div>
    }

    if(error) {
        return <div>error</div>
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Strategy Count</FormLabel>
            <RadioGroup aria-label="group1" name="group1" value={data?.strategies}>
                <Grid container direction="row">
                    {[...Array(10)].map((v, index) => {
                        const option = index + 1;
                        return <FormControlLabel key={`group1_radio_${option}`} value={option.toString()} onChange={({target}) => {
                            strategyCount((target as any).value);
                        }} control={<Radio/>} label={option.toString()}/>;
                    })}
                </Grid>
            </RadioGroup>
        </FormControl>
    )

}
