import { useState } from 'react';
import { Form } from 'semantic-ui-react';

const membershipOpts = [
  { key: "b", text: "Bronze", value: "Bronze"},
  { key: "s", text: "Silver", value: "Silver"},
  { key: "g", text: "Gold", value: "Gold"},
  { key: "p", text: "Platinum", value: "Platinum"}
]

const AccountForm = () => {
  const [user, setUser] = useState({ username: "", membership: "" })
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
      name  = "username"
      value = {user.username}
      onChange={(e) => setUser({...user, username: e.title.value })}
      label = "New Username"
      required
      />
      <Form.Select
      name = "membership"
      value = {user.membership}
      onChange = {(e) => setUser({...user, membership: e.target.value })}
      label = "New Membership"
      options = { membershipOpts }
      required
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}



export default AccountForm;