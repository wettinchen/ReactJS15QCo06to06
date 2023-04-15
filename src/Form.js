import React from 'react';
import Button from './Button';

const Form = ({ requestType, setRequestType }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
        <Button
          buttonText="users"
          requestType={requestType}
          setRequestType={setRequestType}
        />
        <Button
          buttonText="posts"
          requestType={requestType}
          setRequestType={setRequestType}
        />
        <Button
          buttonText="comments"
          requestType={requestType}
          setRequestType={setRequestType}
        />
    </form>
  )
}

export default Form