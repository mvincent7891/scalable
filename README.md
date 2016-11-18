## Scalable - Practice in React and Redux

Coming soon...

## TODO Items
- [X] Determine the best way to notify all components that notes have changed
  + The problem is that #fetchNotes is triggered from the fretboard component and it relies on local parameters (width and height).
  + Need to refactor width and height into global state
- [ ] Color selectors - make note colors a part of state and add redux loop and components for selection
- [ ] Refactor notes so that a note object/array exists for each fret on each string; will make event listener for mouseover (and tooltips that follow) possible. Need a quick lookup into notes list via (x, y) coords of mouse 
