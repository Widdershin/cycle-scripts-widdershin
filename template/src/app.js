import {div} from '@cycle/dom';
--IMPORT--

function App (sources) {
  return {
    DOM: --STREAM--.of(
      div('.hello-world', 'Hello world!')
    );
  }
}

export default App;
