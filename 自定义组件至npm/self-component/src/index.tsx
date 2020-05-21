
import * as React from "react";
import './index.less';
export interface HelloWorldProps {
  firstName: string;
  lastName: string;
}

export const HelloWorld = (props: HelloWorldProps) => (
  <h1 className='my-coponent-style-wrapper'>
    Hi there from React! Welcome {props.firstName} and {props.lastName}!
    this is my first component
  </h1>
);

export default HelloWorld;