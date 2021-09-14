import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import gql from "graphql-tag";
import {FormControl, FormLabel, TextField} from "@material-ui/core";
import {comboStrategiesVar} from "../services/apollo";
import {Autocomplete} from "@material-ui/lab";
import {StrategySelectQuery, StrategySelectQuery_frontend} from "./__generated__/StrategySelectQuery";

function StrategySelectGroups({index, data}:{index:number,data?:StrategySelectQuery_frontend}) {


    const [indicator,setIndicator] = useState<string>("");
    const [operator,setOperator] = useState<string>("");
    const [operand,setOperand] = useState<string>("");

    const indicatorOptions = data?.indicators?.map(f => f?.name as string);
    const operatorOptions = data?.operators?.map(f => f?.name as string);
    const operandOptions = data?.operands?.map(f => f as string);


    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Strategies - Index: {index}</FormLabel>
            <Autocomplete
                id={`group2_input1_${index}`}
                value={indicator || null}
                options={indicatorOptions || []}
                renderInput={(params) => <TextField {...params} label="Indicator" variant="outlined"/>}
                onChange={(e, v) => {
                    setIndicator(v as string);
                }}
            />
            {indicator && <Autocomplete
                id={`group2_input2_${index}`}
                value={operator || null}
                options={operatorOptions || []}
                renderInput={(params) => <TextField {...params} label="Operator" variant="outlined"/>}
                onChange={(e, v) => {
                    setOperator(v as string)
                }}
            />}
            {operator && <Autocomplete
                id={`group2_input3_${index}`}
                value={operand || null}
                options={operandOptions || []}
                renderInput={(params) => <TextField {...params} label="Operand" variant="outlined"/>}
                onChange={(e, v) => {
                    setOperand(v as string)
                    comboStrategiesVar([{operand:v!,operator,indicator}])
                }}
            />}
        </FormControl>
    )
}



export default function StrategySelect(){

    const { loading, error, data } = useQuery<StrategySelectQuery>(gql`
        query StrategySelectQuery {
            frontend {
                indicators {
                    name
                }
                operands
                operators {
                    name
                }
            }
            strategyCount @client
        }
    `);

    if(loading) {
        return <div>loading strategies</div>
    }

    if (error) {
        return <div>error</div>
    }

    const strategyCount = data?.strategyCount;

    return (
        <>
            {
                strategyCount && [...Array(Number(strategyCount))].map((v, index) => {
                    return <StrategySelectGroups key={`group2_${index}`}  index={index} data={data?.frontend || undefined}/>
                })
            }
        </>
    )

}
