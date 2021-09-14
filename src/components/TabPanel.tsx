import { Grid } from "@material-ui/core"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Grid container role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <>{children}</>}
    </Grid>
  )
}
