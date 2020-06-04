import {a} from './c'

console.log(a)


export interface HelloWorldProps {
  firstName: string;
  lastName: string;
}

export const HelloWorld = (props: HelloWorldProps) => (
    console.log(props, '---->this is my full name')
);

export default HelloWorld;