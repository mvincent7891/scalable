## Scalable - Practice in React and Redux

## TODO Items
1. Determine the best way to notify all components that notes have changed
  - The problem is that #fetchNotes is triggered from the fretboard component and it relies on local parameters (width and height).
  - Need to refactor width and height into global state
2. Color selectors - make note colors a part of state and add redux loop and components for selection
