import CompositionContainer from './CompositionContainer';
import ArticleImage from './ArticleImage';
import ButtonList from './ButtonList';
import ListOfLinks from './ListOfLinks';

function App() {
  return (
    <div>
      <CompositionContainer title='Space Ventures'>
        <ArticleImage />
      </CompositionContainer>
      <CompositionContainer title='Tags'>
        <ButtonList />
      </CompositionContainer>
      <CompositionContainer title='Docs Links'>
        <ListOfLinks />
      </CompositionContainer>
    </div>
  );
}

export default App;
