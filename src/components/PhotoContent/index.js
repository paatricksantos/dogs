import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments';
import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoDelete from '../PhotoDelete';
import Image from '../../helper/Image';

function PhotoContent({ data, single }) {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''} `}>
      <div className={styles.img}>
        <Image alt={photo.title} src={photo.src} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
}

export default PhotoContent;