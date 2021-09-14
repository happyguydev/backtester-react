import {  useState } from "react"
import { Container, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core"

function ListPage() {
  const [state] = useState<Array<Object> | null>([])

  return (
    <Container>
      <List>
        {state
          ? state.map(({ url, key }: any, i) => (
              <ListItem key={i} button component="a" href={url} target="_blank">
                <ListItemText primary={key} />
                <ListItemSecondaryAction>
                  <Button variant="outlined" color="secondary" onClick={() => {
                    console.log(22)}}>
                    Delete
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          : "No data found"}
      </List>
    </Container>
  )
}

export default ListPage
