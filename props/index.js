const Title = (props) => {
    return React.createElement('h1', null, 'Hardcoded Title! Boo!');
}
const App = (props) => {
    return <Title />;
}

ReactDOM.render(
    App,
    document.getElementById('root')
  );