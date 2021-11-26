import Button from './Button';
import { buttonData } from './buttonData';

const ButtonList = () => {
  return (
    <div>
      {buttonData.map(button => (
        <Button key={button.id} {...button} />
      ))}
    </div>
  );
};
export default ButtonList;
