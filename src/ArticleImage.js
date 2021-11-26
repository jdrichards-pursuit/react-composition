import space from './images/space.jpg';

const ArticleImage = () => {
  return (
    <div className='article'>
      <img src={space} alt='space' />
      <h4>Space, the Final Frontier</h4>
      <p>
        There can be no thought of finishing for ‘aiming for the stars.’ Both
        figuratively and literally, it is a task to occupy the generations. And
        no matter how much progress one makes, there is always the thrill of
        just beginning.
      </p>
    </div>
  );
};
export default ArticleImage;
