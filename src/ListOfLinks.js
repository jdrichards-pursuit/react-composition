import { links } from './linksData';

const ListOfLinks = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
      {links.map(({ title, id, url }) => (
        <a key={id} href={url}>
          {title}
        </a>
      ))}
    </div>
  );
};
export default ListOfLinks;
