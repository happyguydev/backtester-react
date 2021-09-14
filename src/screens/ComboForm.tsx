import React from "react";
import {Grid} from "@material-ui/core";
import StrategyCount from "../components/StrategyCount";
import StrategySelect from "../components/StrategySelect";
import TradeActionSelect from "../components/TradeActionSelect";

export default function ComboForm(){

    return (
        <Grid container direction="column" alignContent="flex-start">
            <StrategyCount />
            <StrategySelect />
            <TradeActionSelect />
        </Grid>
    )

}
