# Composition

Use of `props.children` and Composition can allow you to mantain a unified UI
while displaying different types of information.

## CompositionContainer

The `CompositionContainer` is the component that defines the design of each
card. It will retur a Navbar which will take a `prop` for the title and a
`props.children`. The `props.children` represents whatever is placed between the
opening and closing tags of the `CompositionContainer` which can be seen in the
`App.js` file. In this case `ArticleImage`, `ListOfLinks` and `ButtonList` are
the `props.children`

## Button as a Component

A button can be a component that is passed props to change functionality and
design. This button component uses inline styles to give the button its unique
elements. The unified elements are defined in the `index.css` button element.

## Data

`buttonData` and `linksData` are just arrays of objects that will be passed to
the `ButtonList` and `ListOfLinks` component respectively. In the `ButtonList`
component, notice how `props` are passed to the `Button` component using the
spread operator.
