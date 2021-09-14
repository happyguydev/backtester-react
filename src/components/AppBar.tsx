import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

interface AppbarProps {
  children?: React.ReactNode
  value: any
  handleChange: any
}

export default function Appbar(props: AppbarProps) {
  const { value, handleChange } = props

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Main Page" {...a11yProps(0)} />
        <Tab label="List Page" {...a11yProps(1)} />
        <Tab label="Blank Page" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
