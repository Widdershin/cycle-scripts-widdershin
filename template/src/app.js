import {div} from '@cycle/dom';
--IMPORT--;

function App ({DOM}) {
  return {
    DOM: --STREAM--.of(
      div('.hello-world', 'Hello world!')
    )
  };
}

export default App;
