import CardNav from './CardNav';

const Container = props => {
  return (
    <div className='container'>
      <CardNav title={props.title} />
      {props.children}
    </div>
  );
};
export default Container;
